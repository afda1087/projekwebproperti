import Link from 'next/link';

export default function Home() {
  return (
    <main className="relative min-h-screen flex items-center bg-gradient-to-br bg-gradient-to-br from-[#102A43] via-[#1F4465] to-white overflow-hidden">

      {/* 1. HERO SECTION */}
      <main className="relative min-h-screen pt-28 overflow-hidden flex flex-col justify-end pb-12">

        {/* Ornamen Titik-titik Kiri (Dengan Animasi Fade-In) */}
        <div
          className="absolute top-0 left-0 w-full md:w-1/2 h-full pointer-events-none animate-fade-in-left delay-500"
          style={{
            backgroundImage: 'radial-gradient(circle, #ffffff 2px, transparent 1px)',
            backgroundSize: '24px 24px',
            maskImage: 'linear-gradient(to right, rgba(0,0,0,0.1), transparent)',
            WebkitMaskImage: 'linear-gradient(to right, rgba(0,0,0,0.1), transparent)'
          }}
        ></div>

        {/* Ornamen Titik-titik Kanan (Dengan Animasi Fade-In) */}
        <div
          className="absolute top-0 right-0 w-full md:w-1/4 h-full pointer-events-none animate-fade-in-right delay-500"
          style={{
            backgroundImage: 'radial-gradient(circle, #ffffff 2px, transparent 1px)',
            backgroundSize: '24px 24px',
            maskImage: 'linear-gradient(to left, rgba(0,0,0,0.2), transparent)',
            WebkitMaskImage: 'linear-gradient(to left, rgba(0,0,0,0.2), transparent)'
          }}
        ></div>

        {/* Kontainer Utama */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full grid grid-cols-1 md:grid-cols-2 gap-8 flex-1">

          {/* Bagian Kiri: Teks & Tombol */}
          <div className="text-left text-white flex flex-col justify-center pb-20 pt-10">

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight animate-fade-in-up delay-100">
              BELI RUMAH HANYA DENGAN <span className="text-yellow-300">SATU KLIK</span>
            </h1>

            <p className="text-blue-100 text-lg mb-10 max-w-lg animate-fade-in-up delay-300">
              Cari rumah, apartemen, tanah, dan properti lainnya dengan mudah. Temukan penawaran terbaik hanya di MZ PROPERTI.
            </p>

            <div className="animate-fade-in-up delay-500">
              <Link
                href="/properti"
                className="inline-block bg-white text-blue-600 font-bold px-8 py-4 rounded-xl hover:bg-blue-800 hover:text-white hover:scale-105 transition duration-300 shadow-lg"
              >
                Jelajahi Sekarang
              </Link>
            </div>
          </div>

          {/* Bagian Kanan: Gambar Hero (Diangkat & Animasi) */}
          <div className="flex items-center justify-center md:justify-end animate-fade-in-right delay-500 h-full">
            <img
              src="/rumah.png"
              alt="Rumah Impian"
              className="w-full max-w-lg lg:max-w-2xl h-auto object-contain drop-shadow-2xl scale-110"
            />
          </div>

        </div>
      </main>
    </main>
  );
}