import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { blogPosts, type BlogPost } from '@/data/blogPosts'

type Props = { params: { slug: string } }

export async function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = blogPosts.find((p) => p.slug === params.slug)
  return {
    title: `${post?.title} | FixBlox Blog`,
    description: post?.description,
    keywords: post?.keywords,
    openGraph: {
      title: `${post?.title} | FixBlox Blog`,
      description: post?.description,
      images: [`/api/og/blog/${params.slug}`],
    },
  }
}

export default function BlogPostPage({ params }: Props) {
  const post = blogPosts.find((p) => p.slug === params.slug)
  if (!post) return notFound()

  const { title, description, date, author, image, content } = post as BlogPost

  return (
    <div className="max-w-3xl mx-auto p-6 sm:p-8 md:p-12">
      {/* Hero */}
      {image ? (
        <div className="w-full h-48 sm:h-56 md:h-72 rounded-xl overflow-hidden shadow-md">
          <img src={image} alt={title} className="w-full h-full object-cover" />
        </div>
      ) : null}
      <h1 className="text-3xl sm:text-4xl font-bold mt-4">{title}</h1>
      <div className="text-gray-500 mt-1 text-sm">
        {new Date(date).toLocaleDateString()} • {author}
      </div>
      <p className="text-gray-700 leading-relaxed mt-3 text-base sm:text-lg">{description}</p>

      {/* Content */}
      <article className="prose prose-neutral prose-a:text-blue-600 max-w-none mt-6">
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </article>

      {/* CTA */}
      <Link href="/contact" className="inline-block mt-10 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
        Get Your Free Website Quote →
      </Link>
    </div>
  )
}


