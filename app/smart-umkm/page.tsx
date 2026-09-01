import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "SmartUMKM — Case Study | Alghazaly Ibhram Santoso",
  description: "Studi kasus perancangan platform marketplace digital SmartUMKM untuk komunitas perumahan.",
};

export default function SmartUMKMPage() {
  return (
    <>
      <Navbar
        isCaseStudy
        backHref="/#works"
        backLabel="Kembali ke Portofolio"
        categoryLabel="UI/UX & Frontend Case Study"
      />

      <main className="max-w-container-max mx-auto px-gutter relative py-12 flex flex-col gap-24">
        {/* 1. Hero Section */}
        <header className="reveal flex flex-col gap-12 border-b border-outline/10 pb-16">
          <div className="flex flex-col gap-4">
            <span className="font-mono-label text-mono-label text-[#00897B] uppercase tracking-widest border border-[#00897B]/20 bg-[#00897B]/5 px-3 py-1 w-max">
              Case Study 02
            </span>
            <h1 className="font-display-xl text-5xl md:text-7xl text-on-surface font-extrabold tracking-tight">
              SmartUMKM
            </h1>
            <p className="font-headline-md text-2xl md:text-3xl text-on-surface-variant max-w-3xl font-normal leading-relaxed">
              A simple digital marketplace for neighborhood communities
            </p>
          </div>

          {/* Metadata Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-6 border border-outline/20 bg-surface">
            <div>
              <span className="font-mono-label text-mono-label text-outline block uppercase tracking-wider mb-1">
                Role
              </span>
              <span className="font-semibold text-on-surface">UI/UX Designer</span>
            </div>
            <div>
              <span className="font-mono-label text-mono-label text-outline block uppercase tracking-wider mb-1">
                Project Type
              </span>
              <span className="font-semibold text-on-surface">UI/UX Design · Web Development</span>
            </div>
            <div>
              <span className="font-mono-label text-mono-label text-outline block uppercase tracking-wider mb-1">
                Tools &amp; Tech
              </span>
              <span className="font-semibold text-on-surface text-sm">Figma · Next.js · Tailwind CSS</span>
            </div>
            <div className="col-span-2 md:col-span-1">
              <span className="font-mono-label text-mono-label text-outline block uppercase tracking-wider mb-1">
                Focus
              </span>
              <span className="text-sm text-on-surface-variant font-medium">
                Product Design · UX · IA · UI Design · Frontend
              </span>
            </div>
          </div>

          {/* Hero Image Banner */}
          <div className="w-full border border-outline/20 p-4 md:p-8 bg-surface shadow-lg flex justify-center items-center">
            <Image
              src="/image/smart_umkm_final.png"
              alt="SmartUMKM Marketplace Web Interface Mockup"
              width={1200}
              height={700}
              priority
              className="w-full h-auto rounded-xl shadow-xl object-contain"
            />
          </div>
        </header>

        {/* 2. Project Overview */}
        <section className="reveal grid grid-cols-1 md:grid-cols-12 gap-gutter items-start border-b border-outline/10 pb-16">
          <div className="md:col-span-4">
            <span className="font-mono-label text-mono-label text-outline uppercase tracking-widest">
              01 — Overview
            </span>
            <h2 className="font-headline-lg text-3xl md:text-4xl text-on-surface mt-2 font-bold">
              Bringing neighborhood businesses into one digital space.
            </h2>
          </div>
          <div className="md:col-span-8 flex flex-col gap-6 font-body-lg text-body-lg text-on-surface-variant">
            <p>
              <strong className="text-on-surface">SmartUMKM</strong> adalah konsep marketplace digital yang dirancang
              khusus untuk lingkungan perumahan.
            </p>
            <p>
              Project ini berangkat dari kebiasaan warga yang menggunakan grup WhatsApp sebagai tempat untuk menawarkan dan
              mencari produk. Meskipun praktis, informasi produk dapat dengan cepat tertumpuk oleh percakapan lain sehingga
              sulit ditemukan kembali.
            </p>
            <p>
              SmartUMKM mencoba menghadirkan pengalaman yang lebih terstruktur, mudah dicari, dan nyaman digunakan
              melalui sebuah marketplace berbasis web.
            </p>
          </div>
        </section>

        {/* 3. The Problem */}
        <section className="reveal flex flex-col gap-12 border-b border-outline/10 pb-16">
          <div>
            <span className="font-mono-label text-mono-label text-outline uppercase tracking-widest">
              02 — The Problem
            </span>
            <h2 className="font-headline-lg text-3xl md:text-4xl text-on-surface mt-2 font-bold">Tantangan Utama</h2>
          </div>

          <blockquote className="font-headline-lg text-4xl md:text-6xl text-on-surface font-extrabold leading-tight border-l-4 border-[#00897B] pl-6 md:pl-10 my-4">
            &quot;When everything is sold through chat, finding products becomes difficult.&quot;
          </blockquote>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-start">
            <div className="md:col-span-7 flex flex-col gap-6 text-body-lg text-on-surface-variant">
              <p>
                Grup WhatsApp dapat menjadi tempat yang praktis untuk berjualan, tetapi memiliki beberapa keterbatasan
                ketika jumlah informasi semakin banyak. Pengguna dapat mengalami kesulitan untuk:
              </p>
              <ul className="flex flex-col gap-3 font-medium text-on-surface pl-4 border-l border-outline/20">
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-[#00897B] text-sm">remove</span> Menemukan produk yang
                  pernah ditawarkan
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-[#00897B] text-sm">remove</span> Mengetahui produk apa
                  saja yang sedang tersedia
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-[#00897B] text-sm">remove</span> Membedakan produk yang
                  masih dijual dan sudah terjual
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-[#00897B] text-sm">remove</span> Mencari penjual atau
                  produk tertentu
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-[#00897B] text-sm">remove</span> Melihat informasi
                  produk secara terstruktur
                </li>
              </ul>
              <p>Akibatnya, informasi jual-beli mudah tertimbun oleh percakapan lainnya.</p>
            </div>

            <div className="md:col-span-5 border-2 border-[#00897B]/40 bg-[#00897B]/5 p-8 flex flex-col gap-4">
              <span className="font-mono-label text-mono-label text-[#00897B] uppercase font-bold tracking-widest">
                Design Challenge
              </span>
              <p className="font-headline-md text-2xl text-on-surface font-semibold leading-snug">
                How might we make buying and selling within a neighborhood community simpler and more organized?
              </p>
            </div>
          </div>
        </section>

        {/* 4. Goal */}
        <section className="reveal flex flex-col gap-12 border-b border-outline/10 pb-16">
          <div>
            <span className="font-mono-label text-mono-label text-outline uppercase tracking-widest">
              03 — The Goal
            </span>
            <h2 className="font-headline-lg text-3xl md:text-4xl text-on-surface mt-2 font-bold">Tujuan Perancangan</h2>
            <p className="text-on-surface-variant text-lg mt-2">
              SmartUMKM dirancang untuk menciptakan pengalaman jual-beli yang lebih terstruktur tanpa membuat prosesnya
              menjadi rumit.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="border border-outline/20 p-6 bg-surface flex flex-col gap-4 hover:border-[#00897B] transition-colors">
              <div className="w-10 h-10 rounded bg-[#00897B]/10 text-[#00897B] flex items-center justify-center font-bold">
                01
              </div>
              <h3 className="font-headline-md text-xl text-on-surface font-bold">Simple</h3>
              <p className="text-on-surface-variant text-sm">
                Warga dapat melihat produk tanpa harus mencari melalui chat percakapan.
              </p>
            </div>

            <div className="border border-outline/20 p-6 bg-surface flex flex-col gap-4 hover:border-[#00897B] transition-colors">
              <div className="w-10 h-10 rounded bg-[#00897B]/10 text-[#00897B] flex items-center justify-center font-bold">
                02
              </div>
              <h3 className="font-headline-md text-xl text-on-surface font-bold">Organized</h3>
              <p className="text-on-surface-variant text-sm">
                Produk ditampilkan dalam katalog terstruktur yang rapi dan konsisten.
              </p>
            </div>

            <div className="border border-outline/20 p-6 bg-surface flex flex-col gap-4 hover:border-[#00897B] transition-colors">
              <div className="w-10 h-10 rounded bg-[#00897B]/10 text-[#00897B] flex items-center justify-center font-bold">
                03
              </div>
              <h3 className="font-headline-md text-xl text-on-surface font-bold">Discoverable</h3>
              <p className="text-on-surface-variant text-sm">
                Pengguna dapat mencari produk yang mereka butuhkan dengan cepat dan mudah.
              </p>
            </div>

            <div className="border border-outline/20 p-6 bg-surface flex flex-col gap-4 hover:border-[#00897B] transition-colors">
              <div className="w-10 h-10 rounded bg-[#00897B]/10 text-[#00897B] flex items-center justify-center font-bold">
                04
              </div>
              <h3 className="font-headline-md text-xl text-on-surface font-bold">Community-focused</h3>
              <p className="text-on-surface-variant text-sm">
                Platform dibuat khusus untuk konteks perumahan, bukan marketplace besar yang rumit.
              </p>
            </div>
          </div>
        </section>

        {/* 5. Understanding the User */}
        <section className="reveal flex flex-col gap-12 border-b border-outline/10 pb-16">
          <div>
            <span className="font-mono-label text-mono-label text-outline uppercase tracking-widest">
              04 — Understanding the User
            </span>
            <h2 className="font-headline-lg text-3xl md:text-4xl text-on-surface mt-2 font-bold">
              Dua Tipe Pengguna Utama
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Buyer Card */}
            <div className="border border-outline/20 p-8 bg-surface flex flex-col gap-6">
              <div className="flex items-center gap-3 border-b border-outline/10 pb-4">
                <span className="material-symbols-outlined text-[#00897B] text-3xl">shopping_bag</span>
                <div>
                  <h3 className="font-headline-md text-2xl font-bold text-on-surface">Resident / Buyer</h3>
                  <span className="text-xs text-outline font-mono-label uppercase">Warga Pembeli</span>
                </div>
              </div>
              <p className="text-on-surface-variant text-sm">
                Warga yang ingin mencari dan membeli produk dari penjual di lingkungan sekitar.
              </p>
              <div className="flex flex-col gap-2">
                <span className="font-bold text-xs uppercase text-outline font-mono-label">Kebutuhan Utama:</span>
                <ul className="flex flex-col gap-2 text-sm text-on-surface">
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#00897B] text-xs">check</span> Melihat produk yang
                    tersedia
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#00897B] text-xs">check</span> Mencari produk spesifik
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#00897B] text-xs">check</span> Melihat detail
                    informasi produk
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#00897B] text-xs">check</span> Mengetahui status
                    ketersediaan produk
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#00897B] text-xs">check</span> Menemukan kontak
                    penjual
                  </li>
                </ul>
              </div>
            </div>

            {/* Seller Card */}
            <div className="border border-outline/20 p-8 bg-surface flex flex-col gap-6">
              <div className="flex items-center gap-3 border-b border-outline/10 pb-4">
                <span className="material-symbols-outlined text-[#00897B] text-3xl">storefront</span>
                <div>
                  <h3 className="font-headline-md text-2xl font-bold text-on-surface">Seller</h3>
                  <span className="text-xs text-outline font-mono-label uppercase">Warga Penjual (UMKM)</span>
                </div>
              </div>
              <p className="text-on-surface-variant text-sm">
                Warga yang ingin menawarkan produk makanan/jasa kepada warga lainnya.
              </p>
              <div className="flex flex-col gap-2">
                <span className="font-bold text-xs uppercase text-outline font-mono-label">Kebutuhan Utama:</span>
                <ul className="flex flex-col gap-2 text-sm text-on-surface">
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#00897B] text-xs">check</span> Menambahkan produk
                    baru
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#00897B] text-xs">check</span> Menampilkan informasi
                    produk secara lengkap
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#00897B] text-xs">check</span> Mengubah status
                    penjualan (Tersedia/Habis)
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#00897B] text-xs">check</span> Mengelola daftar
                    produk yang ditawarkan
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 6. Existing Experience & Opportunity */}
        <section className="reveal flex flex-col gap-12 border-b border-outline/10 pb-16">
          <div>
            <span className="font-mono-label text-mono-label text-outline uppercase tracking-widest">
              05 &amp; 06 — Existing Experience &amp; The Opportunity
            </span>
            <h2 className="font-headline-lg text-3xl md:text-4xl text-on-surface mt-2 font-bold">
              From WhatsApp groups to Catalog-based Experience
            </h2>
          </div>

          {/* Existing WhatsApp Flow */}
          <div className="p-8 border border-outline/20 bg-surface flex flex-col gap-6">
            <span className="font-mono-label text-xs text-outline uppercase font-bold">
              Alur Lama (Grup Whatsapp):
            </span>
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="p-4 border border-outline/20 bg-background rounded text-center text-sm font-semibold w-full md:w-auto">
                Seller posts product
              </div>
              <span className="material-symbols-outlined text-outline hidden md:block">east</span>
              <div className="p-4 border border-outline/20 bg-background rounded text-center text-sm font-semibold w-full md:w-auto">
                Residents see message
              </div>
              <span className="material-symbols-outlined text-outline hidden md:block">east</span>
              <div className="p-4 border border-outline/20 bg-background rounded text-center text-sm font-semibold w-full md:w-auto">
                Messages continue to appear
              </div>
              <span className="material-symbols-outlined text-outline hidden md:block">east</span>
              <div className="p-4 border border-outline/20 bg-background rounded text-center text-sm font-semibold w-full md:w-auto">
                Product post gets buried
              </div>
              <span className="material-symbols-outlined text-outline hidden md:block">east</span>
              <div className="p-4 border-2 border-red-500/40 bg-red-500/5 text-red-600 rounded text-center text-sm font-bold w-full md:w-auto">
                Resident searches through chat
              </div>
            </div>
            <p className="text-on-surface-variant text-sm italic">
              Masalah utamanya bukan karena warga tidak memiliki tempat untuk berjualan, tetapi karena informasi produk
              tidak memiliki ruang khusus untuk dikelola dan ditemukan kembali.
            </p>
          </div>

          {/* The Opportunity Box */}
          <div className="p-8 border-2 border-[#00897B]/40 bg-[#00897B]/5 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <span className="font-mono-label text-xs text-[#00897B] font-bold uppercase tracking-wider">
                Peluang Transformasi
              </span>
              <h3 className="font-headline-md text-2xl font-bold text-on-surface mt-1">
                From Conversation-based ➔ Catalog-based
              </h3>
            </div>
            <p className="text-on-surface-variant text-base max-w-xl">
              Daripada produk bercampur dengan percakapan chat sehari-hari, setiap produk kini memiliki ruang khusus dan
              informasi terstruktur tersendiri.
            </p>
          </div>
        </section>

        {/* 7. Information Architecture */}
        <section className="reveal flex flex-col gap-8 border-b border-outline/10 pb-16">
          <div>
            <span className="font-mono-label text-mono-label text-outline uppercase tracking-widest">
              07 — Information Architecture
            </span>
            <h2 className="font-headline-lg text-3xl md:text-4xl text-on-surface mt-2 font-bold">
              Arsitektur Informasi
            </h2>
            <p className="text-on-surface-variant text-base mt-2">
              Struktur SmartUMKM dibuat sederhana agar pengguna dapat memahami platform dengan cepat.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 border border-outline/20 bg-surface flex flex-col gap-4">
              <span className="font-bold text-on-surface uppercase text-xs font-mono-label">
                Struktur Pembeli (Buyer):
              </span>
              <div className="flex items-center gap-3 p-3 bg-background border border-outline/10 rounded font-semibold text-sm flex-wrap">
                <span>Home</span> <span className="material-symbols-outlined text-[#00897B] text-sm">east</span>{" "}
                <span>Product Catalog</span> <span className="material-symbols-outlined text-[#00897B] text-sm">east</span>{" "}
                <span>Product Detail</span>
              </div>
            </div>
            <div className="p-6 border border-outline/20 bg-surface flex flex-col gap-4">
              <span className="font-bold text-on-surface uppercase text-xs font-mono-label">
                Struktur Penjual (Seller):
              </span>
              <div className="flex items-center gap-3 p-3 bg-background border border-outline/10 rounded font-semibold text-sm flex-wrap">
                <span>Seller Dashboard</span> <span className="material-symbols-outlined text-[#00897B] text-sm">east</span>{" "}
                <span>My Products</span> <span className="material-symbols-outlined text-[#00897B] text-sm">east</span>{" "}
                <span>Add / Edit Product</span>
              </div>
            </div>
          </div>
        </section>

        {/* 8. User Flow */}
        <section className="reveal flex flex-col gap-8 border-b border-outline/10 pb-16">
          <div>
            <span className="font-mono-label text-mono-label text-outline uppercase tracking-widest">
              08 — User Flow
            </span>
            <h2 className="font-headline-lg text-3xl md:text-4xl text-on-surface mt-2 font-bold">
              Alur Pengguna (Buyer &amp; Seller Flow)
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Buyer Flow */}
            <div className="p-6 border border-outline/20 bg-surface flex flex-col gap-4">
              <span className="font-bold text-[#00897B] uppercase text-xs font-mono-label">Buyer Flow:</span>
              <div className="flex flex-col gap-2 text-sm font-medium text-on-surface">
                <div className="p-3 bg-background border border-outline/10">1. Login</div>
                <div className="p-3 bg-background border border-outline/10">2. Browse Catalog</div>
                <div className="p-3 bg-background border border-outline/10">3. Search Product</div>
                <div className="p-3 bg-background border border-outline/10">4. Select Product</div>
                <div className="p-3 bg-background border border-outline/10">5. View Product Details</div>
                <div className="p-3 bg-[#00897B]/10 border border-[#00897B]/30 text-[#00897B] font-bold">
                  6. Contact / Purchase
                </div>
              </div>
            </div>

            {/* Seller Flow */}
            <div className="p-6 border border-outline/20 bg-surface flex flex-col gap-4">
              <span className="font-bold text-[#00897B] uppercase text-xs font-mono-label">Seller Flow:</span>
              <div className="flex flex-col gap-2 text-sm font-medium text-on-surface">
                <div className="p-3 bg-background border border-outline/10">1. Login</div>
                <div className="p-3 bg-background border border-outline/10">2. Seller Dashboard</div>
                <div className="p-3 bg-background border border-outline/10">3. Add Product</div>
                <div className="p-3 bg-background border border-outline/10">4. Product Published</div>
                <div className="p-3 bg-[#00897B]/10 border border-[#00897B]/30 text-[#00897B] font-bold">
                  5. Update Sale Status
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 9. Wireframe */}
        <section className="reveal flex flex-col gap-8 border-b border-outline/10 pb-16">
          <div>
            <span className="font-mono-label text-mono-label text-outline uppercase tracking-widest">
              09 — Wireframe
            </span>
            <h2 className="font-headline-lg text-3xl md:text-4xl text-on-surface mt-2 font-bold">
              Struktur Low-Fidelity Wireframe
            </h2>
            <p className="text-on-surface-variant text-base mt-2">
              Fokus tahap ini adalah struktur dan usability, bukan dekorasi visual semata.
            </p>
          </div>

          <div className="border border-outline/20 p-4 md:p-8 bg-surface/50 flex justify-center items-center">
            <Image
              src="/image/smart_umkm_wireframe.png"
              alt="SmartUMKM Wireframe Layout"
              width={1000}
              height={600}
              className="max-w-4xl w-full h-auto rounded-xl shadow-lg object-contain"
            />
          </div>
        </section>

        {/* 10. Design System */}
        <section className="reveal flex flex-col gap-12 border-b border-outline/10 pb-16">
          <div>
            <span className="font-mono-label text-mono-label text-outline uppercase tracking-widest">
              10 — Visual Direction
            </span>
            <h2 className="font-headline-lg text-3xl md:text-4xl text-on-surface mt-2 font-bold">
              Visual Direction &amp; Components
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="p-6 border border-outline/20 bg-surface text-center">
              <span className="font-bold text-on-surface block text-base mb-1">Friendly</span>
              <span className="text-xs text-outline">Ramah untuk semua usia</span>
            </div>
            <div className="p-6 border border-outline/20 bg-surface text-center">
              <span className="font-bold text-on-surface block text-base mb-1">Clean</span>
              <span className="text-xs text-outline">Layout tanpa distrasi</span>
            </div>
            <div className="p-6 border border-outline/20 bg-surface text-center">
              <span className="font-bold text-on-surface block text-base mb-1">Approachable</span>
              <span className="text-xs text-outline">Mudah dipahami warga</span>
            </div>
            <div className="p-6 border border-outline/20 bg-surface text-center">
              <span className="font-bold text-on-surface block text-base mb-1">Community-oriented</span>
              <span className="text-xs text-outline">Konteks perumahan lokal</span>
            </div>
          </div>
        </section>

        {/* 11. MVP Scope */}
        <section className="reveal flex flex-col gap-8 border-b border-outline/10 pb-16">
          <div>
            <span className="font-mono-label text-mono-label text-outline uppercase tracking-widest">
              11 — MVP Scope
            </span>
            <h2 className="font-headline-lg text-3xl md:text-4xl text-on-surface mt-2 font-bold">
              Skop Fitur MVP Prioritas
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="p-6 border-2 border-[#00897B] bg-[#00897B]/5 flex flex-col gap-3">
              <span className="font-bold text-[#00897B] font-mono-label text-xs uppercase">MUST HAVE</span>
              <ul className="text-xs text-on-surface font-medium flex flex-col gap-2">
                <li>• Product Catalog</li>
                <li>• Product Listing</li>
                <li>• Sale Status</li>
                <li>• Resident &amp; Seller Login</li>
                <li>• Search</li>
              </ul>
            </div>

            <div className="p-6 border border-outline/20 bg-surface flex flex-col gap-3">
              <span className="font-bold text-on-surface font-mono-label text-xs uppercase">SHOULD HAVE</span>
              <ul className="text-xs text-on-surface-variant flex flex-col gap-2">
                <li>• Operational Hours</li>
                <li>• Upload Notification</li>
              </ul>
            </div>

            <div className="p-6 border border-outline/20 bg-surface flex flex-col gap-3">
              <span className="font-bold text-on-surface font-mono-label text-xs uppercase">COULD HAVE</span>
              <ul className="text-xs text-on-surface-variant flex flex-col gap-2">
                <li>• Category Filter</li>
                <li>• Online Payment</li>
                <li>• Recommendations</li>
                <li>• Location Features</li>
              </ul>
            </div>

            <div className="p-6 border border-outline/20 bg-surface flex flex-col gap-3">
              <span className="font-bold text-outline font-mono-label text-xs uppercase">WON&apos;T HAVE (MVP)</span>
              <p className="text-xs text-outline">
                Fitur korporat yang terlalu kompleks ditunda agar fokus pada kebutuhan utama warga.
              </p>
            </div>
          </div>
        </section>

        {/* 12. Final Design */}
        <section className="reveal flex flex-col gap-12 border-b border-outline/10 pb-16">
          <div>
            <span className="font-mono-label text-mono-label text-[#00897B] uppercase tracking-widest border border-[#00897B]/20 bg-[#00897B]/5 px-3 py-1 w-max">
              12 — Final Design
            </span>
            <h2 className="font-headline-lg text-4xl md:text-5xl text-on-surface mt-4 font-extrabold leading-tight">
              From scattered conversations to an organized marketplace.
            </h2>
            <p className="text-on-surface-variant text-lg mt-4 max-w-3xl">
              Final design SmartUMKM mengubah pengalaman jual-beli yang sebelumnya tersebar di dalam percakapan chat
              menjadi pengalaman katalog yang terstruktur dan mudah digunakan.
            </p>
          </div>

          <div className="w-full flex flex-col gap-6">
            <div className="w-full border border-outline/20 p-4 md:p-12 bg-surface flex justify-center items-center shadow-2xl rounded-xl">
              <Image
                src="/image/smart_umkm_final.png"
                alt="SmartUMKM Final Web Interface"
                width={1200}
                height={700}
                className="w-full h-auto rounded-lg shadow-xl object-contain"
              />
            </div>
          </div>
        </section>

        {/* 13. My Contribution & Reflection */}
        <section className="reveal flex flex-col gap-12 border-b border-outline/10 pb-16">
          <div>
            <span className="font-mono-label text-mono-label text-outline uppercase tracking-widest">
              13 — Contribution &amp; Reflection
            </span>
            <h2 className="font-headline-lg text-3xl md:text-4xl text-on-surface mt-2 font-bold">
              Start small. Solve the real problem first.
            </h2>
          </div>

          <blockquote className="font-headline-lg text-3xl md:text-4xl text-on-surface font-extrabold leading-snug border-l-4 border-[#00897B] pl-6">
            &quot;Designing for a community, not just a screen.&quot;
          </blockquote>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-body-lg text-on-surface-variant">
            <div className="flex flex-col gap-4">
              <h3 className="font-bold text-on-surface text-xl">My Role in SmartUMKM</h3>
              <p className="text-sm">
                Fokus pekerjaan mencakup: menentukan struktur halaman, merancang user flow, menyusun information
                architecture, membuat wireframe, mendesain interface &amp; product catalog, mendesain seller experience, dan
                mengembangkan interface website dengan HTML, CSS, JavaScript.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="font-bold text-on-surface text-xl">Project Outcome</h3>
              <p className="text-sm">
                SmartUMKM menghasilkan konsep marketplace digital yang berfokus pada kebutuhan dasar jual-beli dalam
                lingkungan perumahan. Dibuat dengan prinsip:{" "}
                <strong>Simple enough to use. Structured enough to scale.</strong>
              </p>
            </div>
          </div>
        </section>

        {/* Next Project Navigation */}
        <footer className="reveal flex flex-col sm:flex-row justify-between items-center gap-6 pt-8">
          <Link
            href="/student-service-hub"
            className="px-8 py-4 border border-on-surface text-on-surface text-label-caps font-label-caps uppercase tracking-wider hover:bg-on-surface hover:text-on-secondary transition-colors flex items-center gap-2"
          >
            <span className="material-symbols-outlined text-sm">arrow_back</span> Proyek Sebelumnya: Student Service
            Hub
          </Link>
          <Link
            href="/#works"
            className="px-8 py-4 bg-[#00897B] text-white text-label-caps font-label-caps uppercase tracking-wider hover:bg-primary-container hover:text-on-surface transition-colors flex items-center gap-2"
          >
            Kembali ke Portofolio <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </Link>
        </footer>
      </main>
    </>
  );
}
