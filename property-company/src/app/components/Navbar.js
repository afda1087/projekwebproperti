"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function Navbar() {
    const pathname = usePathname();
    const isHome = pathname === '/'; // Deteksi apakah user sedang di Homepage
    const [isMenuOpen, setIsMenuOpen] = useState(false); // State untuk buka/tutup menu HP

    return (
        <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isHome ? 'bg-transparent' : 'animate-slide-down bg-gradient-to-r from-[#102A43] to-[#1F4465] shadow-lg'}`}>
            {/* Titik-titik hanya muncul jika bukan di Homepage */}
            {!isHome && (
                <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #ffffff 2px, transparent 2px)', backgroundSize: '24px 24px', maskImage: 'linear-gradient(to right, black, transparent)', WebkitMaskImage: 'linear-gradient(to right, black, transparent)' }}></div>
            )}

            {/* Tambahkan relative z-10 di sini */}
            <div className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

                {/* Logo */}
                <Link href="/" className={`text-3xl font-bold flex items-center gap-2 ${isHome ? 'text-white' : 'text-white'}`}>
                    MZ PROPERTI
                </Link>

                {/* Menu Navigasi */}
                <div className="hidden md:flex items-center gap-6 text-xl font-medium">
                    <Link
                        href="/"
                        className={isHome ? 'text-white font-bold' : 'text-slate-600 hover:text-blue-600 transition'}
                    >
                        Beranda
                    </Link>

                    <Link
                        href="/properti"
                        className={pathname === '/properti' ? 'text-white font-bold' : (isHome ? 'text-slate-600 hover:text-white transition' : 'text-slate-600 hover:text-blue-600 transition')}
                    >
                        Properti
                    </Link>

                    <Link
                        href="/tentang"
                        className={pathname === '/tentang' ? 'text-white font-bold' : (isHome ? 'text-slate-600 hover:text-white transition' : 'text-slate-600 hover:text-blue-600 transition')}
                    >
                        Tentang
                    </Link>

                    <Link
                        href="/galeri"
                        className={pathname === '/galeri' ? 'text-white font-bold' : (isHome ? 'text-slate-600 hover:text-white transition' : 'text-slate-600 hover:text-blue-600 transition')}
                    >
                        Galeri
                    </Link>

                    <Link
                        href="/hubungi-kami"
                        className={`rounded-md px-4 py-2 font-bold transition ${isHome ? 'bg-white text-blue-600 hover:bg-blue-50' : 'bg-blue-600 text-white hover:bg-blue-700'}`}
                    >
                        Hubungi Kami
                    </Link>
                </div>
                {/* TOMBOL HAMBURGER MOBILE*/}
                <button
                    className="md:hidden text-white p-2 focus:outline-none"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {isMenuOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        )}
                    </svg>
                </button>

            </div>
            {/* MENU DROPDOWN MOBILE*/}
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