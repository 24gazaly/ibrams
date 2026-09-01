import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full px-gutter py-16 md:py-24 flex flex-col md:flex-row justify-between items-start gap-8 border-t border-outline/10 bg-surface">
      <div className="flex flex-col gap-4">
        <span className="text-label-caps font-label-caps text-on-surface uppercase tracking-widest font-semibold">
          Alghazaly Ibhram Santoso
        </span>
        <p className="text-on-surface-variant text-sm mt-2">
          © {new Date().getFullYear()} Alghazaly Ibhram Santoso. Hak cipta dilindungi.
        </p>
      </div>
      <div className="flex flex-col md:flex-row gap-8 md:gap-16">
        <div className="flex flex-col gap-2">
          <span className="font-mono-label text-mono-label text-outline mb-2">Kontak</span>
          <a
            href="tel:08113086130"
            className="text-on-surface-variant hover:text-primary transition-colors text-sm flex items-center gap-1"
          >
            <span className="material-symbols-outlined text-xs">call</span> 08113086130
          </a>
          <a
            href="mailto:alghazalyibhram@gmail.com"
            className="text-on-surface-variant hover:text-primary transition-colors text-sm flex items-center gap-1"
          >
            <span className="material-symbols-outlined text-xs">mail</span> alghazalyibhram@gmail.com
          </a>
        </div>
        <div className="flex flex-col gap-2">
          <span className="font-mono-label text-mono-label text-outline mb-2">Peran</span>
          <span className="text-on-surface-variant hover:text-primary transition-colors text-sm">UI/UX Researcher</span>
          <span className="text-on-surface-variant hover:text-primary transition-colors text-sm">Frontend Developer</span>
        </div>
        <div className="flex flex-col gap-2">
          <span className="font-mono-label text-mono-label text-outline mb-2">Pendidikan</span>
          <span className="text-on-surface-variant hover:text-primary transition-colors text-sm">
            SMK Telkom Sidoarjo — SIJA
          </span>
        </div>
      </div>
    </footer>
  );
}
