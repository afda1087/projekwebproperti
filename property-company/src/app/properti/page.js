"use client";

import Link from "next/link";
import { useState } from "react";
import { properties } from '../data';
import { useWishlist } from "@/app/context/wishlistcontext";

export default function PropertiPage() {
  // 1. STATE FILTER & SORTING
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [sortBy, setSortBy] = useState("Terbaru");
  const [filterLokasi, setFilterLokasi] = useState("Semua Lokasi");
  const [filterHarga, setFilterHarga] = useState("Semua Harga");
  const [filterDp, setFilterDp] = useState("Semua DP");
  const [filterJenis, setFilterJenis] = useState("Semua Jenis");

  // Integration Context Wishlist
  const { wishlist = [], toggleWishlist = () => {} } = useWishlist() || {};

  // 2. LOGIKA FILTER & SORTING
  let processedData = [...properties];

  if (filterLokasi !== "Semua Lokasi") {
    processedData = processedData.filter((prop) =>
      prop.location?.toLowerCase().includes(filterLokasi.toLowerCase())
    );
  }
  if (filterHarga !== "Semua Harga") {
    if (filterHarga === "< 500 Juta") processedData = processedData.filter((prop) => prop.priceValue < 500);
    else if (filterHarga === "500 Jt - 1 Milyar") processedData = processedData.filter((prop) => prop.priceValue >= 500 && prop.priceValue <= 1000);
    else if (filterHarga === "> 1 Milyar") processedData = processedData.filter((prop) => prop.priceValue > 1000);
  }
  if (filterDp !== "Semua DP") {
    if (filterDp === "DP 0%") processedData = processedData.filter((prop) => prop.dpValue === 0);
    else if (filterDp === "DP kurang dari 5%") processedData = processedData.filter((prop) => prop.dpValue <= 5);
    else if (filterDp === "DP lebih dari 5%") processedData = processedData.filter((prop) => prop.dpValue > 5);
  }
  if (filterJenis !== "Semua Jenis") {
    processedData = processedData.filter((prop) => {
      if (Array.isArray(prop.jenis)) return prop.jenis.includes(filterJenis);
      return prop.jenis === filterJenis;
    });
  }

  if (sortBy === "Harga Terendah") processedData.sort((a, b) => a.priceValue - b.priceValue);
  else if (sortBy === "Harga Tertinggi") processedData.sort((a, b) => b.priceValue - a.priceValue);
  else if (sortBy === "Luas Terbesar") processedData.sort((a, b) => b.area - a.area);

  // 3. MENGELOMPOKKAN BERDASARKAN NAMA PERUMAHAN
  const groupedByEstate = processedData.reduce((acc, prop) => {
    const estateName = prop.title;
    if (!acc[estateName]) {
      acc[estateName] = [];
    }
    acc[estateName].push(prop);
    return acc;
  }, {});

  // Ubah object hasil reduce menjadi array agar mudah di-map
  const estates = Object.values(groupedByEstate);

  const handleReset = () => {
    setFilterLokasi("Semua Lokasi");
    setFilterHarga("Semua Harga");
    setFilterDp("Semua DP");
    setFilterJenis("Semua Jenis");
    setSortBy("Terbaru");
  };

  return (
    <div className="bg-[#F8F7F2] min-h-screen pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="mb-8 animate-fade-in-up delay-100">
          <h1 className="text-3xl font-bold text-slate-900 mb-2">Daftar Lokasi Perumahan</h1>
          <p className="text-slate-500">
            Menampilkan {estates.length} lokasi perumahan dari pencarian Anda.
          </p>
        </div>

        <div className="flex flex-col gap-6">
          {/* Top Bar Filter & Sort */}
          <div className="flex flex-wrap justify-between items-center gap-4 animate-fade-in-up delay-300">
            <button onClick={() => setIsFilterOpen(!isFilterOpen)} className="flex items-center gap-2 bg-white px-5 py-2.5 border border-slate-200 rounded-xl shadow-sm text-sm font-bold text-slate-700 hover:bg-slate-50 transition">
              <svg className="w-5 h-5 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isFilterOpen ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
              </svg>
              {isFilterOpen ? "Tutup Filter" : "Filter Properti"}
            </button>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 bg-white px-4 py-2 border border-slate-200 rounded-xl shadow-sm">
                <span className="text-sm text-slate-400">Urutkan:</span>
                <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} className="bg-transparent border-none focus:outline-none text-sm font-semibold text-slate-700 cursor-pointer">
                  <option>Terbaru</option>
                  <option>Harga Terendah</option>
                  <option>Harga Tertinggi</option>
                </select>
              </div>
            </div>
          </div>

          {/* AREA FILTER */}
          {isFilterOpen && (
             <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm animate-fade-in-up">
               <div className="flex justify-between items-center mb-4 pb-4 border-b border-slate-100">
                 <h2 className="font-bold text-lg text-slate-800">Filter Pencarian</h2>
                 <button onClick={handleReset} className="text-sm text-blue-600 font-medium hover:text-blue-800 transition">Reset Semua</button>
               </div>
               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                 <div>
                   <label className="block text-sm font-bold text-slate-800 mb-3">Lokasi</label>
                   <select value={filterLokasi} onChange={(e) => setFilterLokasi(e.target.value)} className="w-full px-4 py-2.5 bg-white border border-slate-200 rounded-lg focus:outline-none text-sm text-slate-600">
                     <option>Semua Lokasi</option>
                     <option>Batang</option>
                     <option>Lebo</option>
                     <option>Candiareng</option>
                     <option>Kandeman</option>
                   </select>
                 </div>
                 {/* Tambahkan filter lainnya sesuai kebutuhan seperti kode Anda sebelumnya */}
               </div>
             </div>
          )}

          {/* GRID PERUMAHAN SIKUMBANG STYLE */}
          <main className="flex-1 animate-fade-in-up delay-500">
            {estates.length === 0 ? (
              <div className="text-center py-20 bg-white rounded-2xl border border-slate-200">
                <span className="text-4xl font-bold">UPS!</span>
                <h3 className="text-lg font-bold text-slate-800 mt-4">Perumahan Tidak Ditemukan</h3>
                <button onClick={handleReset} className="mt-4 text-blue-600 font-bold hover:underline">Reset Filter</button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
                {estates.map((estateGroup, index) => {
                  // Mengambil perwakilan data dari rumah pertama di kelompok tersebut
                  const estate = estateGroup[0];
                  
                  // Menghitung jumlah tipe subsidi vs komersil di dalam perumahan ini
                  const subsidiCount = estateGroup.filter(p => p.jenis === "Subsidi").length;
                  const komersilCount = estateGroup.filter(p => p.jenis !== "Subsidi").length;

                  return (
                    <div key={index} className="bg-[#fefce8] border border-slate-200 rounded-lg overflow-hidden shadow-sm flex flex-col">
                      
                      {/* Bagian Gambar dengan Badge Khas Sikumbang */}
                      <div className="h-52 relative overflow-hidden bg-slate-200">
                        <img 
                          src={`/${estate.img}`} 
                          alt={estate.title} 
                          className="w-full h-full object-cover" 
                        />
                        {/* Lencana Kiri Atas */}
                        <div className="absolute top-0 left-0 bg-green-500 text-white text-[10px] font-bold px-2 py-1">
                          Lokasi Aktif
                        </div>
                        {/* Lencana Kanan Atas */}
                        <div className="absolute top-0 right-0 bg-blue-600 text-white text-[10px] font-bold px-2 py-1">
                          Rumah Tapak
                        </div>
                        {/* Waktu di Kanan Bawah Gambar */}
                        <div className="absolute bottom-1 right-2 text-white text-[10px] font-medium drop-shadow-md">
                          24/09/26 15.16
                        </div>
                      </div>

                      {/* Bagian Konten Teks */}
                      <div className="p-4 flex flex-col flex-1">
                        <h3 className="text-md font-bold text-slate-900 leading-tight mb-1">
                          {estate.title}
                        </h3>
                        <p className="text-[11px] text-slate-600 mb-2 uppercase">
                          PT DEVELOPER {estate.title}
                        </p>
                        <p className="text-[10px] text-slate-500 mb-3 uppercase leading-relaxed line-clamp-2">
                          {estate.location}
                        </p>

                        {/* Indikator Jumlah Unit */}
                        <div className="flex gap-1 mb-4 text-[10px] font-bold text-white">
                          <div className="bg-[#d4a017] px-2 py-1 rounded-sm">
                            {subsidiCount} Unit subsidi
                          </div>
                          <div className="bg-[#1e293b] px-2 py-1 rounded-sm">
                            {komersilCount} Unit komersil
                          </div>
                          <div className="bg-teal-500 px-2 py-1 rounded-sm">
                            ID: SPA{estate.id}2026T
                          </div>
                        </div>

                        {/* Tombol Detail (Mengarah ke ID pertama dari grup perumahan tersebut) */}
                        <Link
                          href={`/detail/${estate.id}`}
                          className="mt-auto block w-full text-center bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold py-2.5 rounded transition"
                        >
                          Lihat detail lokasi
                        </Link>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}