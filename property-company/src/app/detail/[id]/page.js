"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { properties } from '../../data'; 

export default function DetailProperti({ params }) {
    // Di Next.js 15 Client Component, params harus di-*unwrap* menggunakan React.use()
    const resolvedParams = React.use(params);
    const id = resolvedParams.id;
    
    // State untuk mengontrol munculnya popup Siteplan
    const [showSiteplan, setShowSiteplan] = useState(false);

    // Mencari data properti
    const properti = properties.find((p) => String(p.id) === String(id));

    if (!properti) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50">
                <h1 className="text-3xl font-bold text-slate-800 mb-2">Properti Tidak Ditemukan</h1>
                <Link href="/properti" className="px-6 py-3 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition">
                    Kembali ke Daftar Properti
                </Link>
            </div>
        );
    }

    return (
        <div className="bg-white min-h-screen pb-20">
            
            {/* 1. HERO SECTION (Referensi: Image 8) */}
            <div className="relative w-full h-[400px] md:h-[500px] mt-16 md:mt-20">
                {/* Background Image dengan Overlay */}
                <div className="absolute inset-0">
                    <img src={`/${properti.img}`} alt={properti.title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-white/70 md:bg-white/50 backdrop-blur-sm"></div>
                </div>

                {/* Konten Hero */}
                <div className="relative max-w-7xl mx-auto px-6 h-full flex flex-col md:flex-row justify-between items-start md:items-center pt-10 md:pt-0">
                    <div>
                        <Link href="/properti" className="text-slate-800 hover:text-blue-600 font-bold text-sm flex items-center gap-2 mb-4">
                            &larr; Kembali
                        </Link>
                        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-2">{properti.title}</h1>
                        <p className="text-sm text-slate-700 font-semibold mb-1">ID Lokasi: SPA2720062026T001</p>
                        <p className="text-sm text-slate-700 mb-1 uppercase">{properti.location}</p>
                        <p className="text-sm text-slate-700 font-bold">PT BUMI CITRA MANDIRI (REI)</p>
                    </div>

                    <div className="mt-8 md:mt-0 text-left md:text-right bg-white/90 p-6 rounded-xl shadow-lg border border-slate-200">
                        <h3 className="font-bold text-lg text-slate-800 mb-2">Status Rumah</h3>
                        <div className="text-sm text-slate-600 mb-4 space-y-1">
                            <p>Subsidi : <span className="font-bold text-slate-900">111 Unit</span></p>
                            <p>Terjual Subsidi : <span className="font-bold text-slate-900">0 Unit</span></p>
                            <p>Komersil : <span className="font-bold text-slate-900">0 Unit</span></p>
                            <p>Terjual Komersil : <span className="font-bold text-slate-900">0 Unit</span></p>
                        </div>
                        <button 
                            onClick={() => setShowSiteplan(true)}
                            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2.5 px-6 rounded shadow-md transition w-full md:w-auto"
                        >
                            Lihat Siteplan Digital
                        </button>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 mt-10">
                {/* 2. PETA & FOTO LOKASI (Referensi: Image 8) */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12 border-b border-slate-200 pb-12">
                    <div className="md:col-span-1">
                        <h3 className="font-bold text-lg border-b-2 border-blue-500 inline-block mb-4">Peta Lokasi</h3>
                        <div className="bg-slate-200 h-48 rounded-lg flex items-center justify-center text-slate-500 shadow-inner">
                            [Embed Google Maps]
                        </div>
                    </div>
                    <div className="md:col-span-3">
                        <h3 className="font-bold text-lg mb-4">Foto Lokasi</h3>
                        <div className="flex gap-4 overflow-x-auto pb-4">
                            <img src={`/${properti.img}`} className="h-48 w-64 object-cover rounded-lg border border-slate-200 shadow-sm flex-shrink-0" alt="Foto Gerbang" />
                            <img src={`/${properti.img}`} className="h-48 w-64 object-cover rounded-lg border border-slate-200 shadow-sm flex-shrink-0" alt="Foto Lingkungan" />
                            <img src={`/${properti.img}`} className="h-48 w-64 object-cover rounded-lg border border-slate-200 shadow-sm flex-shrink-0" alt="Foto Jalan" />
                        </div>
                    </div>
                </div>

                {/* 3. KONTAK & SPESIFIKASI (Referensi: Image 7) */}
                <div className="flex flex-col md:flex-row gap-12">
                    {/* Sidebar Kontak */}
                    <div className="w-full md:w-1/4">
                        <div className="text-sm text-slate-700 space-y-2 sticky top-24">
                            <p className="font-bold uppercase mb-4">JL RAYA CIGALONTANG PERUMAHAN {properti.title.toUpperCase()} {properti.location.toUpperCase()}</p>
                            <p><strong>Telp :</strong> 082317463800</p>
                            <p><strong>Email :</strong> dev@perumahan.com</p>
                            <p><strong>Website :</strong> {properti.title}</p>
                            <p><strong>No Whatsapp :</strong> 6282317463800</p>
                            <button className="mt-4 bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded w-full flex items-center justify-center gap-2">
                                WhatsApp Kantor Pemasaran
                            </button>
                        </div>
                    </div>

                    {/* Area Tipe Rumah & Denah */}
                    <div className="w-full md:w-3/4">
                        <h2 className="text-2xl font-normal text-slate-800 mb-6 border-b pb-2">Tipe Rumah</h2>
                        
                        <div className="mb-10">
                            <h3 className="text-lg text-slate-700 mb-4">1. Tipe {properti.area} (subsidi)</h3>
                            
                            <div className="flex flex-col md:flex-row gap-6 mb-6">
                                {/* Foto Rumah */}
                                <div className="w-full md:w-1/3">
                                    <img src={`/${properti.img}`} alt="Fasad Rumah" className="w-full h-auto object-cover border rounded" />
                                </div>
                                {/* Denah */}
                                <div className="w-full md:w-1/3">
                                    <div className="w-full h-48 bg-blue-50 border-2 border-blue-400 rounded flex items-center justify-center text-blue-800 font-bold p-4 text-center">
                                        [Ilustrasi Denah {properti.area} m²]
                                    </div>
                                </div>
                                {/* Harga & Info Singkat */}
                                <div className="w-full md:w-1/3 text-sm text-slate-700 space-y-1">
                                    <p>Harga: <span className="font-bold">{properti.price}</span></p>
                                    <p>Luas Bangunan: {properti.area} m²</p>
                                    <p>Luas Lahan: 66m²</p>
                                    <p>Kamar Tidur: {properti.beds}</p>
                                    <p>Kamar Mandi: {properti.baths}</p>
                                </div>
                            </div>

                            <div>
                                <h4 className="text-sm font-bold text-slate-800 mb-2">Spesifikasi Teknis</h4>
                                <div className="text-sm text-slate-600 grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div><span className="font-semibold block">a. Atap</span>Bajaringan</div>
                                    <div><span className="font-semibold block">b. Dinding</span>Bata Hebel</div>
                                    <div><span className="font-semibold block">c. Lantai & Pondasi</span>Keramik & Batu Belah</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* 4. MODAL SITEPLAN (Referensi: Image 6) */}
            {showSiteplan && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
                    <div className="bg-white w-full max-w-6xl h-[90vh] rounded-xl shadow-2xl flex flex-col md:flex-row overflow-hidden relative">
                        
                        {/* Tombol Close Modal */}
                        <button 
                            onClick={() => setShowSiteplan(false)}
                            className="absolute top-4 right-4 z-10 bg-white border border-slate-300 w-10 h-10 rounded-full flex items-center justify-center text-slate-500 hover:text-red-500 hover:bg-red-50 font-bold text-xl shadow"
                        >
                            &times;
                        </button>

                        {/* Sidebar Legenda Kiri */}
                        <div className="w-full md:w-1/4 bg-slate-50 border-r border-slate-200 p-6 overflow-y-auto">
                            <h2 className="text-xl font-bold text-slate-800 mb-1">{properti.title}</h2>
                            <p className="text-xs text-slate-500 mb-6">{properti.location}</p>

                            <div className="flex gap-2 mb-6 text-center text-xs font-bold text-slate-600">
                                <div className="flex-1 bg-slate-200 p-2 rounded">KOMERSIL</div>
                                <div className="flex-1 bg-yellow-100 p-2 rounded">SUBSIDI</div>
                            </div>

                            {/* Daftar Status & Warna */}
                            <div className="space-y-3 text-xs font-bold text-white text-center">
                                <div className="bg-[#facc15] py-2 rounded text-slate-900 border border-yellow-400">111 Kavling</div>
                                <div className="bg-orange-500 py-2 rounded">0 Pembangunan</div>
                                <div className="bg-green-500 py-2 rounded">0 Ready Stock</div>
                                <div className="bg-blue-500 py-2 rounded">4 Proses Bank</div>
                                <div className="bg-red-600 py-2 rounded">0 Terjual</div>
                            </div>
                        </div>

                        {/* Area Peta Siteplan Kanan */}
                        <div className="w-full md:w-3/4 bg-white p-8 overflow-auto flex items-center justify-center min-h-[500px]">
                            {/* SIMULASI GRID SITEPLAN (Kotak Kuning & Biru) */}
                            <div className="grid grid-cols-6 gap-1 transform md:scale-125">
                                {/* Blok A */}
                                <div className="w-8 h-12 bg-yellow-400 border border-slate-400 cursor-pointer hover:opacity-80" title="Kavling Kosong"></div>
                                <div className="w-8 h-12 bg-yellow-400 border border-slate-400 cursor-pointer hover:opacity-80" title="Kavling Kosong"></div>
                                <div className="w-8 h-12 bg-yellow-400 border border-slate-400 cursor-pointer hover:opacity-80" title="Kavling Kosong"></div>
                                <div className="col-span-1"></div> {/* Jalan */}
                                <div className="w-8 h-12 bg-blue-500 border border-slate-400 cursor-pointer hover:opacity-80" title="Proses Bank"></div>
                                <div className="w-8 h-12 bg-yellow-400 border border-slate-400 cursor-pointer hover:opacity-80" title="Kavling Kosong"></div>
                                
                                {/* Blok B */}
                                <div className="w-8 h-12 bg-yellow-400 border border-slate-400 mt-4 cursor-pointer hover:opacity-80" title="Kavling Kosong"></div>
                                <div className="w-8 h-12 bg-yellow-400 border border-slate-400 mt-4 cursor-pointer hover:opacity-80" title="Kavling Kosong"></div>
                                <div className="w-8 h-12 bg-yellow-400 border border-slate-400 mt-4 cursor-pointer hover:opacity-80" title="Kavling Kosong"></div>
                                <div className="col-span-1 mt-4"></div>
                                <div className="w-8 h-12 bg-yellow-400 border border-slate-400 mt-4 cursor-pointer hover:opacity-80" title="Kavling Kosong"></div>
                                <div className="w-8 h-12 bg-blue-500 border border-slate-400 mt-4 cursor-pointer hover:opacity-80" title="Proses Bank"></div>
                            </div>
                            {/* Keterangan: Nanti Anda bisa mengganti kotak-kotak di atas dengan gambar peta asli atau menggunakan Leaflet.js/Canvas jika ingin interaktif sungguhan */}
                        </div>
                    </div>
                </div>
            )}

        </div>
    );
}