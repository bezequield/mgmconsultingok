import Image from "next/image";
import Link from "next/link";
import { BLOG_POSTS } from "@/lib/blog-posts";

// Show only the first 4 general posts on the homepage
const HOMEPAGE_POSTS = BLOG_POSTS.slice(0, 4);

export default function Blog() {
  return (
    <section id="blog" className="py-24 sm:py-32 bg-mgm-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 reveal">
          <span className="text-mgm-yellow font-semibold text-sm uppercase tracking-widest">Insights & Blog</span>
          <h2 className="font-anton text-4xl sm:text-5xl lg:text-6xl text-white mt-2">
            AUTORIDAD EN<br />EL SECTOR SALUD
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Artículos técnicos y estratégicos para droguerías, farmacéuticas, clínicas y profesionales de la salud que toman decisiones basadas en datos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8">
          {HOMEPAGE_POSTS.map((post, i) => (
            <article
              key={post.slug}
              className="reveal group bg-mgm-navy-l border border-white/10 rounded-2xl overflow-hidden hover:border-mgm-yellow/40 transition-all duration-300"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.imageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-mgm-navy-l to-transparent" />
                <span className="absolute top-4 left-4 bg-mgm-yellow text-mgm-navy-dark text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest">
                  {post.tag}
                </span>
              </div>
              <div className="p-5">
                <div className="flex items-center gap-3 text-xs text-gray-500 mb-3">
                  <span>{post.date}</span>
                  <span>·</span>
                  <span>{post.readTime} lectura</span>
                </div>
                <h3 className="font-bold text-white text-sm leading-snug mb-3 group-hover:text-mgm-yellow transition-colors line-clamp-3">
                  {post.title}
                </h3>
                <p className="text-gray-400 text-xs leading-relaxed line-clamp-3 mb-4">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-white text-xs font-semibold">{post.author}</p>
                    <p className="text-gray-500 text-xs">{post.authorRole}</p>
                  </div>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-mgm-yellow text-xs font-bold hover:underline whitespace-nowrap ml-2"
                  >
                    Leer →
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* CTA Blog */}
        <div className="text-center mt-12">
          <a
            href="/#contacto"
            className="inline-block bg-mgm-yellow/10 border border-mgm-yellow/30 text-mgm-yellow font-bold px-8 py-3 rounded-xl hover:bg-mgm-yellow hover:text-mgm-navy-dark transition-all duration-200 text-sm"
          >
            Diagnóstico Gratuito para tu organización →
          </a>
        </div>
      </div>
    </section>
  );
}
