import { notFound } from 'next/navigation'
import type { Metadata } from 'next'

const blogPosts: Record<string, { title: string, date: string, content: string }> = {
  'how-i-built-my-portfolio': {
    title: 'How I built my portfolio',
    date: '2025-07-20',
    content: 'This post describes how I built my portfolio using Next.js, from design to deployment.',
  },
  'react-vs-nextjs': {
    title: 'React vs Next.js',
    date: '2025-06-15',
    content: 'A detailed comparison of React and Next.js, focusing on developer experience and performance.',
  },
  'deploying-with-vercel': {
    title: 'Deploying with Vercel',
    date: '2025-05-10',
    content: 'Learn how to deploy your Next.js application seamlessly with Vercel.',
  },
  'understanding-static-generation': {
    title: 'Understanding Static Generation',
    date: '2025-04-06',
    content: 'Why static generation matters, and how Next.js makes it easy.',
  },
  'my-journey-as-a-developer': {
    title: 'My Journey as a Developer',
    date: '2025-03-01',
    content: 'A reflection on my growth and experiences as a developer.',
  },
}

export async function generateStaticParams() {
  return Object.keys(blogPosts).map(slug => ({ slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const post = blogPosts[slug]
  
  if (!post) {
    return {
      title: 'Post Not Found',
    }
  }
  
  return {
    title: post.title,
    description: post.content.substring(0, 160) + '...',
    openGraph: {
      title: post.title,
      description: post.content.substring(0, 160) + '...',
      type: 'article',
      publishedTime: post.date,
      authors: ['Anix86'],
    },
  }
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = blogPosts[slug]
  if (!post) {
    notFound()
  }
  return (
    <div className="blog-post-container">
      <h1>{post.title}</h1>
      <span className="blog-post-date">{post.date}</span>
      <div className="blog-post-content">{post.content}</div>
    </div>
  )
}
