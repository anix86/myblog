import Link from 'next/link'
import { getAllPosts } from '@/lib/markdown'

export const metadata = {
  title: 'Blog',
  description: 'Read my latest blog posts about web development, programming, and technology.',
}

export default function Blog() {
  const posts = getAllPosts()
  
  return (
    <div className="container">
      <h1>Blog Posts</h1>
      <div className="posts-grid">
        {posts.map(post => (
          <article key={post.slug} className="blog-card">
            <div className="card-header">
              {post.featured && <span className="featured-badge">Featured</span>}
              <time className="date">{post.date}</time>
            </div>
            <h2>
              <Link href={`/blog/${post.slug}`}>{post.title}</Link>
            </h2>
            <p className="excerpt">{post.excerpt}</p>
            <div className="card-footer">
              <span className="reading-time">{post.readingTime}</span>
              <div className="tags">
                {post.tags.slice(0, 3).map(tag => (
                  <span key={tag} className="tag">#{tag}</span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
      <style jsx>{`
        .container {
          max-width: 900px;
          margin: 2rem auto;
          padding: 1rem;
        }
        
        h1 {
          text-align: center;
          margin-bottom: 3rem;
        }
        
        .posts-grid {
          display: grid;
          gap: 2rem;
        }
        
        .blog-card {
          background: #fff;
          border: 1px solid #eee;
          border-radius: 8px;
          padding: 1.5rem;
          transition: transform 0.2s, box-shadow 0.2s;
        }
        
        .blog-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }
        
        .card-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 0.5rem;
        }
        
        .featured-badge {
          background: #0070f3;
          color: white;
          padding: 0.25rem 0.5rem;
          border-radius: 4px;
          font-size: 0.75rem;
          font-weight: 600;
        }
        
        .date {
          color: #666;
          font-size: 0.9em;
        }
        
        h2 {
          margin: 0.5rem 0;
          font-size: 1.5rem;
        }
        
        h2 a {
          color: #222;
          text-decoration: none;
        }
        
        h2 a:hover {
          color: #0070f3;
        }
        
        .excerpt {
          color: #555;
          line-height: 1.6;
          margin: 1rem 0;
        }
        
        .card-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 1rem;
        }
        
        .reading-time {
          color: #666;
          font-size: 0.9rem;
        }
        
        .tags {
          display: flex;
          gap: 0.5rem;
        }
        
        .tag {
          color: #0070f3;
          font-size: 0.85rem;
        }
      `}</style>
    </div>
  )
}
