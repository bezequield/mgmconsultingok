"use client";
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Tesis from "@/components/Tesis";
import Servicios from "@/components/Servicios";
import Proceso from "@/components/Proceso";
import Equipo from "@/components/Equipo";
import Planes from "@/components/Planes";
import Blog from "@/components/Blog";
import Contacto from "@/components/Contacto";
import Footer from "@/components/Footer";

export default function Home() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    );
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <main>
      <Navbar />
      <Hero />
      <Tesis />
      <Servicios />
      <Proceso />
      <Equipo />
      <Planes />
      <Blog />
      <Contacto />
      <Footer />
    </main>
  );
}
