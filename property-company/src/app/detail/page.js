import Link from 'next/link';

export default function DetailProperti() {
    return (
        <div className="max-w-7xl mx-auto px-6 py-8">

            {/* Breadcrumb / Tombol Kembali */}
            <div className="mb-6">
                <Link href="/cari-properti" className="text-blue-600 hover:underline font-medium text-sm flex items-center gap-2">
                    &larr; Kembali ke Pencarian
                </Link>
            </div>

            {/* 1. GALLERY SECTION */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
                {/* Foto Utama */}
                <div className="md:col-span-2 h-[400px] bg-slate-200 rounded-2xl flex items-center justify-center text-slate-400 font-bold text-xl hover:bg-slate-300 transition cursor-pointer">
                    📷 Foto Utama Properti
                </div>
                {/* Foto Samping */}
                <div className="flex flex-col gap-4">
                    <div className="h-[192px] bg-slate-200 rounded-2xl flex items-center justify-center text-slate-400 font-medium hover:bg-slate-300 transition cursor-pointer">
                        Foto Ruang Tamu
                    </div>
                    <div className="h-[192px] bg-slate-200 rounded-2xl flex items-center justify-center text-slate-400 font-medium relative cursor-pointer hover:opacity-90 transition overflow-hidden">
                        <div className="absolute inset-0 bg-slate-800/60 flex items-center justify-center">
                            <span className="text-white font-bold text-lg">+5 Foto Lainnya</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* 2. MAIN CONTENT & SIDEBAR */}
            <div className="flex flex-col md:flex-row gap-10">

                {/* Kolom Kiri: Detail Properti */}
                <div className="w-full md:w-2/3">

                    <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6 gap-4">
                        <div>
                            <span className="inline-block bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-md mb-3">Dijual</span>
                            <h1 className="text-3xl font-bold text-slate-900 mb-2">Rumah Minimalis Modern</h1>
                            <p className="text-slate-500 text-lg">📍 Pekalongan Barat, Jawa Tengah</p>
                        </div>
                        <h2 className="text-3xl font-bold text-blue-600 md:text-right">Rp650.000.000</h2>
                    </div>

                    {/* Statistik Singkat */}
                    <div className="flex flex-wrap gap-4 bg-slate-50 border border-slate-200 rounded-xl p-6 mb-8">
                        <div className="flex-1 min-w-[120px] flex items-center gap-3">
                            <span className="text-3xl bg-white p-2 rounded-lg shadow-sm"></span>
                            <div><p className="text-xs text-slate-500 font-semibold uppercase">Kamar Tidur</p><p className="font-bold text-slate-900 text-lg">3</p></div>
                        </div>
                        <div className="flex-1 min-w-[120px] flex items-center gap-3">
                            <span className="text-3xl bg-white p-2 rounded-lg shadow-sm"></span>
                            <div><p className="text-xs text-slate-500 font-semibold uppercase">Kamar Mandi</p><p className="font-bold text-slate-900 text-lg">2</p></div>
                        </div>
                        <div className="flex-1 min-w-[120px] flex items-center gap-3">
                            <span className="text-3xl bg-white p-2 rounded-lg shadow-sm"></span>
                            <div><p className="text-xs text-slate-500 font-semibold uppercase">Luas Tanah</p><p className="font-bold text-slate-900 text-lg">120 m²</p></div>
                        </div>
                        <div className="flex-1 min-w-[120px] flex items-center gap-3">
                            <span className="text-3xl bg-white p-2 rounded-lg shadow-sm"></span>
                            <div><p className="text-xs text-slate-500 font-semibold uppercase">Luas Bangunan</p><p className="font-bold text-slate-900 text-lg">90 m²</p></div>
                        </div>
                    </div>

                    {/* Deskripsi */}
                    <h3 className="text-xl font-bold text-slate-900 mb-4">Deskripsi Properti</h3>
                    <div className="text-slate-600 leading-relaxed mb-8 space-y-4">
                        <p>Rumah minimalis modern dengan akses mudah, lingkungan nyaman, dan dekat dengan berbagai fasilitas umum. Sangat cocok untuk keluarga muda. Kondisi bangunan baru dan terawat, siap huni tanpa perlu renovasi.</p>
                        <p>Terletak di kawasan bebas banjir dengan keamanan 24 jam. Sirkulasi udara sangat baik dengan jendela-jendela besar yang menghadap langsung ke taman belakang.</p>
                    </div>

                    {/* Fasilitas */}
                    <h3 className="text-xl font-bold text-slate-900 mb-4">Fasilitas & Fitur</h3>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-slate-700 mb-8 bg-white border border-slate-100 p-6 rounded-xl shadow-sm">
                        <li className="flex items-center gap-3"><span className="text-green-500">✅</span> Carport 2 Mobil</li>
                        <li className="flex items-center gap-3"><span className="text-green-500">✅</span> Taman depan & belakang</li>
                        <li className="flex items-center gap-3"><span className="text-green-500">✅</span> Ruang keluarga luas</li>
                        <li className="flex items-center gap-3"><span className="text-green-500">✅</span> Kitchen set modern</li>
                        <li className="flex items-center gap-3"><span className="text-green-500">✅</span> Listrik PLN 2200W</li>
                        <li className="flex items-center gap-3"><span className="text-green-500">✅</span> Keamanan 24 Jam (One Gate System)</li>
                    </ul>
                </div>

                {/* Kolom Kanan: Agent Sidebar */}
                <div className="w-full md:w-1/3">
                    <div className="bg-white border border-slate-200 rounded-2xl p-6 sticky top-24 shadow-lg shadow-slate-100">

                        {/* Profil Agen */}
                        <div className="text-center mb-6">
                            <div className="w-24 h-24 bg-slate-100 rounded-full mx-auto mb-4 flex items-center justify-center text-4xl shadow-inner">👨‍💼</div>
                            <h4 className="font-bold text-xl text-slate-900">Budi Santoso</h4>
                            <p className="text-sm text-slate-500 mb-2">Agen Properti Terverifikasi</p>
                            <div className="flex items-center justify-center gap-1 text-yellow-400 text-sm">
                                ⭐⭐⭐⭐⭐ <span className="text-slate-400 ml-1">(45 Ulasan)</span>
                            </div>
                        </div>

                        {/* Tombol Aksi */}
                        <div className="flex flex-col gap-3">
                            <Link href="/chat" className="w-full bg-blue-600 text-white font-bold py-3.5 rounded-xl hover:bg-blue-700 transition flex items-center justify-center gap-2 shadow-md shadow-blue-200">
                                Chat Agen Sekarang
                            </Link>
                            <button className="w-full bg-white border-2 border-blue-600 text-blue-600 font-bold py-3 rounded-xl hover:bg-blue-50 transition flex items-center justify-center gap-2">
                                Jadwalkan Survey
                            </button>
                            <button className="w-full mt-3 bg-slate-50 text-slate-600 font-medium py-3 rounded-xl hover:bg-slate-100 transition flex items-center justify-center gap-2">
                                Simpan ke Wishlist
                            </button>
                        </div>

                        <hr className="my-8 border-slate-100" />

                        {/* Peta Mini */}
                        <h4 className="font-bold text-slate-900 mb-3">Lokasi pada Peta</h4>
                        <div className="h-48 bg-slate-200 rounded-xl flex items-center justify-center text-slate-500 text-sm overflow-hidden hover:opacity-90 transition cursor-pointer">
                            🗺️ Peta Interaktif
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}