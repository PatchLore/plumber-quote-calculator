export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  date: string; // ISO string YYYY-MM-DD
  author: string;
  image?: string;
  content: string; // HTML string rendered via dangerouslySetInnerHTML
  keywords?: string[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: 'websites-for-tradespeople',
    title: 'Why Every Tradesperson Needs a Professional Website',
    description:
      "Your website is your 24/7 salesperson — here’s how to make it work for you.",
    date: '2025-11-01',
    author: 'FixBlox Team',
    image: '/images/blog-trades.jpg',
    keywords: ['trade websites', 'plumber web design', 'FixBlox blog'],
    content: `
      <p>In today’s digital world, your website is often the first impression a customer has of your business. A modern, mobile-friendly site builds trust, attracts new clients, and can automate quotes and bookings.</p>
      <p>Platforms like <strong>FixBlox</strong> make it easy to create stunning websites for plumbers, electricians, builders, and more — complete with quote calculators and AI assistants.</p>
    `,
  },
];


