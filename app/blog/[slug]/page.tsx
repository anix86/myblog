import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { getAllPostSlugs, getPostWithHtml } from '@/lib/markdown'

export async function generateStaticParams() {
  return getAllPostSlugs()
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  
  try {
    const post = await getPostWithHtml(slug)
    
    return {
      title: post.title,
      description: post.excerpt,
      openGraph: {
        title: post.title,
        description: post.excerpt,
        type: 'article',
        publishedTime: post.date,
        authors: [post.author],
        tags: post.tags,
      },
      twitter: {
        card: 'summary_large_image',
        title: post.title,
        description: post.excerpt,
      },
    }
  } catch {
    return {
      title: 'Post Not Found',
    }
  }
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  
  try {
    const post = await getPostWithHtml(slug)
    
    return (
      <article className="blog-post-container">
        <header className="post-header">
          <h1>{post.title}</h1>
          <div className="post-meta">
            <time className="blog-post-date">{post.date}</time>
            <span className="reading-time">{post.readingTime}</span>
            <span className="author">by {post.author}</span>
          </div>
          {post.tags.length > 0 && (
            <div className="tags">
              {post.tags.map(tag => (
                <span key={tag} className="tag">#{tag}</span>
              ))}
            </div>
          )}
        </header>
        
        <div 
          className="blog-post-content" 
          dangerouslySetInnerHTML={{ __html: post.htmlContent || '' }}
        />
        
        <style jsx>{`
          .blog-post-container {
            max-width: 800px;
            margin: 2rem auto;
            padding: 1rem;
            line-height: 1.7;
          }
          
          .post-header {
            margin-bottom: 3rem;
            border-bottom: 1px solid #eee;
            padding-bottom: 2rem;
          }
          
          h1 {
            font-size: 2.5rem;
            margin-bottom: 1rem;
            color: #222;
            line-height: 1.2;
          }
          
          .post-meta {
            display: flex;
            gap: 1rem;
            align-items: center;
            margin-bottom: 1rem;
            font-size: 0.9rem;
            color: #666;
          }
          
          .blog-post-date {
            font-weight: 500;
          }
          
          .reading-time {
            border-left: 1px solid #ddd;
            padding-left: 1rem;
          }
          
          .author {
            border-left: 1px solid #ddd;
            padding-left: 1rem;
          }
          
          .tags {
            display: flex;
            gap: 0.5rem;
            flex-wrap: wrap;
          }
          
          .tag {
            background: #f0f9ff;
            color: #0070f3;
            padding: 0.25rem 0.5rem;
            border-radius: 4px;
            font-size: 0.8rem;
          }
          
          .blog-post-content {
            font-size: 1.1rem;
            color: #333;
          }
          
          .blog-post-content :global(h1) {
            font-size: 2rem;
            margin: 2rem 0 1rem 0;
            color: #222;
          }
          
          .blog-post-content :global(h2) {
            font-size: 1.6rem;
            margin: 1.8rem 0 0.8rem 0;
            color: #222;
          }
          
          .blog-post-content :global(h3) {
            font-size: 1.3rem;
            margin: 1.5rem 0 0.5rem 0;
            color: #333;
          }
          
          .blog-post-content :global(p) {
            margin: 1rem 0;
          }
          
          .blog-post-content :global(ul), 
          .blog-post-content :global(ol) {
            margin: 1rem 0;
            padding-left: 2rem;
          }
          
          .blog-post-content :global(li) {
            margin: 0.5rem 0;
          }
          
          .blog-post-content :global(code) {
            background: #f6f8fa;
            padding: 0.2rem 0.4rem;
            border-radius: 3px;
            font-family: 'Monaco', 'Menlo', monospace;
            font-size: 0.9em;
          }
          
          .blog-post-content :global(pre) {
            background: #f6f8fa;
            padding: 1rem;
            border-radius: 6px;
            overflow-x: auto;
            margin: 1.5rem 0;
          }
          
          .blog-post-content :global(pre code) {
            background: none;
            padding: 0;
          }
          
          .blog-post-content :global(blockquote) {
            border-left: 4px solid #0070f3;
            padding-left: 1rem;
            margin: 1.5rem 0;
            color: #666;
            font-style: italic;
          }
          
          .blog-post-content :global(strong) {
            font-weight: 600;
          }
          
          @media (max-width: 768px) {
            .blog-post-container {
              padding: 0.5rem;
            }
            
            h1 {
              font-size: 2rem;
            }
            
            .post-meta {
              flex-direction: column;
              align-items: flex-start;
              gap: 0.5rem;
            }
            
            .reading-time,
            .author {
              border-left: none;
              padding-left: 0;
            }
          }
        `}</style>
      </article>
    )
  } catch {
    notFound()
  }
}
