import Link from 'next/link';
import { properties } from '../../data'; // Memanggil database buatan kita

// 1. Tambahkan kata 'async' di sini
export default async function DetailProperti({ params }) {
    // 2. Tambahkan 'await' untuk membaca URL (Aturan baru Next.js 15)
    const resolvedParams = await params;
    const id = resolvedParams.id;

    // Mencari data properti yang ID-nya sama dengan ID di URL
    const properti = properties.find((p) => String(p.id) === String(id));

    // Jika properti tidak ditemukan
    if (!properti) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-[#fafaf9]">
                <h1 className="text-3xl font-bold text-slate-800 mb-2">Properti Tidak Ditemukan</h1>
                {/* Tambahan untuk melihat error ID jika masih gagal */}
                <p className="mb-6 text-slate-500">ID yang dicari: {id || 'Kosong'}</p>
                <Link href="/properti" className="px-6 py-3 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition">
                    Kembali ke Daftar Properti
                </Link>
            </div>
        );
    }
    
    return (
        <div className="bg-[#fafaf9] min-h-screen pt-32 pb-20">
            <div className="max-w-7xl mx-auto px-6">

                {/* Breadcrumb / Tombol Kembali */}
                <div className="mb-6 animate-fade-in-up delay-100">
                    <Link href="/properti" className="text-blue-600 hover:underline font-bold text-sm flex items-center gap-2 w-max">
                        &larr; Kembali ke Pencarian
                    </Link>
                </div>

                {/* 1. GALLERY SECTION */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10 animate-fade-in-up delay-300">
                    {/* Foto Utama (Mengambil dari data) */}
                    <div className="md:col-span-2 h-[400px] bg-slate-200 rounded-2xl overflow-hidden shadow-sm group">
                        <img src={properti.img} alt={properti.title} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
                    </div>
                    {/* Foto Samping (Sementara pakai foto yang sama sebagai ilustrasi) */}
                    <div className="flex flex-col gap-4">
                        <div className="h-[192px] bg-slate-200 rounded-2xl overflow-hidden shadow-sm">
                            <img src={properti.img} alt="Ruangan" className="w-full h-full object-cover" />
                        </div>
                        <div className="h-[192px] bg-slate-200 rounded-2xl relative cursor-pointer hover:opacity-90 transition overflow-hidden shadow-sm">
                            <img src={properti.img} alt="Ruangan" className="w-full h-full object-cover" />
                            <div className="absolute inset-0 bg-slate-900/60 flex items-center justify-center backdrop-blur-sm">
                                <span className="text-white font-bold text-lg">+5 Foto Lainnya</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 2. MAIN CONTENT & SIDEBAR */}
                <div className="flex flex-col md:flex-row gap-10 animate-fade-in-up delay-500">

                    {/* Kolom Kiri: Detail Properti */}
                    <div className="w-full md:w-2/3">

                        <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6 gap-4">
                            <div>
                                <span className="inline-block bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-md mb-3">Dijual</span>
                                {/* Nama & Lokasi Dinamis */}
                                <h1 className="text-3xl font-bold text-slate-900 mb-2">{properti.title}</h1>
                                <p className="text-slate-500 text-lg">📍 {properti.location}</p>
                            </div>
                            {/* Harga Dinamis */}
                            <h2 className="text-3xl font-bold text-blue-600 md:text-right">{properti.price}</h2>
                        </div>

                        {/* Statistik Singkat (Dinamis) */}
                        <div className="flex flex-wrap gap-4 bg-white border border-slate-200 rounded-xl p-6 mb-8 shadow-sm">
                            <div className="flex-1 min-w-[120px] flex items-center gap-3">
                                <span className="text-2xl bg-blue-50 text-blue-600 p-3 rounded-lg shadow-sm">🛏️</span>
                                <div><p className="text-xs text-slate-500 font-bold uppercase">Kamar Tidur</p><p className="font-bold text-slate-900 text-lg">{properti.beds}</p></div>
                            </div>
                            <div className="flex-1 min-w-[120px] flex items-center gap-3">
                                <span className="text-2xl bg-blue-50 text-blue-600 p-3 rounded-lg shadow-sm">🛁</span>
                                <div><p className="text-xs text-slate-500 font-bold uppercase">Kamar Mandi</p><p className="font-bold text-slate-900 text-lg">{properti.baths}</p></div>
                            </div>
                            <div className="flex-1 min-w-[120px] flex items-center gap-3">
                                <span className="text-2xl bg-blue-50 text-blue-600 p-3 rounded-lg shadow-sm">📐</span>
                                <div><p className="text-xs text-slate-500 font-bold uppercase">Luas Bangunan</p><p className="font-bold text-slate-900 text-lg">{properti.area} m²</p></div>
                            </div>
                            <div className="flex-1 min-w-[120px] flex items-center gap-3">
                                <span className="text-2xl bg-yellow-50 text-yellow-600 p-3 rounded-lg shadow-sm">🏷️</span>
                                <div><p className="text-xs text-slate-500 font-bold uppercase">Uang Muka</p><p className="font-bold text-slate-900 text-lg">{properti.dp}</p></div>
                            </div>
                        </div>

                        {/* Deskripsi (Dinamis) */}
                        <h3 className="text-xl font-bold text-slate-900 mb-4">Deskripsi Properti</h3>
                        <div className="text-slate-600 leading-relaxed mb-8 space-y-4 bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                            <p>{properti.description}</p>
                        </div>

                        {/* Fasilitas (Statis untuk contoh) */}
                        <h3 className="text-xl font-bold text-slate-900 mb-4">Fasilitas & Fitur</h3>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-slate-700 mb-8 bg-white border border-slate-200 p-6 rounded-xl shadow-sm">
                            <li className="flex items-center gap-3"><span className="text-green-500 text-lg">✅</span> Carport 2 Mobil</li>
                            <li className="flex items-center gap-3"><span className="text-green-500 text-lg">✅</span> Taman Hijau</li>
                            <li className="flex items-center gap-3"><span className="text-green-500 text-lg">✅</span> Ruang Keluarga Luas</li>
                            <li className="flex items-center gap-3"><span className="text-green-500 text-lg">✅</span> Keamanan 24 Jam</li>
                        </ul>
                    </div>

                    {/* Kolom Kanan: Agent Sidebar */}
                    <div className="w-full md:w-1/3">
                        <div className="bg-white border border-slate-200 rounded-2xl p-6 sticky top-28 shadow-lg shadow-slate-100">

                            {/* Profil Agen */}
                            <div className="text-center mb-6">
                                <div className="w-24 h-24 bg-blue-50 rounded-full mx-auto mb-4 flex items-center justify-center text-4xl shadow-inner">👨‍💼</div>
                                <h4 className="font-bold text-xl text-slate-900">Budi Santoso</h4>
                                <p className="text-sm text-slate-500 mb-2">Agen Properti MZ Properti</p>
                                <div className="flex items-center justify-center gap-1 text-yellow-400 text-sm">
                                    ⭐⭐⭐⭐⭐ <span className="text-slate-400 ml-1 font-medium">(45 Ulasan)</span>
                                </div>
                            </div>

                            {/* Tombol Aksi */}
                            <div className="flex flex-col gap-3">
                                <button className="w-full bg-[#102A43] text-white font-bold py-3.5 rounded-xl hover:bg-slate-800 transition flex items-center justify-center gap-2 shadow-md">
                                    💬 Chat Agen Sekarang
                                </button>
                                <button className="w-full bg-white border-2 border-[#102A43] text-[#102A43] font-bold py-3 rounded-xl hover:bg-slate-50 transition flex items-center justify-center gap-2">
                                    📅 Jadwalkan Survey
                                </button>
                                <button className="w-full mt-2 bg-slate-50 text-slate-600 font-bold py-3 rounded-xl hover:bg-slate-100 transition flex items-center justify-center gap-2">
                                    🤍 Simpan ke Wishlist
                                </button>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}