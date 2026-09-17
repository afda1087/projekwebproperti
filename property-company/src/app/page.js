// import Image from "next/image";

// export default function Home() {
//   return (
//     <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
//       <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
//         <Image
//           className="dark:invert h-5 w-[100px]"
//           src="/next.svg"
//           alt="Next.js logo"
//           width={100}
//           height={20}
//           priority
//         />
//         <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
//           <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
//             To get started, edit the{" "}
//             <code className="rounded bg-black/[.06] px-1.5 py-0.5 font-mono text-[0.9em] dark:bg-white/[.08]">
//               page.js
//             </code>{" "}
//             file.
//           </h1>
//           <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
//             Looking for a starting point or more instructions? Head over to{" "}
//             <a
//               href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//               className="font-medium text-zinc-950 dark:text-zinc-50"
//             >
//               Templates
//             </a>{" "}
//             or the{" "}
//             <a
//               href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//               className="font-medium text-zinc-950 dark:text-zinc-50"
//             >
//               Learning
//             </a>{" "}
//             center.
//           </p>
//         </div>
//         <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
//           <a
//             className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
//             href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <Image
//               className="dark:invert h-[14px] w-4"
//               src="/vercel.svg"
//               alt="Vercel logomark"
//               width={16}
//               height={14}
//             />
//             Deploy Now
//           </a>
//           <a
//             className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
//             href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Documentation
//           </a>
//         </div>
//       </main>
//     </div>
//   );
// }






export default function Home() {
  return (
    <main>
      {/* NAVBAR */}
      <nav className="navbar">
        <div className="logo">
          <span>⌂</span> Rumah Impian
        </div>

        <div className="nav-menu">
          <a href="#">BERANDA</a>
          <a href="#">LAYANAN</a>
          <a href="#">FITUR</a>
          <a href="#">KONTAK</a>
        </div>

        <div className="nav-right">
          <a href="#" className="daftar">DAFTAR</a>
          <button className="btn-masuk">MASUK</button>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero">

        <div className="hero-content">
          <p className="small-title">TEMUKAN HUNIAN IMPIANMU</p>

          <h1>
            Membantu Temukan
            <br />
            Rumah Impian.
          </h1>

          <p className="hero-description">
            Rumah Impian hadir untuk membantu kamu menemukan
            rumah terbaik dengan mudah, aman, dan terpercaya.
          </p>

          <button className="btn-primary">
            Temukan Rumah
            <span>→</span>
          </button>
        </div>

        {/* GAMBAR RUMAH */}
        <div className="hero-house">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80"
            alt="Rumah Impian"
          />
        </div>

        {/* SEARCH BOX */}
        <div className="search-box">

          <div className="search-title">
            <span>🔍</span>
            <div>
              <strong>Cari Rumah Impianmu</strong>
              <p>Gunakan filter untuk menemukan rumah yang sesuai</p>
            </div>
          </div>

          <div className="search-fields">

            <div className="search-field keyword">
              <label>Lokasi atau Nama</label>
              <input
                type="text"
                placeholder="Contoh: Pekalongan"
              />
            </div>

            <div className="search-field">
              <label>Wilayah</label>
              <select>
                <option value="">Semua Wilayah</option>
                <option>Pekalongan</option>
                <option>Batang</option>
                <option>Pemalang</option>
                <option>Semarang</option>
              </select>
            </div>

            <div className="search-field">
              <label>DP</label>
              <select>
                <option value="">Semua DP</option>
                <option>DP 0%</option>
                <option>DP &lt; 5 Juta</option>
                <option>DP 5 - 10 Juta</option>
                <option>DP &gt; 10 Juta</option>
              </select>
            </div>

            <div className="search-field">
              <label>Harga</label>
              <select>
                <option value="">Semua Harga</option>
                <option>Di bawah 100 Juta</option>
                <option>100 - 200 Juta</option>
                <option>200 - 300 Juta</option>
                <option>Di atas 300 Juta</option>
              </select>
            </div>

            <button className="btn-search">
              CARI
            </button>

          </div>
        </div>

      </section>
    </main>
  );
}
