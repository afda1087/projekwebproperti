"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
    const pathname = usePathname();
    const isHome = pathname === '/'; // Deteksi apakah user sedang di Homepage

    return (
        <nav className={`fixed top-0 w-full z-50 transition-all duration-300 animate-slide-down ${isHome ? 'bg-transparent' : 'bg-white shadow-sm border-b border-slate-200'}`}>
            <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

                {/* Logo */}
                <Link href="/" className={`text-3xl font-bold flex items-center gap-2 ${isHome ? 'text-white' : 'text-blue-600'}`}>
                    MZ PROPERTI
                </Link>

                {/* Menu Navigasi */}
                <div className="hidden md:flex items-center gap-6 text-sm font-medium">
                    <Link
                        href="/"
                        className={isHome ? 'text-xl text-white font-bold' : 'text-slate-600 hover:text-blue-600 transition'}
                    >
                        Beranda
                    </Link>

                    <Link
                        href="/properti"
                        className={pathname === '/properti' ? 'text-blue-600 font-bold' : (isHome ? 'text-xl text-blue-100 hover:text-white transition' : 'text-slate-600 hover:text-blue-600 transition')}
                    >
                        Properti
                    </Link>

                    <Link
                        href="/tentang"
                        className={pathname === '/tentang' ? 'text-blue-600 font-bold' : (isHome ? 'text-xl text-blue-100 hover:text-white transition' : 'text-slate-600 hover:text-blue-600 transition')}
                    >
                        Tentang
                    </Link>

                    <Link
                        href="/galeri"
                        className={pathname === '/galeri' ? 'text-blue-600 font-bold' : (isHome ? 'text-xl text-blue-100 hover:text-white transition' : 'text-slate-600 hover:text-blue-600 transition')}
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

            </div>
        </nav>
    );
}