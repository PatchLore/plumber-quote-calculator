import Link from 'next/link'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { industries, getIndustryBySlug, type Industry } from '@/data/industries'
import IndustryInteractive from '@/components/IndustryInteractive'

type Props = {
  params: { slug: string }
}

export async function generateStaticParams() {
  return industries.map((i) => ({ slug: i.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const industry = getIndustryBySlug(params.slug)
  return {
    title: `Websites for ${industry?.title} | FixBlox`,
    description: industry?.description,
    keywords: industry?.keywords,
    openGraph: {
      title: `Websites for ${industry?.title}`,
      description: industry?.description,
      images: [`/api/og/industry/${params.slug}`]
    }
  }
}

export default function IndustryPage({ params }: Props) {
  const industry = getIndustryBySlug(params.slug)
  if (!industry) {
    return notFound()
  }

  const { title, icon, description, videoUrl, features, related } = industry
  const resolvedVideoUrl = videoUrl || '/videos/fixblox-demo.mp4'

  return (
    <div className="max-w-5xl mx-auto p-6 sm:p-8 md:p-12">
      {/* Hero */}
      <div className="flex flex-col items-center text-center">
        <div className="text-5xl" aria-hidden>{icon}</div>
        <h1 className="text-4xl font-bold mt-4">Websites for {title}</h1>
        <p className="text-lg text-gray-600 mt-2">{description}</p>
      </div>

      {/* Video + CTA (interactive) */}
      <IndustryInteractive title={title} videoUrl={resolvedVideoUrl} />

      {/* Features */}
      {features?.length ? (
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-3">Why FixBlox</h2>
          <ul className="grid sm:grid-cols-2 gap-3">
            {features.map((f, idx) => (
              <li key={idx} className="flex items-start gap-2 p-3 rounded-lg bg-white border border-transparent hover:border-blue-500 hover:shadow-md transition-all">
                <span className="text-blue-600">✅</span>
                <span className="text-gray-800">{f}</span>
              </li>
            ))}
          </ul>
        </div>
      ) : null}

      

      {/* Related + testimonial */}
      <div className="mt-12 grid gap-8 lg:grid-cols-2">
        <div>
          <h3 className="text-lg font-semibold mb-2">Also great for</h3>
          <div className="flex flex-wrap gap-2">
            {(related && related.length ? related : industries.slice(0, 3).map((i) => i.slug)).map((slug) => {
              const r = getIndustryBySlug(slug) as Industry
              return (
                <Link key={slug} href={`/industries/${slug}`} className="px-3 py-1 rounded-full bg-white border hover:border-blue-500 hover:shadow-sm transition-all text-sm">
                  {r.icon} {r.title}
                </Link>
              )
            })}
          </div>
        </div>
        <div className="rounded-xl p-5 bg-white border shadow-sm">
          <p className="text-gray-700 italic">“FixBlox helped us launch a modern site with instant quotes. Leads doubled within weeks.”</p>
          <div className="mt-3 text-sm text-gray-600">— A happy FixBlox customer</div>
        </div>
      </div>
    </div>
  )
}


