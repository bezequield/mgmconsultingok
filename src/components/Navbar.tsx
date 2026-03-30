"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { SECTORES } from "@/lib/sectores";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [sectoresOpen, setSectoresOpen] = useState(false);
  const [activeSector, setActiveSector] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Read active sector from localStorage
    const saved = localStorage.getItem("mgm_sector");
    setActiveSector(saved);
  }, [pathname]);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setSectoresOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const isOnSectorPage = pathname?.startsWith("/sectores/");

  // On sector pages, anchor links should scroll within the page
  // On general/other pages, use hash anchors directly
  const navLinks = [
    { href: "#servicios", label: "Servicios" },
    { href: "#proceso", label: "Proceso" },
    { href: "#equipo", label: "Equipo" },
    { href: "#planes", label: "Planes" },
    { href: "#blog", label: "Blog" },
  ];

  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        const offset = 80;
        const top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: "smooth" });
        setMenuOpen(false);
      } else {
        // Anchor not found on current page → go to general page with anchor
        e.preventDefault();
        router.push(`/general${href}`);
        setMenuOpen(false);
      }
    }
  };

  function handleSectorSelect(slug: string) {
    localStorage.setItem("mgm_sector", slug);
    setActiveSector(slug);
    setSectoresOpen(false);
    setMenuOpen(false);
    router.push(`/sectores/${slug}`);
  }

  function handleChangeSector() {
    localStorage.removeItem("mgm_sector");
    setActiveSector(null);
    setSectoresOpen(false);
    setMenuOpen(false);
    router.push("/");
  }

  const currentSector = activeSector ? SECTORES.find((s) => s.slug === activeSector) : null;

  return (
    <>
      {/* Sticky nav */}
      <nav
        className={`fixed top-0 left-0 right-0 z-[999] transition-all duration-300 ${
          scrolled
            ? "bg-mgm-navy-dark/95 backdrop-blur-md border-b border-white/5 shadow-lg shadow-black/30"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 text-xl font-bold tracking-tight">
              <span className="text-white font-anton text-2xl">
                MGM<span className="text-mgm-yellow">.</span>
              </span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-7">
              {/* Sectores dropdown */}
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setSectoresOpen((v) => !v)}
                  className={`flex items-center gap-1.5 text-sm font-medium transition-colors duration-200 ${
                    isOnSectorPage ? "text-mgm-yellow" : "text-gray-300 hover:text-mgm-yellow"
                  }`}
                >
                  {currentSector ? (
                    <>
                      <span>{currentSector.icon}</span>
                      <span>{currentSector.shortName}</span>
                    </>
                  ) : (
                    "Sectores"
                  )}
                  <svg
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${sectoresOpen ? "rotate-180" : ""}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {/* Dropdown panel */}
                {sectoresOpen && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-72 bg-[#0d1b4a] border border-white/10 rounded-2xl shadow-2xl shadow-black/50 overflow-hidden z-[1001]">
                    <div className="p-2">
                      {SECTORES.map((sector) => (
                        <button
                          key={sector.slug}
                          onClick={() => handleSectorSelect(sector.slug)}
                          className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-colors duration-150 ${
                            activeSector === sector.slug
                              ? "bg-mgm-yellow/10 text-mgm-yellow"
                              : "text-gray-300 hover:bg-white/5 hover:text-white"
                          }`}
                        >
                          <span className="text-lg">{sector.icon}</span>
                          <div>
                            <div className="text-sm font-semibold leading-tight">{sector.shortName}</div>
                            <div className="text-xs text-gray-500 leading-tight mt-0.5 line-clamp-1">
                              {sector.tagline.split(".")[0]}
                            </div>
                          </div>
                          {activeSector === sector.slug && (
                            <span className="ml-auto text-mgm-yellow text-xs">✓</span>
                          )}
                        </button>
                      ))}
                    </div>
                    <div className="border-t border-white/10 p-2">
                      <button
                        onClick={handleChangeSector}
                        className="w-full flex items-center gap-2 px-4 py-2.5 rounded-xl text-left text-xs text-gray-500 hover:text-gray-300 hover:bg-white/5 transition-colors"
                      >
                        ← Cambiar sector / Ver inicio
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleAnchorClick(e, link.href)}
                  className="text-sm font-medium text-gray-300 hover:text-mgm-yellow transition-colors duration-200"
                >
                  {link.label}
                </a>
              ))}

              <a
                href="#contacto"
                onClick={(e) => handleAnchorClick(e, "#contacto")}
                className="bg-mgm-yellow text-mgm-navy-dark text-sm font-bold px-5 py-2.5 rounded-lg hover:bg-yellow-300 transition-colors duration-200"
              >
                Diagnóstico Gratuito
              </a>
            </div>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden w-10 h-10 flex flex-col justify-center items-center gap-1.5 z-[1000] relative"
              aria-label="Toggle menu"
            >
              <span
                className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                  menuOpen ? "rotate-45 translate-y-2" : ""
                }`}
              />
              <span
                className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                  menuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                  menuOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed inset-0 bg-mgm-navy-dark z-[998] transition-all duration-300 overflow-y-auto ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-center justify-center min-h-full gap-6 py-24 px-6">
          {/* Sector selector section */}
          <div className="w-full max-w-xs">
            <p className="text-xs text-gray-500 uppercase tracking-widest mb-3 text-center">
              Tu sector
            </p>
            <div className="grid grid-cols-1 gap-2">
              {SECTORES.map((sector) => (
                <button
                  key={sector.slug}
                  onClick={() => handleSectorSelect(sector.slug)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl border transition-colors text-left ${
                    activeSector === sector.slug
                      ? "border-mgm-yellow/50 bg-mgm-yellow/10 text-mgm-yellow"
                      : "border-white/10 text-gray-300"
                  }`}
                >
                  <span>{sector.icon}</span>
                  <span className="font-semibold text-sm">{sector.shortName}</span>
                  {activeSector === sector.slug && <span className="ml-auto text-mgm-yellow">✓</span>}
                </button>
              ))}
            </div>
          </div>

          <div className="w-full max-w-xs h-px bg-white/10" />

          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleAnchorClick(e, link.href)}
              className="text-xl font-bold text-white hover:text-mgm-yellow transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contacto"
            onClick={(e) => handleAnchorClick(e, "#contacto")}
            className="bg-mgm-yellow text-mgm-navy-dark font-bold px-8 py-3 rounded-lg text-lg mt-2"
          >
            Diagnóstico Gratuito
          </a>
          <button
            onClick={handleChangeSector}
            className="text-xs text-gray-500 hover:text-gray-300 transition-colors mt-2"
          >
            ← Volver al inicio / Cambiar sector
          </button>
        </div>
      </div>
    </>
  );
}
