import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="max-w-container-max mx-auto px-gutter relative">
        {/* Background Grid Lines */}
        <div className="absolute inset-0 pointer-events-none hidden md:grid grid-cols-12 gap-gutter px-gutter">
          <div className="col-span-1 grid-guide h-full"></div>
          <div className="col-span-1 grid-guide h-full"></div>
          <div className="col-span-1 grid-guide h-full"></div>
          <div className="col-span-1 grid-guide h-full"></div>
          <div className="col-span-1 grid-guide h-full"></div>
          <div className="col-span-1 grid-guide h-full"></div>
          <div className="col-span-1 grid-guide h-full"></div>
          <div className="col-span-1 grid-guide h-full"></div>
          <div className="col-span-1 grid-guide h-full"></div>
          <div className="col-span-1 grid-guide h-full"></div>
          <div className="col-span-1 grid-guide h-full"></div>
          <div className="col-span-1 grid-guide h-full border-r border-outline/10"></div>
        </div>

        {/* 1. Hero Section */}
        <section className="reveal relative pt-20 md:pt-32 pb-24 md:pb-36 grid grid-cols-1 md:grid-cols-12 gap-gutter items-center grid-guide-b">
          <div className="md:col-span-7 flex flex-col items-start gap-8 z-10">
            <span className="font-mono-label text-mono-label text-outline uppercase tracking-widest border border-outline/20 px-3 py-1">
              Portofolio 2026
            </span>
            <h1 className="font-display-xl text-5xl sm:text-6xl md:text-display-xl text-on-surface leading-none tracking-tighter">
              Merancang pengalaman digital.<br />
              <span className="text-outline">Membangun antarmuka yang efisien.</span>
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">
              UI/UX Researcher &amp; Frontend Developer yang berfokus menciptakan pengalaman digital yang intuitif, jelas,
              dan mudah digunakan. Menggabungkan riset mendalam dengan presisi teknis.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-4 w-full sm:w-auto">
              <Link
                className="px-8 py-4 bg-on-surface text-on-secondary text-label-caps font-label-caps uppercase tracking-wider hover:bg-primary-container hover:text-on-surface transition-colors flex items-center justify-center text-center"
                href="#works"
              >
                Lihat Karya Saya
              </Link>
              <Link
                className="px-8 py-4 border border-on-surface text-on-surface text-label-caps font-label-caps uppercase tracking-wider hover:bg-on-surface hover:text-on-secondary transition-colors flex items-center justify-center text-center"
                href="#contact"
              >
                Hubungi Saya
              </Link>
            </div>
          </div>
          <div className="md:col-span-5 relative mt-12 md:mt-0 z-10 flex justify-center">
            <div className="aspect-[3/4] w-full max-w-md relative border border-outline/20 bg-surface p-2">
              <div className="relative w-full h-full overflow-hidden">
                <Image
                  className="w-full h-full object-cover hover:scale-[1.02] transition-all duration-500"
                  alt="Foto Alghazaly Ibhram Santoso"
                  src="/image/profile.jpg"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 40vw"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-primary-container border border-outline/10 mix-blend-multiply pointer-events-none"></div>
            </div>
          </div>
        </section>

        {/* 2. About Section */}
        <section className="reveal py-20 md:py-32 grid grid-cols-1 md:grid-cols-12 gap-gutter grid-guide-b" id="about">
          <div className="md:col-span-4 flex flex-col gap-12">
            <h2 className="font-headline-lg text-4xl md:text-headline-lg text-on-surface leading-tight">
              Merancang<br />dengan tujuan.
            </h2>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <span className="font-mono-label text-mono-label text-on-surface w-8">01</span>
                <span className="border border-outline/20 px-4 py-2 font-label-caps text-label-caps uppercase text-on-surface">
                  Desain UI/UX
                </span>
              </div>
              <div className="flex items-center gap-4">
                <span className="font-mono-label text-mono-label text-on-surface w-8">02</span>
                <span className="border border-outline/20 px-4 py-2 font-label-caps text-label-caps uppercase text-on-surface">
                  Riset
                </span>
              </div>
              <div className="flex items-center gap-4">
                <span className="font-mono-label text-mono-label text-on-surface w-8">03</span>
                <span className="border border-outline/20 px-4 py-2 font-label-caps text-label-caps uppercase text-on-surface">
                  Frontend
                </span>
              </div>
            </div>
          </div>
          <div className="md:col-span-7 md:col-start-6 flex flex-col justify-center">
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-6">
              Saya percaya bahwa desain terbaik adalah desain yang terasa alami dan intuitif. Hasil dari riset mendalam,
              pemecahan masalah dengan empati, serta eksekusi yang presisi. Pendekatan saya berfokus pada memahami struktur
              antarmuka secara mendalam sebelum menerapkan lapisan visual.
            </p>
            <p className="font-body-lg text-body-lg text-on-surface-variant">
              Baik saat memetakan alur pengguna maupun merancang arsitektur kode frontend yang bersih, tujuannya tetap sama:
              membangun produk digital yang mempermudah pengguna.
            </p>
          </div>
        </section>

        {/* 3. Selected Works */}
        <section className="py-20 md:py-32" id="works">
          <div className="reveal mb-16 md:mb-24">
            <h2 className="font-headline-lg text-4xl md:text-headline-lg text-on-surface">Karya Pilihan</h2>
            <p className="font-mono-label text-mono-label text-outline mt-2 uppercase tracking-widest">
              Studi Kasus &amp; Proyek
            </p>
          </div>
          <div className="flex flex-col gap-24 md:gap-32">
            {/* Project 01: Student Service Hub */}
            <div className="reveal grid grid-cols-1 md:grid-cols-12 gap-gutter items-center">
              <div className="md:col-span-7 order-2 md:order-1 flex justify-center items-center py-6">
                <div className="max-w-xs md:max-w-sm w-full">
                  <Image
                    className="w-full h-auto drop-shadow-2xl object-contain hover:scale-[1.02] transition-transform duration-500"
                    alt="Tampilan antarmuka mobile Student Service Hub"
                    src="/image/ssh_mobile_ui.png"
                    width={400}
                    height={800}
                  />
                </div>
              </div>
              <div className="md:col-span-4 md:col-start-9 order-1 md:order-2 flex flex-col items-start mb-8 md:mb-0">
                <span className="font-mono-label text-mono-label text-outline mb-4 border-b border-outline/20 pb-2 w-full">
                  01 — Desain UI/UX
                </span>
                <h3 className="font-headline-md text-headline-md text-on-surface mb-4">Student Service Hub</h3>
                <p className="font-body-md text-body-md text-on-surface-variant mb-8">
                  Merancang ulang pengalaman administrasi akademik agar lebih cepat dan jelas. Berfokus pada riset
                  pengguna yang mendalam dan arsitektur informasi yang intuitif.
                </p>
                <Link
                  className="inline-flex items-center gap-2 text-on-surface font-label-caps text-label-caps uppercase hover:text-primary transition-colors border-b border-on-surface pb-1"
                  href="/student-service-hub"
                >
                  Baca Studi Kasus <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </Link>
              </div>
            </div>

            {/* Project 02: SmartUMKM */}
            <div className="reveal grid grid-cols-1 md:grid-cols-12 gap-gutter items-center">
              <div className="md:col-span-4 flex flex-col items-start mb-8 md:mb-0">
                <span className="font-mono-label text-mono-label text-outline mb-4 border-b border-outline/20 pb-2 w-full">
                  02 — UI/UX &amp; Frontend
                </span>
                <h3 className="font-headline-md text-headline-md text-on-surface mb-4">SmartUMKM</h3>
                <p className="font-body-md text-body-md text-on-surface-variant mb-8">
                  Platform komprehensif yang menghubungkan pelaku UMKM dengan perangkat digital. Membangun arsitektur
                  frontend responsif dengan pola desain yang ramah pengguna.
                </p>
                <Link
                  className="inline-flex items-center gap-2 text-on-surface font-label-caps text-label-caps uppercase hover:text-primary transition-colors border-b border-on-surface pb-1"
                  href="/smart-umkm"
                >
                  Lihat Proyek <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </Link>
              </div>
              <div className="md:col-span-7 md:col-start-6">
                <div className="border border-outline/20 p-2 bg-surface">
                  <Image
                    className="w-full h-auto object-contain rounded hover:scale-[1.01] transition-transform duration-500"
                    alt="Antarmuka platform SmartUMKM"
                    src="/image/smart_umkm_final.png"
                    width={1000}
                    height={600}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Let's Talk Section */}
        <section className="reveal py-20 md:py-32 grid grid-cols-1 md:grid-cols-12 gap-gutter grid-guide-b" id="contact">
          <div className="md:col-span-5 flex flex-col gap-6">
            <span className="font-mono-label text-mono-label text-outline uppercase tracking-widest border border-outline/20 px-3 py-1 w-max">
              Kontak
            </span>
            <h2 className="font-headline-lg text-4xl md:text-headline-lg text-on-surface leading-tight">
              Hubungi Saya.
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-md">
              Punya ide proyek, pertanyaan, atau ingin berdiskusi? Silakan hubungi saya melalui telepon atau email.
            </p>
          </div>
          <div className="md:col-span-7 md:col-start-6 flex flex-col justify-center gap-6 mt-8 md:mt-0">
            {/* Phone Card */}
            <a
              href="tel:08113086130"
              className="group border border-outline/20 p-6 bg-surface hover:border-primary transition-all duration-300 flex items-center justify-between"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary-container/50 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-on-primary transition-colors">
                  <span className="material-symbols-outlined">call</span>
                </div>
                <div>
                  <span className="font-mono-label text-mono-label text-outline block uppercase tracking-wider mb-1">
                    Telepon / WhatsApp
                  </span>
                  <span className="font-headline-md text-xl md:text-2xl text-on-surface font-semibold group-hover:text-primary transition-colors">
                    08113086130
                  </span>
                </div>
              </div>
              <span className="material-symbols-outlined text-outline group-hover:text-primary group-hover:translate-x-1 transition-all">
                arrow_forward
              </span>
            </a>

            {/* Email Card */}
            <a
              href="mailto:alghazalyibhram@gmail.com"
              className="group border border-outline/20 p-6 bg-surface hover:border-primary transition-all duration-300 flex items-center justify-between"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary-container/50 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-on-primary transition-colors">
                  <span className="material-symbols-outlined">mail</span>
                </div>
                <div>
                  <span className="font-mono-label text-mono-label text-outline block uppercase tracking-wider mb-1">
                    Email
                  </span>
                  <span className="font-headline-md text-xl md:text-2xl text-on-surface font-semibold group-hover:text-primary transition-colors">
                    alghazalyibhram@gmail.com
                  </span>
                </div>
              </div>
              <span className="material-symbols-outlined text-outline group-hover:text-primary group-hover:translate-x-1 transition-all">
                arrow_forward
              </span>
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
