import { useRouter } from 'next/router'

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

export default function BlogPost() {
  const router = useRouter()
  const { slug } = router.query
  const post = slug && blogPosts[slug as string]

  if (!post) {
    return <div>Loading...</div>
  }

  return (
    <div className="container">
      <h1>{post.title}</h1>
      <span className="date">{post.date}</span>
      <div className="content">{post.content}</div>
      <style jsx>{`
        .container {
          max-width: 700px;
          margin: 2rem auto;
          padding: 1rem;
        }
        .date {
          color: #aaa;
          font-size: 0.9em;
          margin-bottom: 1rem;
          display: block;
        }
        .content {
          margin-top: 2rem;
          font-size: 1.2em;
        }
      `}</style>
    </div>
  )
}