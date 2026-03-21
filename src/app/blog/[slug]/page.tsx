import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { BLOG_POSTS } from "@/components/Blog";
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
    openGraph: { title: post.title, description: post.excerpt, images: [post.image] },
  };
}

export default function BlogPost({ params }: Props) {
  const post = BLOG_POSTS.find((p) => p.slug === params.slug);
  if (!post) notFound();

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-mgm-navy-dark pt-24">
        <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="mb-8">
            <Link href="/#blog" className="text-mgm-yellow text-sm hover:underline">← Volver al Blog</Link>
          </div>
          <header className="mb-10">
            <span className="text-mgm-yellow text-xs font-bold uppercase tracking-widest">{post.tag}</span>
            <h1 className="font-anton text-3xl sm:text-4xl lg:text-5xl text-white mt-3 leading-tight">{post.title}</h1>
            <div className="flex items-center gap-4 mt-6 text-sm text-gray-400">
              <span>{post.author}</span>
              <span>·</span>
              <span>{post.date}</span>
              <span>·</span>
              <span>{post.readTime} lectura</span>
            </div>
          </header>
          <div className="relative h-64 sm:h-80 rounded-2xl overflow-hidden mb-10">
            <Image src={post.image} alt={post.imageAlt} fill className="object-cover" />
          </div>
          <div className="prose prose-invert prose-yellow max-w-none text-gray-300 leading-relaxed space-y-4">
            {post.content.split('\n').filter(Boolean).map((line, i) => {
              if (line.startsWith('## ')) return <h2 key={i} className="font-anton text-2xl text-white mt-8 mb-4">{line.replace('## ', '')}</h2>;
              if (line.startsWith('### ')) return <h3 key={i} className="font-bold text-white text-lg mt-6 mb-3">{line.replace('### ', '')}</h3>;
              if (line.startsWith('**') && line.endsWith('**')) return <p key={i} className="font-bold text-white">{line.replace(/\*\*/g, '')}</p>;
              if (line.startsWith('- ')) return <li key={i} className="ml-4 text-gray-400">{line.replace('- ', '')}</li>;
              if (line.match(/^\d+\./)) return <li key={i} className="ml-4 text-gray-400">{line.replace(/^\d+\.\s/, '')}</li>;
              if (line.startsWith('✅') || line.startsWith('📈')) return <p key={i} className="text-gray-300">{line}</p>;
              return <p key={i} className="text-gray-400 leading-relaxed">{line}</p>;
            })}
          </div>
          <div className="mt-16 pt-10 border-t border-white/10">
            <h3 className="font-bold text-white mb-2">{post.author}</h3>
            <p className="text-mgm-yellow text-sm mb-4">{post.authorRole}</p>
            <Link href="/#contacto"
              className="inline-block bg-mgm-yellow text-mgm-navy-dark font-bold px-6 py-3 rounded-xl hover:bg-yellow-300 transition-colors">
              Contactar a MGM Consulting →
            </Link>
          </div>
        </article>
        <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": post.title,
          "description": post.excerpt,
          "image": post.image,
          "author": { "@type": "Person", "name": post.author },
          "publisher": { "@type": "Organization", "name": "MGM Consulting", "logo": { "@type": "ImageObject", "url": "https://mgmconsultingok.vercel.app/img/mgm-logo.svg" }},
          "datePublished": post.date,
          "dateModified": post.date,
          "mainEntityOfPage": { "@type": "WebPage", "@id": `https://mgmconsultingok.vercel.app/blog/${post.slug}` },
          "keywords": ["marketing digital salud", "farmacias argentina", "CRM médico", "automatización turnos"]
        })}} />
      </main>
      <Footer />
    </>
  );
}
