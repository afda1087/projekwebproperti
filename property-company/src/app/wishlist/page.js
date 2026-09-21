"use client";

import Link from "next/link";
import { useWishlist } from "@/app/context/wishlistcontext"; // Sesuaikan lokasi file context kamu

export default function WishlistPage() {
  // Ambil state wishlist dan fungsi toggleWishlist dari Context
  const { wishlist = [], toggleWishlist = () => {} } = useWishlist() || {};

  return (
    <div className="bg-[#F8F7F2] min-h-screen pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <div className="mb-8 flex justify-between items-end">
          <div>
            <h1 className="text-3xl font-bold text-slate-900 mb-2">
              Wishlist Saya
            </h1>
            <p className="text-slate-500">
              {wishlist.length} properti tersimpan
            </p>
          </div>

          <Link
            href="/properti"
            className="text-sm font-bold text-blue-600 hover:underline"
          >
            ← Kembali ke Katalog Properti
          </Link>
        </div>

        {/* Tampilan Jika Wishlist Kosong vs Ada Isi */}
        {wishlist.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-2xl border border-slate-200 shadow-sm">
            <div className="text-5xl mb-4">❤️</div>
            <h2 className="text-xl font-bold text-slate-800 mb-2">
              Wishlist Anda Masih Kosong
            </h2>
            <p className="text-slate-500 text-sm mb-6">
              Jelajahi properti impian Anda dan tekan tombol hati untuk menyimpannya di sini.
            </p>
            <Link
              href="/properti"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-xl font-bold text-sm hover:bg-blue-700 transition"
            >
              Cari Properti Sekarang
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {wishlist.map((prop) => (
              <div
                key={prop.id}
                className="bg-white border border-slate-200 rounded-2xl overflow-hidden hover:shadow-lg transition group flex flex-col"
              >
                {/* Gambar & Badge */}
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

                  {/* Tombol Hapus dari Wishlist */}
                  <button
                    onClick={() => toggleWishlist(prop)}
                    className="absolute top-3 right-3 bg-white p-2 rounded-full shadow-sm text-red-500 hover:bg-red-50 transition"
                    title="Hapus dari wishlist"
                  >
                    ❤️
                  </button>
                </div>

                {/* Informasi Properti */}
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
            ))}
          </div>
        )}
      </div>
    </div>
  );
}