"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#servicios", label: "Servicios" },
    { href: "#proceso", label: "Proceso" },
    { href: "#equipo", label: "Equipo" },
    { href: "#planes", label: "Planes" },
    { href: "#blog", label: "Blog" },
  ];

  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        const offset = 80;
        const top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: "smooth" });
      }
      setMenuOpen(false);
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-mgm-navy-dark/90 backdrop-blur-md border-b border-white/5 shadow-lg" : ""}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 text-xl font-bold tracking-tight">
            <span className="text-white font-anton text-2xl">MGM<span className="text-mgm-yellow">.</span></span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} onClick={(e) => handleAnchorClick(e, link.href)}
                className="text-sm font-medium text-gray-300 hover:text-mgm-yellow transition-colors duration-200">
                {link.label}
              </a>
            ))}
            <a href="#contacto" onClick={(e) => handleAnchorClick(e, "#contacto")}
              className="bg-mgm-yellow text-mgm-navy-dark text-sm font-bold px-5 py-2.5 rounded-lg hover:bg-yellow-300 transition-colors duration-200">
              Diagnóstico Gratuito
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button onClick={() => setMenuOpen(!menuOpen)} className="lg:hidden w-10 h-10 flex flex-col justify-center items-center gap-1.5 z-50"
            aria-label="Toggle menu">
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden fixed inset-0 bg-mgm-navy-dark z-40 transition-all duration-300 ${menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}>
        <div className="flex flex-col items-center justify-center h-full gap-8">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={(e) => handleAnchorClick(e, link.href)}
              className="text-2xl font-bold text-white hover:text-mgm-yellow transition-colors">
              {link.label}
            </a>
          ))}
          <a href="#contacto" onClick={(e) => handleAnchorClick(e, "#contacto")}
            className="bg-mgm-yellow text-mgm-navy-dark font-bold px-8 py-3 rounded-lg text-lg mt-4">
            Diagnóstico Gratuito
          </a>
        </div>
      </div>
    </nav>
  );
}
