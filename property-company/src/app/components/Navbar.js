"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { useWishlist } from '../context/wishlistcontext'; // 1. Import Wishlist Context

export default function Navbar() {
    const pathname = usePathname();
    const isHome = pathname === '/'; // Deteksi apakah user sedang di Homepage
    const [isMenuOpen, setIsMenuOpen] = useState(false); // State untuk buka/tutup menu HP
    const [isScrolled, setIsScrolled] = useState(false); // State untuk deteksi scroll

    const { wishlist } = useWishlist(); // 2. Ambil data wishlist

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

                {/* Logo & Teks */}
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
                        Properti
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
                        Galeri
                    </Link>

                    {/* Tombol Wishlist Desktop */}
                    {/* <Link
                        href="/wishlist"
                        className="flex items-center gap-2 rounded-md px-4 py-2 font-bold transition bg-white text-blue-600 hover:bg-blue-50 shadow-sm"
                    >
                        {/* Ikon Hati / Love */}
                        {/* <svg
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

                        {/* Badge Angka Jumlah Wishlist */}
                        {/* {wishlist.length > 0 && (
                            <span className="bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center ml-0.5 shadow-sm">
                                {wishlist.length}
                            </span>
                        )} */}
                    {/* /</Link> */} 
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

                        {/* Tombol Wishlist Mobile */}
                        <Link
                            href="/wishlist"
                            onClick={() => setIsMenuOpen(false)}
                            className="bg-yellow-400 text-slate-900 rounded-md px-4 py-3 font-bold mx-auto w-1/2 mt-2 flex items-center justify-center gap-2 shadow-md"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-600 fill-current" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                            </svg>
                            <span>Wishlist</span>
                            {wishlist.length > 0 && (
                                <span className="bg-red-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center ml-0.5">
                                    {wishlist.length}
                                </span>
                            )}
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
}