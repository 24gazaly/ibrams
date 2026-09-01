"use client";

import { useState } from "react";
import Link from "next/link";

interface NavbarProps {
  isCaseStudy?: boolean;
  backHref?: string;
  backLabel?: string;
  categoryLabel?: string;
}

export default function Navbar({
  isCaseStudy = false,
  backHref = "/#works",
  backLabel = "Kembali ke Portofolio",
  categoryLabel = "Case Study",
}: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  if (isCaseStudy) {
    return (
      <nav className="sticky top-0 z-50 flex justify-between items-center w-full px-gutter py-4 bg-surface/90 backdrop-blur-md border-b border-outline/10">
        <Link
          className="inline-flex items-center gap-2 text-on-surface font-label-caps text-label-caps uppercase hover:text-primary transition-colors"
          href={backHref}
        >
          <span className="material-symbols-outlined text-sm">arrow_back</span> {backLabel}
        </Link>
        <span className="font-mono-label text-mono-label text-outline uppercase tracking-wider hidden md:inline-block">
          {categoryLabel}
        </span>
      </nav>
    );
  }

  return (
    <>
      <nav className="sticky top-0 z-50 flex justify-between items-center w-full px-gutter py-4 bg-surface/80 backdrop-blur-md border-b border-outline/10">
        <Link
          className="text-body-lg font-headline-md font-bold tracking-tight text-on-surface hover:text-primary transition-colors"
          href="/"
        >
          Alghazaly Ibhram Santoso
        </Link>
        <div className="hidden md:flex gap-8 items-center">
          <Link
            className="text-on-surface-variant hover:text-primary transition-colors text-label-caps font-label-caps uppercase"
            href="#works"
          >
            Karya
          </Link>
          <Link
            className="text-on-surface-variant hover:text-primary transition-colors text-label-caps font-label-caps uppercase"
            href="#about"
          >
            Tentang
          </Link>
        </div>
        <Link
          className="hidden md:inline-flex px-6 py-3 bg-on-surface text-on-secondary text-label-caps font-label-caps uppercase tracking-wider hover:bg-primary-container hover:text-on-surface transition-colors items-center justify-center"
          href="#contact"
        >
          Hubungi Saya
        </Link>
        <button
          id="mobile-menu-btn"
          className="md:hidden text-on-surface p-1"
          aria-label="Buka menu"
          aria-expanded={mobileMenuOpen}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span className="material-symbols-outlined" id="mobile-menu-icon">
            {mobileMenuOpen ? "close" : "menu"}
          </span>
        </button>
      </nav>

      {/* Mobile menu panel */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu"
          className="flex md:hidden flex-col gap-4 px-gutter py-6 bg-surface border-b border-outline/10 animate-fadeIn"
        >
          <Link
            className="text-on-surface-variant hover:text-primary transition-colors text-label-caps font-label-caps uppercase"
            href="#works"
            onClick={() => setMobileMenuOpen(false)}
          >
            Karya
          </Link>
          <Link
            className="text-on-surface-variant hover:text-primary transition-colors text-label-caps font-label-caps uppercase"
            href="#about"
            onClick={() => setMobileMenuOpen(false)}
          >
            Tentang
          </Link>
          <Link
            className="inline-flex justify-center px-6 py-3 bg-on-surface text-on-secondary text-label-caps font-label-caps uppercase tracking-wider"
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
          >
            Hubungi Saya
          </Link>
        </div>
      )}
    </>
  );
}
