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

  // A. Filter Lokasi
  if (filterLokasi !== "Semua Lokasi") {
    processedData = processedData.filter((prop) =>
      prop.location?.toLowerCase().includes(filterLokasi.toLowerCase())
    );
  }

  // B. Filter Harga
  if (filterHarga !== "Semua Harga") {
    if (filterHarga === "< 500 Juta") {
      processedData = processedData.filter((prop) => prop.priceValue < 500);
    } else if (filterHarga === "500 Jt - 1 Milyar") {
      processedData = processedData.filter(
        (prop) => prop.priceValue >= 500 && prop.priceValue <= 1000
      );
    } else if (filterHarga === "> 1 Milyar") {
      processedData = processedData.filter((prop) => prop.priceValue > 1000);
    }
  }

  // C. Filter DP
  if (filterDp !== "Semua DP") {
    if (filterDp === "DP 0%") {
      processedData = processedData.filter((prop) => prop.dpValue === 0);
    } else if (filterDp === "DP kurang dari 5%") {
      processedData = processedData.filter((prop) => prop.dpValue <= 5);
    } else if (filterDp === "DP lebih dari 10%") {
      processedData = processedData.filter((prop) => prop.dpValue >= 10);
    }
  }

  // D. Filter Jenis (Aman untuk Array maupun String)
  if (filterJenis !== "Semua Jenis") {
    processedData = processedData.filter((prop) => {
      if (Array.isArray(prop.jenis)) {
        return prop.jenis.includes(filterJenis);
      }
      return prop.jenis === filterJenis;
    });
  }

  // E. Sorting
  if (sortBy === "Harga Terendah") {
    processedData.sort((a, b) => a.priceValue - b.priceValue);
  } else if (sortBy === "Harga Tertinggi") {
    processedData.sort((a, b) => b.priceValue - a.priceValue);
  } else if (sortBy === "Luas Terbesar") {
    processedData.sort((a, b) => b.area - a.area);
  }

  // Reset Filter
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
        {/* Header Section */}
        <div className="mb-8 animate-fade-in-up delay-100">
          <h1 className="text-3xl font-bold text-slate-900 mb-2">Properti</h1>
          <p className="text-slate-500">
            {processedData.length} properti ditemukan
          </p>
        </div>

        <div className="flex flex-col gap-6">
          {/* TOP BAR: Filter Toggle & (Wishlist + Sorting) */}
          <div className="flex flex-wrap justify-between items-center gap-4 animate-fade-in-up delay-300">
            {/* Tombol Filter di Kiri */}
            <button
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="flex items-center gap-2 bg-white px-5 py-2.5 border border-slate-200 rounded-xl shadow-sm text-sm font-bold text-slate-700 hover:bg-slate-50 transition"
            >
              <svg
                className="w-5 h-5 text-slate-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isFilterOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
              {isFilterOpen ? "Tutup Filter" : "Filter Properti"}
            </button>

            {/* Container Kanan: Tombol Wishlist & Dropdown Urutkan */}
            <div className="flex items-center gap-3">
              {/* Tombol Wishlist Baru */}
              <Link
                href="/wishlist"
                className="flex items-center gap-2 bg-white px-4 py-2 border border-slate-200 rounded-xl shadow-sm text-sm font-bold text-slate-700 hover:bg-slate-50 transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-red-500 fill-current"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Wishlist</span>

                {wishlist.length > 0 && (
                  <span className="bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center shadow-sm">
                    {wishlist.length}
                  </span>
                )}
              </Link>

              {/* Dropdown Urutkan */}
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
          </div>

          {/* AREA FILTER DROPDOWN */}
          {isFilterOpen && (
            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm animate-fade-in-up">
              <div className="flex justify-between items-center mb-4 pb-4 border-b border-slate-100">
                <h2 className="font-bold text-lg text-slate-800">
                  Filter Pencarian
                </h2>
                <button
                  onClick={handleReset}
                  className="text-sm text-blue-600 font-medium hover:text-blue-800 transition"
                >
                  Reset Semua
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* Lokasi */}
                <div>
                  <label className="block text-sm font-bold text-slate-800 mb-3">
                    Lokasi
                  </label>
                  <select
                    value={filterLokasi}
                    onChange={(e) => setFilterLokasi(e.target.value)}
                    className="w-full px-4 py-2.5 bg-white border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm text-slate-600 cursor-pointer"
                  >
                    <option>Semua Lokasi</option>
                    <option>Lebo</option>
                    <option>Candiareng</option>
                    <option>Kandeman</option>
                  </select>
                </div>

                {/* Harga */}
                <div>
                  <label className="block text-sm font-bold text-slate-800 mb-3">
                    Harga
                  </label>
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
                  <label className="block text-sm font-bold text-slate-800 mb-3">
                    DP
                  </label>
                  <select
                    value={filterDp}
                    onChange={(e) => setFilterDp(e.target.value)}
                    className="w-full px-4 py-2.5 bg-white border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm text-slate-600 cursor-pointer"
                  >
                    <option>Semua DP</option>
                    <option>DP 0%</option>
                    <option>DP kurang dari 5%</option>
                    <option>DP lebih dari 10%</option>
                  </select>
                </div>

                {/* Jenis Perumahan */}
                <div>
                  <label className="block text-sm font-bold text-slate-800 mb-3">
                    Jenis
                  </label>
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
            {processedData.length === 0 ? (
              <div className="text-center py-20 bg-white rounded-2xl border border-slate-200">
                <span className="text-4xl font-bold">UPS!</span>
                <h3 className="text-lg font-bold text-slate-800 mt-4">
                  Properti Tidak Ditemukan
                </h3>
                <p className="text-slate-500 text-sm mt-2">
                  Coba ubah kriteria filtermu atau klik Reset Semua.
                </p>
                <button
                  onClick={handleReset}
                  className="mt-4 text-blue-600 font-bold hover:underline"
                >
                  Reset Filter
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
                {processedData.map((prop) => {
                  const isWishlisted = wishlist.some(
                    (item) => String(item.id) === String(prop.id)
                  );

                  return (
                    <div
                      key={prop.id}
                      className="bg-white border border-slate-200 rounded-2xl overflow-hidden hover:shadow-lg transition group flex flex-col"
                    >
                      <div className="h-48 relative overflow-hidden">
                        <img
                          src={prop.img}
                          alt={prop.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                        />
                        <div className="absolute top-3 left-3 flex gap-2">
                          {prop.dp && (
                            <div className="bg-[#cd9b57] text-white text-xs font-bold px-2.5 py-1 rounded-full shadow-sm">
                              {prop.dp}
                            </div>
                          )}

                          {prop.jenis && (
                            <div className="bg-blue-600 text-white text-xs font-bold px-2.5 py-1 rounded-full shadow-sm">
                              {Array.isArray(prop.jenis)
                                ? prop.jenis.join(", ")
                                : prop.jenis}
                            </div>
                          )}
                        </div>

                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            toggleWishlist(prop);
                          }}
                          className="absolute top-3 right-3 bg-white p-2 rounded-full shadow-sm text-slate-400 hover:text-red-500 transition"
                          aria-label="Wishlist"
                        >
                          {isWishlisted ? "❤️" : "🤍"}
                        </button>
                      </div>

                      <div className="p-5 flex flex-col flex-1">
                        <h3 className="text-lg font-bold text-slate-800 mb-1 line-clamp-1">
                          {prop.title}
                        </h3>
                        <p className="text-xs text-slate-400 mb-3">
                          {prop.location}
                        </p>

                        <div className="flex items-baseline gap-2 mb-4">
                          <span className="text-xl font-bold text-slate-900">
                            {prop.price}
                          </span>
                          <span className="text-[10px] text-slate-400 font-medium uppercase tracking-wider">
                            {prop.dp}
                          </span>
                        </div>

                        <div className="flex items-center gap-4 py-3 border-t border-slate-100 text-xs text-slate-500 mt-auto font-medium">
                          <span className="flex items-center gap-1">
                            📐 {prop.area} m²
                          </span>
                          <span className="flex items-center gap-1">
                            🛏️ {prop.beds}
                          </span>
                          <span className="flex items-center gap-1">
                            🛁 {prop.baths}
                          </span>
                        </div>

                        <Link
                          href={`/detail/${prop.id}`}
                          className="mt-2 block w-full text-center py-2 text-sm font-bold text-slate-600 hover:text-slate-900 transition"
                        >
                          Lihat Detail
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