import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { BLOG_POSTS } from "@/lib/blog-posts";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = BLOG_POSTS.find((p) => p.slug === params.slug);
  if (!post) return {};
  return {
    title: `${post.title} | MGM Consulting Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.image],
      type: "article",
      locale: "es_AR",
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
  };
}

// Renderizador de markdown simple y limpio
function renderContent(content: string) {
  const lines = content.split("\n").filter((line) => line.trim() !== "");
  return lines.map((line, i) => {
    // Headings
    if (line.startsWith("## ")) {
      return (
        <h2 key={i} className="font-anton text-2xl sm:text-3xl text-white mt-10 mb-4 leading-tight">
          {line.replace("## ", "")}
        </h2>
      );
    }
    if (line.startsWith("### ")) {
      return (
        <h3 key={i} className="font-bold text-white text-lg sm:text-xl mt-7 mb-3">
          {line.replace("### ", "")}
        </h3>
      );
    }
    // Bold paragraphs (standalone **text**)
    if (/^\*\*[^*]+\*\*$/.test(line.trim())) {
      return (
        <p key={i} className="font-bold text-white text-base mt-4 mb-2">
          {line.replace(/\*\*/g, "")}
        </p>
      );
    }
    // Bullet list
    if (line.startsWith("- ")) {
      const text = line.replace("- ", "");
      return (
        <li key={i} className="ml-4 text-gray-300 flex items-start gap-2">
          <span className="text-mgm-yellow mt-1.5 flex-shrink-0 text-xs">●</span>
          <span dangerouslySetInnerHTML={{ __html: boldify(text) }} />
        </li>
      );
    }
    // Numbered list
    if (/^\d+\./.test(line)) {
      const text = line.replace(/^\d+\.\s/, "");
      return (
        <li key={i} className="ml-4 text-gray-300 flex items-start gap-2">
          <span className="text-mgm-yellow mt-0 flex-shrink-0 font-bold">{line.match(/^\d+/)?.[0]}.</span>
          <span dangerouslySetInnerHTML={{ __html: boldify(text) }} />
        </li>
      );
    }
    // Result lines with emojis
    if (line.startsWith("✅") || line.startsWith("📈") || line.startsWith("📊")) {
      return (
        <p key={i} className="text-gray-200 text-sm pl-2">
          {line}
        </p>
      );
    }
    // Regular paragraph with inline bold and links
    return (
      <p
        key={i}
        className="text-gray-400 leading-relaxed"
        dangerouslySetInnerHTML={{ __html: boldify(linkify(line)) }}
      />
    );
  });
}

// Convierte **text** en <strong>
function boldify(text: string): string {
  return text.replace(/\*\*([^*]+)\*\*/g, '<strong class="text-white font-semibold">$1</strong>');
}

// Convierte [texto](url) en <a> con estilos
function linkify(text: string): string {
  return text.replace(
    /\[([^\]]+)\]\((https?:\/\/[^\)]+)\)/g,
    '<a href="$2" target="_blank" rel="noopener noreferrer" class="text-mgm-yellow hover:underline">$1</a>'
  );
}

export default function BlogPost({ params }: Props) {
  const post = BLOG_POSTS.find((p) => p.slug === params.slug);
  if (!post) notFound();

  const otherPosts = BLOG_POSTS.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-mgm-navy-dark pt-20">
        <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          {/* Breadcrumb */}
          <div className="mb-8 flex items-center gap-2 text-sm text-gray-500">
            <Link href="/" className="hover:text-mgm-yellow transition-colors">
              Inicio
            </Link>
            <span>/</span>
            <Link href="/general#blog" className="hover:text-mgm-yellow transition-colors">
              Blog
            </Link>
            <span>/</span>
            <span className="text-gray-400 line-clamp-1">{post.category}</span>
          </div>

          {/* Header */}
          <header className="mb-10">
            <span className="inline-block bg-mgm-yellow text-mgm-navy-dark text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest mb-4">
              {post.tag}
            </span>
            <h1 className="font-anton text-3xl sm:text-4xl lg:text-5xl text-white leading-tight">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center gap-3 mt-6 text-sm text-gray-400">
              <span className="font-semibold text-white">{post.author}</span>
              <span className="text-gray-600">·</span>
              <span>{post.authorRole}</span>
              <span className="text-gray-600">·</span>
              <span>{post.date}</span>
              <span className="text-gray-600">·</span>
              <span>{post.readTime} lectura</span>
            </div>
          </header>

          {/* Hero image */}
          <div className="relative h-56 sm:h-72 lg:h-80 rounded-2xl overflow-hidden mb-10">
            <Image src={post.image} alt={post.imageAlt} fill className="object-cover" sizes="(max-width: 768px) 100vw, 768px" />
            <div className="absolute inset-0 bg-gradient-to-t from-mgm-navy-dark/40 to-transparent" />
          </div>

          {/* Content */}
          <div className="space-y-4 text-base">
            {renderContent(post.content)}
          </div>

          {/* Diagnóstico Gratuito CTA — redirige al formulario de contacto */}
          <div className="mt-14 rounded-2xl bg-mgm-navy border border-mgm-yellow/30 p-6 sm:p-8 text-center">
            <h3 className="font-anton text-2xl text-white mb-2">
              ¿Querés aplicar esto en tu organización?
            </h3>
            <p className="text-gray-400 text-sm mb-6 max-w-md mx-auto">
              En MGM ofrecemos un Diagnóstico Gratuito de 60 minutos para droguerías, farmacias, clínicas y laboratorios farmacéuticos.
            </p>
            <a
              href={`https://wa.me/5491127036100?text=${encodeURIComponent("Hola MGM Consulting, leí el blog y quiero un diagnóstico gratuito para mi organización de salud.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-mgm-yellow text-mgm-navy-dark font-bold px-8 py-3.5 rounded-xl hover:bg-yellow-300 transition-colors text-sm"
            >
              Solicitá tu Diagnóstico Gratuito →
            </a>
          </div>

          {/* Author */}
          <div className="mt-10 pt-8 border-t border-white/10 flex items-start gap-4">
            <div className="flex-1">
              <p className="font-bold text-white text-base">{post.author}</p>
              <p className="text-mgm-yellow text-sm">{post.authorRole}</p>
              <p className="text-gray-500 text-xs mt-2">MGM Consulting — Consultora Estratégica de Soluciones Digitales para el Sector Salud</p>
            </div>
          </div>
        </article>

        {/* Artículos relacionados */}
        {otherPosts.length > 0 && (
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
            <h2 className="font-anton text-2xl text-white mb-6">Más artículos</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {otherPosts.map((related) => (
                <Link
                  key={related.slug}
                  href={`/blog/${related.slug}`}
                  className="group bg-mgm-navy border border-white/10 rounded-xl overflow-hidden hover:border-mgm-yellow/40 transition-all duration-300 block"
                >
                  <div className="relative h-36 overflow-hidden">
                    <Image
                      src={related.image}
                      alt={related.imageAlt}
                      fill
                      sizes="(max-width: 640px) 100vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-4">
                    <span className="text-mgm-yellow text-xs font-bold uppercase tracking-widest">{related.tag}</span>
                    <h3 className="font-bold text-white text-sm mt-1 leading-snug line-clamp-2 group-hover:text-mgm-yellow transition-colors">
                      {related.title}
                    </h3>
                    <p className="text-mgm-yellow text-xs mt-2 font-semibold">Leer →</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </main>
      <Footer />

      {/* JSON-LD Article */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: post.title,
            description: post.excerpt,
            image: post.image,
            author: {
              "@type": "Person",
              name: post.author,
              jobTitle: post.authorRole,
              worksFor: {
                "@type": "Organization",
                name: "MGM Consulting",
              },
            },
            publisher: {
              "@type": "Organization",
              name: "MGM Consulting",
              logo: {
                "@type": "ImageObject",
                url: "https://mgmconsultingok.vercel.app/img/mgm-logo.svg",
              },
            },
            datePublished: post.date,
            dateModified: post.date,
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": `https://mgmconsultingok.vercel.app/blog/${post.slug}`,
            },
            keywords: [
              "consultora estratégica sector salud",
              "marketing digital droguerías",
              "CRM médico Argentina",
              "automatización farmacias",
              "business intelligence clínicas",
              "transformación digital farmacéutica",
            ],
          }),
        }}
      />
    </>
  );
}
