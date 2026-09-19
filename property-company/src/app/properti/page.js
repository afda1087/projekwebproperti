import Link from 'next/link';

export default function Properti() {
    // Dummy data properti dengan tambahan gambar ilustrasi
    const properties = [
        {
            id: 1,
            title: "Apartemen Studio Depok...",
            location: "Margonda, Depok",
            price: "Rp300 juta", dp: "DP 0%",
            beds: 1,
            baths: 1,
            area: 24,
            img: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=500&q=80"
        },
        {
            id: 2,
            title: "Apartemen Kalibata...",
            location: "Kalibata, Jakarta Selatan",
            price: "Rp520 juta", dp: "DP 0%",
            beds: 1,
            baths: 1,
            area: 32,
            img: "https://images.unsplash.com/photo-1502672260266-1c1de24220e8?w=500&q=80"
        },
        {
            id: 3,
            title: "Rumah Minimalis Citra...",
            location: "Cibubur, Jakarta Timur",
            price: "Rp980 juta", dp: "DP 0%",
            beds: 3,
            baths: 2,
            area: 90,
            img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=500&q=80"
        }
    ];

    return (
        <div className="bg-[#fafaf9] min-h-screen pt-8 pb-20">
            <div className="max-w-7xl mx-auto px-6">

                {/* Header Section */}
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-slate-900 mb-2">Properti</h1>
                    <p className="text-slate-500">18 properti ditemukan</p>
                </div>

                <div className="flex flex-col md:flex-row gap-8">

                    {/* SIDEBAR FILTER */}
                    <aside className="w-full md:w-64 flex-shrink-0">
                        <div className="bg-white border border-slate-200 rounded-2xl p-6 sticky top-24 shadow-sm">

                            <div className="flex justify-between items-center mb-6 border-b border-slate-100 pb-4">
                                <h2 className="font-bold text-lg text-slate-800">Filter</h2>
                                <button className="text-sm text-blue-600 font-medium hover:text-blue-800 transition">Reset Filter</button>
                            </div>

                            <div className="space-y-6">
                                {/* 1. Lokasi */}
                                <div>
                                    <label className="block text-sm font-bold text-slate-800 mb-3">Lokasi</label>
                                    <select className="w-full px-4 py-2.5 bg-white border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm text-slate-600">
                                        <option>Semua Lokasi</option>
                                        <option>Jakarta Timur</option>
                                        <option>Jakarta Selatan</option>
                                        <option>Depok</option>
                                    </select>
                                </div>

                                {/* 2. Harga (Radio Button) */}
                                <div>
                                    <label className="block text-sm font-bold text-slate-800 mb-3">Harga</label>
                                    <div className="space-y-3">
                                        {['Semua Harga', '< 500 Juta', '500 Jt - 1 Milyar', '> 1 Milyar'].map((harga, idx) => (
                                            <label key={harga} className="flex items-center gap-3 cursor-pointer">
                                                <input type="radio" name="harga_filter" defaultChecked={idx === 0} className="w-4 h-4 border-slate-300 text-blue-600 focus:ring-blue-500" />
                                                <span className="text-sm text-slate-600">{harga}</span>
                                            </label>
                                        ))}
                                    </div>
                                </div>

                                {/* 3. DP (Radio Button) */}
                                <div>
                                    <label className="block text-sm font-bold text-slate-800 mb-3">DP</label>
                                    <div className="space-y-3">
                                        {['Semua DP', 'DP 0%', 'DP ≤ 5%', 'DP ≤ 10%'].map((dp, idx) => (
                                            <label key={dp} className="flex items-center gap-3 cursor-pointer">
                                                <input type="radio" name="dp_filter" defaultChecked={idx === 0} className="w-4 h-4 border-slate-300 text-blue-600 focus:ring-blue-500" />
                                                <span className="text-sm text-slate-600">{dp}</span>
                                            </label>
                                        ))}
                                    </div>
                                </div>

                            </div>
                        </div>
                    </aside>

                    {/* MAIN CONTENT */}
                    <main className="flex-1">

                        {/* Top Bar Sort */}
                        <div className="flex justify-end items-center mb-6">
                            <div className="flex items-center gap-2 bg-white px-4 py-2 border border-slate-200 rounded-xl shadow-sm">
                                <span className="text-sm text-slate-400">Urutkan:</span>
                                <select className="bg-transparent border-none focus:outline-none text-sm font-semibold text-slate-700 cursor-pointer">
                                    <option>Terbaru</option>
                                    <option>Harga Terendah</option>
                                    <option>Harga Tertinggi</option>
                                    <option>Luas Terbesar</option>
                                </select>
                            </div>
                        </div>

                        {/* Property Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {properties.map((prop) => (
                                <div key={prop.id} className="bg-white border border-slate-200 rounded-2xl overflow-hidden hover:shadow-lg transition group flex flex-col">

                                    {/* Image & Badges */}
                                    <div className="h-48 relative overflow-hidden">
                                        <img src={prop.img} alt={prop.title} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
                                        <div className="absolute top-3 left-3 bg-[#cd9b57] text-white text-xs font-bold px-2.5 py-1 rounded-full shadow-sm">
                                            {prop.dp}
                                        </div>
                                        <button className="absolute top-3 right-3 bg-white p-2 rounded-full shadow-sm text-slate-400 hover:text-red-500 transition">
                                            🤍
                                        </button>
                                    </div>

                                    {/* Content */}
                                    <div className="p-5 flex flex-col flex-1">
                                        <h3 className="text-lg font-bold text-slate-800 mb-1 line-clamp-1">{prop.title}</h3>
                                        <p className="text-xs text-slate-400 mb-3">{prop.location}</p>

                                        <div className="flex items-baseline gap-2 mb-4">
                                            <span className="text-xl font-bold text-slate-900">{prop.price}</span>
                                            <span className="text-[10px] text-slate-400 font-medium uppercase tracking-wider">{prop.dp}</span>
                                        </div>

                                        {/* Stats */}
                                        <div className="flex items-center gap-4 py-3 border-t border-slate-100 text-xs text-slate-500 mt-auto font-medium">
                                            <span className="flex items-center gap-1">📐 {prop.area} m²</span>
                                            <span className="flex items-center gap-1">🛏️ {prop.beds}</span>
                                            <span className="flex items-center gap-1">🛁 {prop.baths}</span>
                                        </div>

                                        <Link href="/detail" className="mt-2 block w-full text-center py-2 text-sm font-bold text-slate-600 hover:text-slate-900 transition">
                                            Lihat Detail
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>

                    </main>
                </div>
            </div>
        </div>
    );
}