"use client"
import Link from 'next/link'

const blogPosts = [
  {
    title: 'How I built my portfolio',
    slug: 'how-i-built-my-portfolio',
    date: '2025-07-20',
    excerpt: 'Step-by-step guide to building my portfolio site with Next.js.'
  },
  {
    title: 'React vs Next.js',
    slug: 'react-vs-nextjs',
    date: '2025-06-15',
    excerpt: 'Comparing the pros and cons of React vs Next.js for web development.'
  },
  {
    title: 'Deploying with Vercel',
    slug: 'deploying-with-vercel',
    date: '2025-05-10',
    excerpt: 'How to deploy Next.js apps quickly using Vercel.'
  },
  {
    title: 'Understanding Static Generation',
    slug: 'understanding-static-generation',
    date: '2025-04-06',
    excerpt: 'Exploring static site generation in Next.js and its benefits.'
  },
  {
    title: 'My Journey as a Developer',
    slug: 'my-journey-as-a-developer',
    date: '2025-03-01',
    excerpt: 'Sharing my story and growth as a self-taught developer.'
  },
]

export default function Blog() {
  return (
    <div className="container">
      <h1>Blog Posts</h1>
      <ul>
        {blogPosts.map(post => (
          <li key={post.slug} className="blog-item">
            <Link href={`/blog/${post.slug}`}><strong>{post.title}</strong></Link>
            <span className="date">{post.date}</span>
            <p>{post.excerpt}</p>
          </li>
        ))}
      </ul>
      <style jsx>{`
        .container {
          max-width: 700px;
          margin: 2rem auto;
          padding: 1rem;
        }
        .blog-item {
          margin-bottom: 2rem;
          border-bottom: 1px solid #eee;
          padding-bottom: 1rem;
        }
        .date {
          color: #aaa;
          font-size: 0.9em;
          margin-left: 0.5em;
        }
      `}</style>
    </div>
  )
}
