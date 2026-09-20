"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function Navbar() {
    const pathname = usePathname();
    const isHome = pathname === '/'; // Deteksi apakah user sedang di Homepage
    const [isMenuOpen, setIsMenuOpen] = useState(false); // State untuk buka/tutup menu HP
    const [isScrolled, setIsScrolled] = useState(false); // State untuk deteksi scroll

    // Deteksi scroll layar
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Tentukan style background berdasarkan halaman dan kondisi scroll
    const getNavbarBackground = () => {
        if (!isHome) {
            // Jika BUKAN di Beranda: Selalu warna biru gradient
            return 'bg-gradient-to-r from-[#102A43] to-[#1F4465] shadow-lg';
        }
        // Jika DI BERANDA:
        // Saat di-scroll -> Biru gradient
        // Saat paling atas -> Transparan
        return isScrolled
            ? 'bg-gradient-to-r from-[#102A43] to-[#1F4465] shadow-lg backdrop-blur-md'
            : 'bg-transparent';
    };

    return (
        <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${getNavbarBackground()}`}>
            {/* Titik-titik latar belakang (hanya tampil jika bukan di Homepage atau saat di-scroll) */}
            {(!isHome || isScrolled) && (
                <div 
                    className="absolute inset-0 opacity-10 pointer-events-none" 
                    style={{ 
                        backgroundImage: 'radial-gradient(circle, #ffffff 2px, transparent 2px)', 
                        backgroundSize: '24px 24px', 
                        maskImage: 'linear-gradient(to right, black, transparent)', 
                        WebkitMaskImage: 'linear-gradient(to right, black, transparent)' 
                    }}
                ></div>
            )}

            {/* Container utama Navbar */}
            <div className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-3 sm:px-6 py-3">

                {/* Logo & Teks (Ukuran ringkas di mobile agar tidak nabrak) */}
                <Link href="/" className="flex items-center gap-2 sm:gap-3 max-w-[75%] sm:max-w-none">
                    <img 
                        src="/logo.jpg" 
                        alt="IKAMARTI BAKAL" 
                        className="h-9 w-9 sm:h-12 sm:w-12 rounded-full object-cover border border-white/20 shadow-md flex-shrink-0" 
                    />
                    <div className="flex flex-col min-w-0">
                        <span className="text-lg sm:text-50xl md:text-xl font-bold tracking-wider text-white leading-tight uppercase truncate">
                            IKAMARTI BAKAL
                        </span>
                        <span className="text-[7px] sm:text-[10px] md:text-xs tracking-wide text-slate-200 leading-tight truncate">
                            KOMUNITAS HARAPAN & KEBERSAMAAN
                        </span>
                    </div>
                </Link>

                {/* Menu Navigasi (Desktop) */}
                <div className="hidden md:flex items-center gap-6 text-xl font-medium">
                    <Link
                        href="/"
                        className={isHome ? 'text-white font-bold' : 'text-slate-200 hover:text-white transition'}
                    >
                        Beranda
                    </Link>

                    <Link
                        href="/properti"
                        className={pathname === '/properti' ? 'text-white font-bold' : 'text-slate-200 hover:text-white transition'}
                    >
                        Alfa Ganteng ni bozz
                    </Link>

                    <Link
                        href="/tentang"
                        className={pathname === '/tentang' ? 'text-white font-bold' : 'text-slate-200 hover:text-white transition'}
                    >
                        Tentang
                    </Link>

                    <Link
                        href="/galeri"
                        className={pathname === '/galeri' ? 'text-white font-bold' : 'text-slate-200 hover:text-white transition'}
                    >
                        Afda Ganteng A day in my life
                    </Link>

                    <Link
                        href="/hubungi-kami"
                        className={`rounded-md px-4 py-2 font-bold transition ${isHome && !isScrolled ? 'bg-white text-blue-600 hover:bg-blue-50' : 'bg-blue-600 text-white hover:bg-blue-700'}`}
                    >
                        Hubungi Kami
                    </Link>
                </div>

                {/* TOMBOL HAMBURGER MOBILE */}
                <button
                    className="md:hidden text-white p-1.5 focus:outline-none flex-shrink-0"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle Menu"
                >
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {isMenuOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        )}
                    </svg>
                </button>

            </div>

            {/* MENU DROPDOWN MOBILE */}
            {isMenuOpen && (
                <div className="md:hidden relative z-10 bg-[#102A43] border-t border-slate-700/50 shadow-xl animate-fade-in-up">
                    <div className="flex flex-col px-6 py-6 space-y-5 text-center text-lg font-medium">
                        <Link href="/" onClick={() => setIsMenuOpen(false)} className={isHome ? 'text-white font-bold' : 'text-slate-300'}>Beranda</Link>
                        <Link href="/properti" onClick={() => setIsMenuOpen(false)} className={pathname === '/properti' ? 'text-yellow-400 font-bold' : 'text-slate-300'}>Properti</Link>
                        <Link href="/tentang" onClick={() => setIsMenuOpen(false)} className={pathname === '/tentang' ? 'text-yellow-400 font-bold' : 'text-slate-300'}>Tentang</Link>
                        <Link href="/galeri" onClick={() => setIsMenuOpen(false)} className={pathname === '/galeri' ? 'text-yellow-400 font-bold' : 'text-slate-300'}>Galeri</Link>
                        <Link href="/hubungi-kami" onClick={() => setIsMenuOpen(false)} className="bg-yellow-400 text-slate-900 rounded-md px-4 py-3 font-bold mx-auto w-1/2 mt-2">Hubungi Kami</Link>
                    </div>
                </div>
            )}
        </nav>
    );
}