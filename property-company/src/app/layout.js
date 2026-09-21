import './globals.css';
import Navbar from './components/Navbar'; // 1. Import komponen Navbar
import { WishlistProvider } from './context/wishlistcontext'; // 2. Import WishlistProvider

export const metadata = {
  title: 'IKAMARTI BAKAL',
  description: 'Platform pencarian properti modern',
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className="bg-slate-50 text-slate-900">
      <WishlistProvider> {/* 3. Bungkus seluruh aplikasi dengan WishlistProvider */}  
        {/* 2. Letakkan Navbar tepat di bawah <body> */}
        <Navbar />

        {/* 3. children adalah isi dari masing-masing halaman (page.js) */}
        <main>
          {children}
        </main>
      </WishlistProvider>
      </body>
    </html>
  );
}