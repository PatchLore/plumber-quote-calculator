import type { Metadata } from 'next'
import Link from 'next/link'
import { blogPosts } from '@/data/blogPosts'

export const metadata: Metadata = {
  title: 'FixBlox Blog | Websites & AI Tools for Trades',
  description:
    'Tips, tools, and insights for tradespeople growing their business online with FixBlox.',
  keywords: ['trade websites', 'AI tools for trades', 'FixBlox blog'],
  openGraph: {
    title: 'FixBlox Blog',
    description:
      'Articles about web design, AI automation, and business growth for trades.',
    images: ['/og-fixblox.jpg'],
  },
}

export default function BlogIndexPage() {
  const posts = blogPosts
  return (
    <div className="max-w-6xl mx-auto p-6 sm:p-8 md:p-12">
      <div className="text-center">
        <h1 className="text-4xl font-bold">FixBlox Blog</h1>
        <p className="text-gray-600 mt-2 text-base sm:text-lg md:text-xl">
          Insights on web design, AI automation, and business growth for trades
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {posts.map((post) => (
          <article key={post.slug} className="bg-white rounded-xl shadow-sm border overflow-hidden">
            {post.image ? (
              <div className="w-full h-48 sm:h-56 overflow-hidden">
                <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
              </div>
            ) : null}
            <div className="p-4 sm:p-6 md:p-8">
              <div className="text-sm text-gray-500">{new Date(post.date).toLocaleDateString()}</div>
              <h2 className="text-xl font-semibold mt-2">{post.title}</h2>
              <p className="text-gray-700 mt-2 text-base sm:text-lg">{post.description}</p>
              <Link href={`/blog/${post.slug}`} className="inline-block mt-4 text-blue-600 font-semibold hover:underline">
                Read More →
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}





