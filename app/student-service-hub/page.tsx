import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Student Service Hub — Case Study | Alghazaly Ibhram Santoso",
  description: "Studi kasus perancangan platform Student Service Hub untuk mempermudah akses layanan sekolah.",
};

export default function StudentServiceHubPage() {
  return (
    <>
      <Navbar
        isCaseStudy
        backHref="/#works"
        backLabel="Kembali ke Portofolio"
        categoryLabel="UI/UX Case Study"
      />

      <main className="max-w-container-max mx-auto px-gutter relative py-12 flex flex-col gap-24">
        {/* 1. Hero Section */}
        <header className="reveal flex flex-col gap-12 border-b border-outline/10 pb-16">
          <div className="flex flex-col gap-4">
            <span className="font-mono-label text-mono-label text-[#1E88E5] uppercase tracking-widest border border-[#1E88E5]/20 bg-[#1E88E5]/5 px-3 py-1 w-max">
              Case Study 01
            </span>
            <h1 className="font-display-xl text-5xl md:text-7xl text-on-surface font-extrabold tracking-tight">
              Student Service Hub
            </h1>
            <p className="font-headline-md text-2xl md:text-3xl text-on-surface-variant max-w-3xl font-normal leading-relaxed">
              One platform for a better student service experience
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
              <span className="font-semibold text-on-surface">UI/UX Design — DTP Hipster</span>
            </div>
            <div>
              <span className="font-mono-label text-mono-label text-outline block uppercase tracking-wider mb-1">
                Tools
              </span>
              <span className="font-semibold text-on-surface flex items-center gap-1">
                <span className="material-symbols-outlined text-sm">draw</span> Figma
              </span>
            </div>
            <div className="col-span-2 md:col-span-1">
              <span className="font-mono-label text-mono-label text-outline block uppercase tracking-wider mb-1">
                Focus
              </span>
              <span className="text-sm text-on-surface-variant font-medium">
                UX Research · User Flow · Wireframe · Design System · UI Design
              </span>
            </div>
          </div>

          {/* Hero Image Banner */}
          <div className="w-full border border-outline/20 p-8 md:p-12 bg-surface/50 flex justify-center items-center">
            <Image
              src="/image/ssh_mobile_ui.png"
              alt="Student Service Hub Mobile App Interface"
              width={400}
              height={800}
              priority
              className="max-w-xs md:max-w-sm w-full h-auto drop-shadow-2xl object-contain hover:scale-[1.02] transition-transform duration-500"
            />
          </div>
        </header>

        {/* 2. Project Overview */}
        <section className="reveal grid grid-cols-1 md:grid-cols-12 gap-gutter items-start border-b border-outline/10 pb-16">
          <div className="md:col-span-4">
            <span className="font-mono-label text-mono-label text-outline uppercase tracking-widest">
              01 — Overview
            </span>
            <h2 className="font-headline-lg text-3xl md:text-4xl text-on-surface mt-2 font-bold">Tentang Proyek</h2>
          </div>
          <div className="md:col-span-8 flex flex-col gap-6 font-body-lg text-body-lg text-on-surface-variant">
            <p>
              <strong className="text-on-surface">Student Service Hub</strong> adalah konsep platform digital yang
              dirancang untuk membantu siswa mengakses berbagai layanan sekolah dalam satu tempat.
            </p>
            <p>
              Dalam kondisi layanan yang tersebar, siswa membutuhkan cara yang lebih sederhana untuk menemukan informasi,
              memahami prosedur, dan mengakses layanan yang mereka butuhkan.
            </p>
            <p>
              Melalui project ini, kami mengeksplorasi bagaimana sebuah platform digital dapat membuat pengalaman layanan
              siswa menjadi lebih terstruktur, mudah dipahami, dan nyaman digunakan.
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

          <blockquote className="font-headline-lg text-4xl md:text-6xl text-on-surface font-extrabold leading-tight border-l-4 border-[#1E88E5] pl-6 md:pl-10 my-4">
            &quot;Student services can be difficult to navigate.&quot;
          </blockquote>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-start">
            <div className="md:col-span-7 flex flex-col gap-6 text-body-lg text-on-surface-variant">
              <p>
                Berbagai kebutuhan siswa tidak selalu berada dalam satu alur yang jelas. Informasi dan layanan yang
                berbeda dapat membuat siswa harus mencari tahu sendiri:
              </p>
              <ul className="flex flex-col gap-3 font-medium text-on-surface pl-4 border-l border-outline/20">
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-[#1E88E5] text-sm">arrow_right</span> Layanan apa yang
                  mereka butuhkan
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-[#1E88E5] text-sm">arrow_right</span> Di mana
                  menemukan informasi tersebut
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-[#1E88E5] text-sm">arrow_right</span> Bagaimana
                  prosedurnya
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-[#1E88E5] text-sm">arrow_right</span> Apa langkah
                  selanjutnya yang harus dilakukan
                </li>
              </ul>
              <p>Masalah tersebut menjadi dasar untuk merancang pengalaman yang lebih sederhana dan terpusat.</p>
            </div>

            <div className="md:col-span-5 border-2 border-[#1E88E5]/40 bg-[#1E88E5]/5 p-8 flex flex-col gap-4">
              <span className="font-mono-label text-mono-label text-[#1E88E5] uppercase font-bold tracking-widest">
                Our Design Challenge
              </span>
              <p className="font-headline-md text-2xl text-on-surface font-semibold leading-snug">
                How might we create a digital platform that makes student services easier to discover, understand, and
                access?
              </p>
            </div>
          </div>
        </section>

        {/* 4. Goal */}
        <section className="reveal flex flex-col gap-12 border-b border-outline/10 pb-16">
          <div>
            <span className="font-mono-label text-mono-label text-outline uppercase tracking-widest">03 — Goal</span>
            <h2 className="font-headline-lg text-3xl md:text-4xl text-on-surface mt-2 font-bold">
              Tujuan Perancangan
            </h2>
            <p className="text-on-surface-variant text-lg mt-2">
              Tujuan utama project ini adalah membuat pengalaman layanan siswa yang:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="border border-outline/20 p-6 bg-surface flex flex-col gap-4 hover:border-[#1E88E5] transition-colors">
              <div className="w-10 h-10 rounded bg-[#1E88E5]/10 text-[#1E88E5] flex items-center justify-center font-bold">
                01
              </div>
              <h3 className="font-headline-md text-xl text-on-surface font-bold">Simple</h3>
              <p className="text-on-surface-variant text-sm">
                Menyederhanakan proses pencarian layanan bagi seluruh siswa.
              </p>
            </div>

            <div className="border border-outline/20 p-6 bg-surface flex flex-col gap-4 hover:border-[#1E88E5] transition-colors">
              <div className="w-10 h-10 rounded bg-[#1E88E5]/10 text-[#1E88E5] flex items-center justify-center font-bold">
                02
              </div>
              <h3 className="font-headline-md text-xl text-on-surface font-bold">Clear</h3>
              <p className="text-on-surface-variant text-sm">
                Menyajikan informasi dengan struktur yang mudah dipahami tanpa kebingungan.
              </p>
            </div>

            <div className="border border-outline/20 p-6 bg-surface flex flex-col gap-4 hover:border-[#1E88E5] transition-colors">
              <div className="w-10 h-10 rounded bg-[#1E88E5]/10 text-[#1E88E5] flex items-center justify-center font-bold">
                03
              </div>
              <h3 className="font-headline-md text-xl text-on-surface font-bold">Accessible</h3>
              <p className="text-on-surface-variant text-sm">
                Memudahkan siswa menemukan dan mengajukan layanan yang mereka perlukan.
              </p>
            </div>

            <div className="border border-outline/20 p-6 bg-surface flex flex-col gap-4 hover:border-[#1E88E5] transition-colors">
              <div className="w-10 h-10 rounded bg-[#1E88E5]/10 text-[#1E88E5] flex items-center justify-center font-bold">
                04
              </div>
              <h3 className="font-headline-md text-xl text-on-surface font-bold">Consistent</h3>
              <p className="text-on-surface-variant text-sm">
                Menggunakan pola interface yang konsisten di seluruh bagian platform.
              </p>
            </div>
          </div>
        </section>

        {/* 5. User Research */}
        <section className="reveal flex flex-col gap-12 border-b border-outline/10 pb-16">
          <div>
            <span className="font-mono-label text-mono-label text-outline uppercase tracking-widest">
              04 — Understanding the User
            </span>
            <h2 className="font-headline-lg text-3xl md:text-4xl text-on-surface mt-2 font-bold">
              Memahami Pengguna
            </h2>
          </div>

          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl">
            Sebelum masuk ke visual design, proses dimulai dengan memahami kebutuhan dan perjalanan pengguna. Kami
            melihat pengalaman siswa ketika melewati 5 fase krusial:
          </p>

          {/* Pipeline Visual */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 p-8 border border-outline/20 bg-surface">
            <div className="flex flex-col items-center text-center gap-2">
              <span className="w-10 h-10 rounded-full bg-on-surface text-on-secondary font-bold flex items-center justify-center text-sm">
                1
              </span>
              <span className="font-bold text-on-surface">Need</span>
              <span className="text-xs text-outline">Kebutuhan Layanan</span>
            </div>
            <span className="material-symbols-outlined text-outline hidden md:block">east</span>
            <div className="flex flex-col items-center text-center gap-2">
              <span className="w-10 h-10 rounded-full bg-on-surface text-on-secondary font-bold flex items-center justify-center text-sm">
                2
              </span>
              <span className="font-bold text-on-surface">Search</span>
              <span className="text-xs text-outline">Pencarian Info</span>
            </div>
            <span className="material-symbols-outlined text-outline hidden md:block">east</span>
            <div className="flex flex-col items-center text-center gap-2">
              <span className="w-10 h-10 rounded-full bg-on-surface text-on-secondary font-bold flex items-center justify-center text-sm">
                3
              </span>
              <span className="font-bold text-on-surface">Understand</span>
              <span className="text-xs text-outline">Memahami Prosedur</span>
            </div>
            <span className="material-symbols-outlined text-outline hidden md:block">east</span>
            <div className="flex flex-col items-center text-center gap-2">
              <span className="w-10 h-10 rounded-full bg-on-surface text-on-secondary font-bold flex items-center justify-center text-sm">
                4
              </span>
              <span className="font-bold text-on-surface">Access</span>
              <span className="text-xs text-outline">Akses Layanan</span>
            </div>
            <span className="material-symbols-outlined text-outline hidden md:block">east</span>
            <div className="flex flex-col items-center text-center gap-2">
              <span className="w-10 h-10 rounded-full bg-[#1E88E5] text-white font-bold flex items-center justify-center text-sm">
                5
              </span>
              <span className="font-bold text-[#1E88E5]">Complete</span>
              <span className="text-xs text-outline">Proses Selesai</span>
            </div>
          </div>

          <p className="text-on-surface-variant text-base">
            Dari proses tersebut, kami mencoba menemukan bagian-bagian yang berpotensi membuat pengalaman pengguna
            menjadi kurang efektif dan memperbaikinya secara menyeluruh.
          </p>
        </section>

        {/* 6. Customer Journey Map */}
        <section className="reveal flex flex-col gap-8 border-b border-outline/10 pb-16">
          <div>
            <span className="font-mono-label text-mono-label text-outline uppercase tracking-widest">
              05 — Customer Journey Map
            </span>
            <h2 className="font-headline-lg text-3xl md:text-4xl text-on-surface mt-2 font-bold">
              Peta Perjalanan Siswa (Customer Journey)
            </h2>
            <p className="text-on-surface-variant text-base mt-2">
              Customer Journey Map digunakan untuk memetakan pengalaman siswa ketika berinteraksi dengan layanan sekolah.
            </p>
          </div>

          <div className="w-full grid grid-cols-1 md:grid-cols-5 gap-4">
            <div className="border border-outline/20 p-6 bg-surface flex flex-col gap-3">
              <span className="font-mono-label text-xs text-[#1E88E5] font-bold">TAHAP 01</span>
              <h3 className="font-bold text-lg text-on-surface">01 — Need</h3>
              <p className="text-sm text-on-surface-variant">
                Siswa memiliki kebutuhan spesifik atau ingin menggunakan suatu layanan sekolah.
              </p>
            </div>

            <div className="border border-outline/20 p-6 bg-surface flex flex-col gap-3">
              <span className="font-mono-label text-xs text-[#1E88E5] font-bold">TAHAP 02</span>
              <h3 className="font-bold text-lg text-on-surface">02 — Search</h3>
              <p className="text-sm text-on-surface-variant">
                Siswa mencari informasi mengenai ketersediaan layanan dan lokasi pengajuannya.
              </p>
            </div>

            <div className="border border-outline/20 p-6 bg-surface flex flex-col gap-3">
              <span className="font-mono-label text-xs text-[#1E88E5] font-bold">TAHAP 03</span>
              <h3 className="font-bold text-lg text-on-surface">03 — Understand</h3>
              <p className="text-sm text-on-surface-variant">
                Siswa mempelajari dan memahami persyaratan dokumen serta alur prosedur.
              </p>
            </div>

            <div className="border border-outline/20 p-6 bg-surface flex flex-col gap-3">
              <span className="font-mono-label text-xs text-[#1E88E5] font-bold">TAHAP 04</span>
              <h3 className="font-bold text-lg text-on-surface">04 — Access</h3>
              <p className="text-sm text-on-surface-variant">
                Siswa mengakses dan mengisi formulir pengajuan layanan yang dibutuhkan.
              </p>
            </div>

            <div className="border border-outline/20 p-6 bg-surface flex flex-col gap-3 border-l-4 border-l-[#1E88E5]">
              <span className="font-mono-label text-xs text-[#1E88E5] font-bold">TAHAP 05</span>
              <h3 className="font-bold text-lg text-on-surface">05 — Complete</h3>
              <p className="text-sm text-on-surface-variant">
                Siswa mendapatkan status pemrosesan hingga penyelesaian pengajuan layanan.
              </p>
            </div>
          </div>

          <div className="p-6 bg-surface-container border border-outline/10 text-on-surface-variant text-sm">
            <strong className="text-on-surface">Insight Utama:</strong> Insight dari journey ini kemudian digunakan
            sebagai dasar untuk menentukan struktur halaman dan alur pengalaman platform.
          </div>
        </section>

        {/* 7. Information Architecture */}
        <section className="reveal flex flex-col gap-8 border-b border-outline/10 pb-16">
          <div>
            <span className="font-mono-label text-mono-label text-outline uppercase tracking-widest">
              06 — Information Architecture
            </span>
            <h2 className="font-headline-lg text-3xl md:text-4xl text-on-surface mt-2 font-bold">
              Arsitektur Informasi
            </h2>
            <p className="text-on-surface-variant text-base mt-2">
              Berdasarkan kebutuhan pengguna, informasi dalam platform disusun agar lebih mudah ditemukan.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-6 gap-4 p-8 border border-outline/20 bg-surface">
            <div className="border border-[#1E88E5]/30 p-4 rounded text-center bg-[#1E88E5]/5">
              <span className="material-symbols-outlined text-[#1E88E5] mb-2">dashboard</span>
              <h4 className="font-bold text-on-surface text-sm">Dashboard</h4>
              <span className="text-xs text-outline block mt-1">Ringkasan &amp; Status</span>
            </div>

            <div className="border border-[#1E88E5]/30 p-4 rounded text-center bg-[#1E88E5]/5">
              <span className="material-symbols-outlined text-[#1E88E5] mb-2">grid_view</span>
              <h4 className="font-bold text-on-surface text-sm">Services</h4>
              <span className="text-xs text-outline block mt-1">Katalog Layanan</span>
            </div>

            <div className="border border-[#1E88E5]/30 p-4 rounded text-center bg-[#1E88E5]/5">
              <span className="material-symbols-outlined text-[#1E88E5] mb-2">description</span>
              <h4 className="font-bold text-on-surface text-sm">Service Details</h4>
              <span className="text-xs text-outline block mt-1">Syarat &amp; Prosedur</span>
            </div>

            <div className="border border-[#1E88E5]/30 p-4 rounded text-center bg-[#1E88E5]/5">
              <span className="material-symbols-outlined text-[#1E88E5] mb-2">badge</span>
              <h4 className="font-bold text-on-surface text-sm">User Info</h4>
              <span className="text-xs text-outline block mt-1">Data Siswa</span>
            </div>

            <div className="border border-[#1E88E5]/30 p-4 rounded text-center bg-[#1E88E5]/5">
              <span className="material-symbols-outlined text-[#1E88E5] mb-2">notifications</span>
              <h4 className="font-bold text-on-surface text-sm">Notifications</h4>
              <span className="text-xs text-outline block mt-1">Update Status</span>
            </div>

            <div className="border border-[#1E88E5]/30 p-4 rounded text-center bg-[#1E88E5]/5">
              <span className="material-symbols-outlined text-[#1E88E5] mb-2">account_circle</span>
              <h4 className="font-bold text-on-surface text-sm">Profile</h4>
              <span className="text-xs text-outline block mt-1">Akun &amp; Riwayat</span>
            </div>
          </div>

          <p className="text-on-surface-variant text-base">
            Tujuannya adalah mengurangi langkah yang tidak diperlukan dan membuat pengguna dapat memahami posisi mereka
            di dalam platform setiap saat.
          </p>
        </section>

        {/* 8. User Flow */}
        <section className="reveal flex flex-col gap-8 border-b border-outline/10 pb-16">
          <div>
            <span className="font-mono-label text-mono-label text-outline uppercase tracking-widest">
              07 — User Flow
            </span>
            <h2 className="font-headline-lg text-3xl md:text-4xl text-on-surface mt-2 font-bold">
              Alur Pengguna (User Flow)
            </h2>
            <p className="text-on-surface-variant text-base mt-2">
              User flow dibuat untuk menggambarkan bagaimana siswa berpindah dari satu tahap ke tahap berikutnya secara
              seamless.
            </p>
          </div>

          <div className="w-full p-8 border border-outline/20 bg-surface flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="px-6 py-4 border border-outline/30 bg-background rounded font-bold text-on-surface text-center w-full md:w-auto">
              Dashboard
            </div>
            <span className="material-symbols-outlined text-[#1E88E5] hidden md:block">arrow_forward</span>
            <div className="px-6 py-4 border border-outline/30 bg-background rounded font-bold text-on-surface text-center w-full md:w-auto">
              Services
            </div>
            <span className="material-symbols-outlined text-[#1E88E5] hidden md:block">arrow_forward</span>
            <div className="px-6 py-4 border border-outline/30 bg-background rounded font-bold text-on-surface text-center w-full md:w-auto">
              Select Service
            </div>
            <span className="material-symbols-outlined text-[#1E88E5] hidden md:block">arrow_forward</span>
            <div className="px-6 py-4 border border-outline/30 bg-background rounded font-bold text-on-surface text-center w-full md:w-auto">
              Service Details
            </div>
            <span className="material-symbols-outlined text-[#1E88E5] hidden md:block">arrow_forward</span>
            <div className="px-6 py-4 border-2 border-[#1E88E5] bg-[#1E88E5]/10 rounded font-bold text-[#1E88E5] text-center w-full md:w-auto">
              Submit / Access Service
            </div>
          </div>

          <p className="text-on-surface-variant text-base">
            Dengan membuat user flow terlebih dahulu, desain interface dapat dibuat berdasarkan kebutuhan dan alur
            pengguna, bukan hanya sekadar estetika visual semata.
          </p>
        </section>

        {/* 9. Wireframe */}
        <section className="reveal flex flex-col gap-8 border-b border-outline/10 pb-16">
          <div>
            <span className="font-mono-label text-mono-label text-outline uppercase tracking-widest">
              08 — Wireframe
            </span>
            <h2 className="font-headline-lg text-3xl md:text-4xl text-on-surface mt-2 font-bold">
              Struktur Wireframe
            </h2>
            <p className="text-on-surface-variant text-base mt-2">
              Setelah struktur dan user flow ditentukan, tahap berikutnya adalah membuat wireframe low-fidelity.
            </p>
          </div>

          <div className="border border-outline/20 p-8 md:p-12 bg-surface/50 flex justify-center items-center">
            <Image
              src="/image/ssh_mobile_wireframe.png"
              alt="Wireframe Layout Student Service Hub Mobile"
              width={400}
              height={800}
              className="max-w-sm md:max-w-md w-full h-auto drop-shadow-2xl object-contain"
            />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-2">
            <div className="p-4 border border-outline/20 bg-surface text-center">
              <span className="font-bold text-on-surface block text-sm mb-1">Hierarchy Informasi</span>
              <span className="text-xs text-on-surface-variant">Urutan prioritas konten</span>
            </div>
            <div className="p-4 border border-outline/20 bg-surface text-center">
              <span className="font-bold text-on-surface block text-sm mb-1">Posisi Navigasi</span>
              <span className="text-xs text-on-surface-variant">Kemudahan perpindahan</span>
            </div>
            <div className="p-4 border border-outline/20 bg-surface text-center">
              <span className="font-bold text-on-surface block text-sm mb-1">Struktur Halaman</span>
              <span className="text-xs text-on-surface-variant">Tata letak komponen</span>
            </div>
            <div className="p-4 border border-outline/20 bg-surface text-center">
              <span className="font-bold text-on-surface block text-sm mb-1">Penempatan CTA</span>
              <span className="text-xs text-on-surface-variant">Titik interaksi utama</span>
            </div>
            <div className="p-4 border border-outline/20 bg-surface text-center col-span-2 md:col-span-1">
              <span className="font-bold text-on-surface block text-sm mb-1">Hubungan Halaman</span>
              <span className="text-xs text-on-surface-variant">Keterhubungan layar</span>
            </div>
          </div>

          <p className="text-on-surface-variant text-base">
            Pada tahap ini, fokus utama bukan visual, tetapi bagaimana pengguna dapat menyelesaikan tugas (task) dengan
            efisien.
          </p>
        </section>

        {/* 10. Design System */}
        <section className="reveal flex flex-col gap-12 border-b border-outline/10 pb-16">
          <div>
            <span className="font-mono-label text-mono-label text-outline uppercase tracking-widest">
              09 — Design System
            </span>
            <h2 className="font-headline-lg text-3xl md:text-4xl text-on-surface mt-2 font-bold">
              Design System Showcase
            </h2>
            <p className="text-on-surface-variant text-base mt-2">
              Untuk menjaga konsistensi interface, dibuat sebuah design system yang menjadi dasar visual Student Service
              Hub.
            </p>
          </div>

          {/* Color Palette */}
          <div className="flex flex-col gap-4">
            <h3 className="font-headline-md text-xl font-bold text-on-surface">Color Palette</h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              <div className="border border-outline/20 p-4 bg-surface flex flex-col gap-2">
                <div className="h-16 w-full rounded bg-[#1E88E5]"></div>
                <span className="font-bold text-sm text-on-surface">Primary</span>
                <span className="font-mono-label text-xs text-outline">#1E88E5</span>
              </div>
              <div className="border border-outline/20 p-4 bg-surface flex flex-col gap-2">
                <div className="h-16 w-full rounded bg-[#90CAF9]"></div>
                <span className="font-bold text-sm text-on-surface">Secondary</span>
                <span className="font-mono-label text-xs text-outline">#90CAF9</span>
              </div>
              <div className="border border-outline/20 p-4 bg-surface flex flex-col gap-2">
                <div className="h-16 w-full rounded bg-[#4CAF50]"></div>
                <span className="font-bold text-sm text-on-surface">Success</span>
                <span className="font-mono-label text-xs text-outline">#4CAF50</span>
              </div>
              <div className="border border-outline/20 p-4 bg-surface flex flex-col gap-2">
                <div className="h-16 w-full rounded bg-[#FB8C00]"></div>
                <span className="font-bold text-sm text-on-surface">Warning</span>
                <span className="font-mono-label text-xs text-outline">#FB8C00</span>
              </div>
              <div className="border border-outline/20 p-4 bg-surface flex flex-col gap-2 col-span-2 md:col-span-1">
                <div className="h-16 w-full rounded bg-[#E53935]"></div>
                <span className="font-bold text-sm text-on-surface">Error</span>
                <span className="font-mono-label text-xs text-outline">#E53935</span>
              </div>
            </div>
          </div>

          {/* Typography */}
          <div className="flex flex-col gap-4">
            <h3 className="font-headline-md text-xl font-bold text-on-surface">Typography</h3>
            <div className="p-6 border border-outline/20 bg-surface flex flex-col gap-4">
              <p className="text-xs text-outline uppercase font-mono-label">
                Clean &amp; Readable Typography Scale (Inter &amp; Manrope)
              </p>
              <div className="flex flex-col gap-2 border-l-2 border-[#1E88E5] pl-4">
                <span className="font-display-xl text-3xl font-extrabold text-on-surface">
                  Heading 1 — Display Hero
                </span>
                <span className="font-headline-md text-xl font-bold text-on-surface">
                  Heading 2 — Section Header
                </span>
                <span className="font-body-md text-base text-on-surface-variant">
                  Body Text — Informasi detail dan instruksi layanan yang nyaman dibaca oleh siswa.
                </span>
                <span className="font-label-caps text-xs uppercase tracking-wider font-semibold text-[#1E88E5]">
                  Label &amp; CTA Caps — Tombol Aksi
                </span>
              </div>
            </div>
          </div>

          {/* UI Components */}
          <div className="flex flex-col gap-4">
            <h3 className="font-headline-md text-xl font-bold text-on-surface">UI Components Library</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="p-4 border border-outline/20 bg-surface text-center font-semibold text-on-surface text-sm">
                Button Component
              </div>
              <div className="p-4 border border-outline/20 bg-surface text-center font-semibold text-on-surface text-sm">
                Input Field
              </div>
              <div className="p-4 border border-outline/20 bg-surface text-center font-semibold text-on-surface text-sm">
                Service Card
              </div>
              <div className="p-4 border border-outline/20 bg-surface text-center font-semibold text-on-surface text-sm">
                Navigation Component
              </div>
              <div className="p-4 border border-outline/20 bg-surface text-center font-semibold text-on-surface text-sm">
                Status Indicator
              </div>
              <div className="p-4 border border-outline/20 bg-surface text-center font-semibold text-on-surface text-sm">
                Form Layout
              </div>
              <div className="p-4 border border-outline/20 bg-surface text-center font-semibold text-on-surface text-sm">
                Information Card
              </div>
              <div className="p-4 border border-outline/20 bg-surface text-center font-semibold text-on-surface text-sm">
                Notification Badge
              </div>
            </div>
          </div>
        </section>

        {/* 11. Final Design */}
        <section className="reveal flex flex-col gap-12 border-b border-outline/10 pb-16">
          <div>
            <span className="font-mono-label text-mono-label text-[#1E88E5] uppercase tracking-widest border border-[#1E88E5]/20 bg-[#1E88E5]/5 px-3 py-1 w-max">
              10 &amp; 11 — High-Fidelity &amp; Final Design
            </span>
            <h2 className="font-headline-lg text-4xl md:text-5xl text-on-surface mt-4 font-extrabold leading-tight">
              A more structured student service experience.
            </h2>
            <p className="text-on-surface-variant text-lg mt-4 max-w-3xl">
              Final interface Student Service Hub menggabungkan hasil research, customer journey, user flow, wireframe, dan
              design system menjadi satu pengalaman digital yang lebih terstruktur.
            </p>
          </div>

          <div className="w-full flex flex-col gap-6">
            <div className="w-full border border-outline/20 p-8 md:p-16 bg-surface flex justify-center items-center">
              <Image
                src="/image/ssh_mobile_ui.png"
                alt="Final High-Fidelity UI Student Service Hub Mobile"
                width={400}
                height={800}
                className="max-w-sm md:max-w-md w-full h-auto drop-shadow-2xl object-contain hover:scale-[1.02] transition-transform duration-500"
              />
            </div>
            <p className="font-headline-md text-xl md:text-2xl text-center text-on-surface font-semibold italic border-l-4 border-r-4 border-[#1E88E5]/40 py-3 px-6 bg-surface">
              &quot;From research to interface — every screen was designed around the user&apos;s journey.&quot;
            </p>
          </div>
        </section>

        {/* 12. My Contribution */}
        <section className="reveal flex flex-col gap-8 border-b border-outline/10 pb-16">
          <div>
            <span className="font-mono-label text-mono-label text-outline uppercase tracking-widest">
              12 — My Contribution
            </span>
            <h2 className="font-headline-lg text-3xl md:text-4xl text-on-surface mt-2 font-bold">
              My role in the project
            </h2>
          </div>

          <p className="font-body-lg text-body-lg text-on-surface-variant">
            Dalam project Student Service Hub, saya berkontribusi pada proses UI/UX dan pengembangan interface secara
            menyeluruh.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-center gap-3 p-4 border border-outline/20 bg-surface">
              <span className="material-symbols-outlined text-[#1E88E5]">check_circle</span>
              <span className="text-on-surface font-medium">Memahami kebutuhan pengguna</span>
            </div>
            <div className="flex items-center gap-3 p-4 border border-outline/20 bg-surface">
              <span className="material-symbols-outlined text-[#1E88E5]">check_circle</span>
              <span className="text-on-surface font-medium">Menyusun user flow</span>
            </div>
            <div className="flex items-center gap-3 p-4 border border-outline/20 bg-surface">
              <span className="material-symbols-outlined text-[#1E88E5]">check_circle</span>
              <span className="text-on-surface font-medium">Membuat wireframe</span>
            </div>
            <div className="flex items-center gap-3 p-4 border border-outline/20 bg-surface">
              <span className="material-symbols-outlined text-[#1E88E5]">check_circle</span>
              <span className="text-on-surface font-medium">Merancang interface</span>
            </div>
            <div className="flex items-center gap-3 p-4 border border-outline/20 bg-surface">
              <span className="material-symbols-outlined text-[#1E88E5]">check_circle</span>
              <span className="text-on-surface font-medium">Menyusun design system</span>
            </div>
            <div className="flex items-center gap-3 p-4 border border-outline/20 bg-surface">
              <span className="material-symbols-outlined text-[#1E88E5]">check_circle</span>
              <span className="text-on-surface font-medium">Mengembangkan high-fidelity design</span>
            </div>
            <div className="flex items-center gap-3 p-4 border border-outline/20 bg-surface col-span-1 md:col-span-2">
              <span className="material-symbols-outlined text-[#1E88E5]">check_circle</span>
              <span className="text-on-surface font-medium">Memastikan konsistensi visual antar halaman</span>
            </div>
          </div>
        </section>

        {/* 13. What I Learned */}
        <section className="reveal flex flex-col gap-8 border-b border-outline/10 pb-16">
          <div>
            <span className="font-mono-label text-mono-label text-outline uppercase tracking-widest">
              13 — What I Learned
            </span>
            <h2 className="font-headline-lg text-3xl md:text-4xl text-on-surface mt-2 font-bold">
              Pembelajaran Utama
            </h2>
          </div>

          <blockquote className="font-headline-lg text-3xl md:text-4xl text-on-surface font-extrabold leading-snug border-l-4 border-[#1E88E5] pl-6">
            &quot;Designing is more than making things look good.&quot;
          </blockquote>

          <div className="flex flex-col gap-6 text-body-lg text-on-surface-variant max-w-4xl">
            <p>
              Project ini membuat saya memahami bahwa proses UI/UX tidak berhenti pada membuat interface yang terlihat
              menarik semata.
            </p>
            <p>
              Desain yang baik harus dimulai dari memahami masalah dan kebutuhan pengguna, kemudian diterjemahkan
              menjadi struktur, alur, dan interface yang dapat digunakan dengan mudah.
            </p>
            <p className="font-semibold text-on-surface">
              Saya belajar bahwa setiap keputusan visual sebaiknya memiliki alasan yang jelas dan mendukung pengalaman
              pengguna secara nyata.
            </p>
          </div>
        </section>

        {/* 14. Reflection */}
        <section className="reveal flex flex-col gap-8 border-b border-outline/10 pb-16">
          <div>
            <span className="font-mono-label text-mono-label text-outline uppercase tracking-widest">
              14 — Reflection
            </span>
            <h2 className="font-headline-lg text-3xl md:text-4xl text-on-surface mt-2 font-bold">Refleksi Akhir</h2>
          </div>

          <h3 className="font-headline-md text-2xl font-bold text-[#1E88E5]">From problem to experience.</h3>

          <div className="flex flex-col gap-6 text-body-lg text-on-surface-variant max-w-4xl">
            <p>
              Student Service Hub menjadi salah satu project yang membantu saya memahami proses UI/UX secara lebih
              menyeluruh. Mulai dari memahami masalah, memetakan perjalanan pengguna, membuat struktur dan wireframe,
              hingga menerjemahkannya menjadi high-fidelity interface.
            </p>
            <p>
              Project ini memperkuat ketertarikan saya pada UI/UX Research dan Interface Design, sekaligus bagaimana
              desain tersebut dapat diterapkan ke produk digital yang nyata.
            </p>
          </div>
        </section>

        {/* Next Project Navigation */}
        <footer className="reveal flex flex-col sm:flex-row justify-between items-center gap-6 pt-8">
          <Link
            href="/#works"
            className="px-8 py-4 border border-on-surface text-on-surface text-label-caps font-label-caps uppercase tracking-wider hover:bg-on-surface hover:text-on-secondary transition-colors flex items-center gap-2"
          >
            <span className="material-symbols-outlined text-sm">arrow_back</span> Kembali ke Portofolio
          </Link>
          <Link
            href="/smart-umkm"
            className="px-8 py-4 bg-[#1E88E5] text-white text-label-caps font-label-caps uppercase tracking-wider hover:bg-primary-container hover:text-on-surface transition-colors flex items-center gap-2"
          >
            Proyek Selanjutnya: SmartUMKM <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </Link>
        </footer>
      </main>
    </>
  );
}
