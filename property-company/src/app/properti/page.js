"use client";

import Link from 'next/link';
import { useState } from 'react';
import { properties } from '../data';

export default function Properti() {
    // 1. STATE UNTUK BUKA/TUTUP MENU & MENYIMPAN PILIHAN FILTER
    const [isFilterOpen, setIsFilterOpen] = useState(false);

    const [sortBy, setSortBy] = useState('Terbaru');
    const [filterLokasi, setFilterLokasi] = useState('Semua Lokasi');
    const [filterHarga, setFilterHarga] = useState('Semua Harga');
    const [filterDp, setFilterDp] = useState('Semua DP');
    // TAMBAHAN: State untuk filter Jenis Perumahan
    const [filterJenis, setFilterJenis] = useState('Semua Jenis');

    // 3. LOGIKA FILTER & SORTING
    let processedData = [...properties];

    // --- A. Proses Filter Lokasi ---
    if (filterLokasi !== 'Semua Lokasi') {
        processedData = processedData.filter(prop => prop.location.includes(filterLokasi));
    }

    // --- B. Proses Filter Harga ---
    if (filterHarga !== 'Semua Harga') {
        if (filterHarga === '< 500 Juta') {
            processedData = processedData.filter(prop => prop.priceValue < 500);
        } else if (filterHarga === '500 Jt - 1 Milyar') {
            processedData = processedData.filter(prop => prop.priceValue >= 500 && prop.priceValue <= 1000);
        } else if (filterHarga === '> 1 Milyar') {
            processedData = processedData.filter(prop => prop.priceValue > 1000);
        }
    }

    // --- C. Proses Filter DP ---
    if (filterDp !== 'Semua DP') {
        if (filterDp === 'DP 0%') {
            processedData = processedData.filter(prop => prop.dpValue === 0);
        } else if (filterDp === 'DP ≤ 5%') {
            processedData = processedData.filter(prop => prop.dpValue <= 5);
        } else if (filterDp === 'DP ≤ 10%') {
            processedData = processedData.filter(prop => prop.dpValue <= 10);
        }
    }

    // --- D. TAMBAHAN: Proses Filter Jenis Perumahan ---
    if (filterJenis !== 'Semua Jenis') {
        // PERUBAHAN: Gunakan .includes() karena prop.jenis sekarang adalah Array
        processedData = processedData.filter(prop => prop.jenis.includes(filterJenis));
    }

    // --- E. Proses Sorting (Pengurutan) ---
    if (sortBy === 'Harga Terendah') {
        processedData.sort((a, b) => a.priceValue - b.priceValue);
    } else if (sortBy === 'Harga Tertinggi') {
        processedData.sort((a, b) => b.priceValue - a.priceValue);
    } else if (sortBy === 'Luas Terbesar') {
        processedData.sort((a, b) => b.area - a.area);
    }

    // Fungsi untuk mereset semua filter ke awal (Diperbarui dengan reset filter Jenis)
    const handleReset = () => {
        setFilterLokasi('Semua Lokasi');
        setFilterHarga('Semua Harga');
        setFilterDp('Semua DP');
        setFilterJenis('Semua Jenis');
        setSortBy('Terbaru');
    };

    return (
        <div className="bg-[#F8F7F2] min-h-screen pt-32 pb-20">
            <div className="max-w-7xl mx-auto px-6">

                {/* Header Section */}
                <div className="mb-8 animate-fade-in-up delay-100">
                    <h1 className="text-3xl font-bold text-slate-900 mb-2">Properti</h1>
                    <p className="text-slate-500">{processedData.length} properti ditemukan</p>
                </div>

                <div className="flex flex-col gap-6">

                    {/* TOP BAR: Tombol Hamburger Filter & Urutkan */}
                    <div className="flex flex-wrap justify-between items-center gap-4 animate-fade-in-up delay-300">

                        <button
                            onClick={() => setIsFilterOpen(!isFilterOpen)}
                            className="flex items-center gap-2 bg-white px-5 py-2.5 border border-slate-200 rounded-xl shadow-sm text-sm font-bold text-slate-700 hover:bg-slate-50 transition"
                        >
                            <svg className="w-5 h-5 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                {isFilterOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                            {isFilterOpen ? 'Tutup Filter' : 'Filter Properti'}
                        </button>

                        <div className="flex items-center gap-2 bg-white px-4 py-2 border border-slate-200 rounded-xl shadow-sm">
                            <span className="text-sm text-slate-400">Urutkan:</span>
                            <select
                                value={sortBy}
                                onChange={(e) => setSortBy(e.target.value)}
                                className="bg-transparent border-none focus:outline-none text-sm font-semibold text-slate-700 cursor-pointer"
                            >
                                <option>Terbaru</option>
                                <option>Harga Terendah</option>
                                <option>Harga Tertinggi</option>
                                <option>Luas Terbesar</option>
                            </select>
                        </div>
                    </div>

                    {/* AREA FILTER DROPDOWN */}
                    {isFilterOpen && (
                        <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm animate-fade-in-up">
                            <div className="flex justify-between items-center mb-4 pb-4 border-b border-slate-100">
                                <h2 className="font-bold text-lg text-slate-800">Filter Pencarian</h2>
                                <button onClick={handleReset} className="text-sm text-blue-600 font-medium hover:text-blue-800 transition">Reset Semua</button>
                            </div>

                            {/* Diubah menjadi grid-cols-2 atau grid-cols-4 agar muat 4 filter */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                                {/* Lokasi */}
                                <div>
                                    <label className="block text-sm font-bold text-slate-800 mb-3">Lokasi</label>
                                    <select
                                        value={filterLokasi}
                                        onChange={(e) => setFilterLokasi(e.target.value)}
                                        className="w-full px-4 py-2.5 bg-white border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm text-slate-600 cursor-pointer"
                                    >
                                        <option>Semua Lokasi</option>
                                        <option>Jakarta Timur</option>
                                        <option>Jakarta Selatan</option>
                                        <option>Depok</option>
                                    </select>
                                </div>

                                {/* Harga */}
                                <div>
                                    <label className="block text-sm font-bold text-slate-800 mb-3">Harga</label>
                                    <select
                                        value={filterHarga}
                                        onChange={(e) => setFilterHarga(e.target.value)}
                                        className="w-full px-4 py-2.5 bg-white border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm text-slate-600 cursor-pointer"
                                    >
                                        <option>Semua Harga</option>
                                        <option>&lt; 500 Juta</option>
                                        <option>500 Jt - 1 Milyar</option>
                                        <option>&gt; 1 Milyar</option>
                                    </select>
                                </div>

                                {/* DP */}
                                <div>
                                    <label className="block text-sm font-bold text-slate-800 mb-3">DP</label>
                                    <select
                                        value={filterDp}
                                        onChange={(e) => setFilterDp(e.target.value)}
                                        className="w-full px-4 py-2.5 bg-white border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm text-slate-600 cursor-pointer"
                                    >
                                        <option>Semua DP</option>
                                        <option>DP 0%</option>
                                        <option>DP ≤ 5%</option>
                                        <option>DP ≤ 10%</option>
                                    </select>
                                </div>

                                {/* TAMBAHAN: Jenis Perumahan */}
                                <div>
                                    <label className="block text-sm font-bold text-slate-800 mb-3">Jenis</label>
                                    <select
                                        value={filterJenis}
                                        onChange={(e) => setFilterJenis(e.target.value)}
                                        className="w-full px-4 py-2.5 bg-white border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm text-slate-600 cursor-pointer"
                                    >
                                        <option>Semua Jenis</option>
                                        <option>Subsidi</option>
                                        <option>Menengah</option>
                                        <option>Cluster</option>
                                        <option>Mewah</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* MAIN CONTENT (Grid Properti) */}
                    <main className="flex-1 animate-fade-in-up delay-500">

                        {/* Jika hasil filter kosong, tampilkan pesan ini */}
                        {processedData.length === 0 ? (
                            <div className="text-center py-20 bg-white rounded-2xl border border-slate-200">
                                <span className="text-4xl font-bold">UPS!</span>
                                <h3 className="text-lg font-bold text-slate-800 mt-4">Properti Tidak Ditemukan</h3>
                                <p className="text-slate-500 text-sm mt-2">Coba ubah kriteria filtermu atau klik Reset Semua.</p>
                                <button onClick={handleReset} className="mt-4 text-blue-600 font-bold hover:underline">Reset Filter</button>
                            </div>
                        ) : (
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
                                {processedData.map((prop) => (
                                    <div key={prop.id} className="bg-white border border-slate-200 rounded-2xl overflow-hidden hover:shadow-lg transition group flex flex-col">

                                        <div className="h-48 relative overflow-hidden">
                                            <img src={prop.img} alt={prop.title} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
                                            <div className="absolute top-3 left-3 flex gap-2">
                                                <div className="bg-[#cd9b57] text-white text-xs font-bold px-2.5 py-1 rounded-full shadow-sm">
                                                    {prop.dp}
                                                </div>
                                                {/* TAMBAHAN: Badge Jenis Perumahan di atas Card */}
                                                <div className="bg-blue-600 text-white text-xs font-bold px-2.5 py-1 rounded-full shadow-sm">
                                                    {prop.jenis}
                                                </div>
                                            </div>
                                            <button className="absolute top-3 right-3 bg-white p-2 rounded-full shadow-sm text-slate-400 hover:text-red-500 transition">
                                                🤍
                                            </button>
                                        </div>

                                        <div className="p-5 flex flex-col flex-1">
                                            <h3 className="text-lg font-bold text-slate-800 mb-1 line-clamp-1">{prop.title}</h3>
                                            <p className="text-xs text-slate-400 mb-3">{prop.location}</p>

                                            <div className="flex items-baseline gap-2 mb-4">
                                                <span className="text-xl font-bold text-slate-900">{prop.price}</span>
                                                <span className="text-[10px] text-slate-400 font-medium uppercase tracking-wider">{prop.dp}</span>
                                            </div>

                                            <div className="flex items-center gap-4 py-3 border-t border-slate-100 text-xs text-slate-500 mt-auto font-medium">
                                                <span className="flex items-center gap-1">📐 {prop.area} m²</span>
                                                <span className="flex items-center gap-1">🛏️ {prop.beds}</span>
                                                <span className="flex items-center gap-1">🛁 {prop.baths}</span>
                                            </div>

                                            <Link href={`/detail/${prop.id}`} className="mt-2 block w-full text-center py-2 text-sm font-bold text-slate-600 hover:text-slate-900 transition">
                                                Lihat Detail
                                            </Link>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </main>

                </div>
            </div>
        </div>
    );
}