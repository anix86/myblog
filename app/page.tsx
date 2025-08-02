import Image from 'next/image'
import Link from 'next/link'

const posts = [
  {
    title: 'How I built my portfolio',
    slug: 'how-i-built-my-portfolio',
    date: '2025-07-20',
  },
  {
    title: 'React vs Next.js',
    slug: 'react-vs-nextjs',
    date: '2025-06-15',
  },
  {
    title: 'Deploying with Vercel',
    slug: 'deploying-with-vercel',
    date: '2025-05-10',
  },
  {
    title: 'Understanding Static Generation',
    slug: 'understanding-static-generation',
    date: '2025-04-06',
  },
  {
    title: 'My Journey as a Developer',
    slug: 'my-journey-as-a-developer',
    date: '2025-03-01',
  },
]

const projects = [
  {
    name: 'Project Alpha',
    link: 'https://github.com/anix86/project-alpha',
    description: 'A web app for visualizing data.',
  },
  {
    name: 'Blog Engine',
    link: 'https://github.com/anix86/blog-engine',
    description: 'A simple markdown-based blog platform.',
  },
]

export default function Home() {
  return (
    <div>
      <section className="hero">
        <div className="hero-image">
          <Image src="/me.jpg" alt="My photo" width={120} height={120} className="profile-img" />
        </div>
        <div className="hero-details">
          <h1>Anix86</h1>
          <p>
            Hi, I’m Anix! A passionate developer specializing in web technologies. I love building beautiful and fast web applications, writing about tech, and sharing my projects with the world.
          </p>
        </div>
      </section>
      <section className="section">
        <h2>Latest Blog Posts</h2>
        <ul>
          {posts.map((post) => (
            <li key={post.slug}>
              <Link href={`/blog/${post.slug}`}>{post.title}</Link> <span className="date">{post.date}</span>
            </li>
          ))}
        </ul>
        <Link href="/blog" className="view-more">View More</Link>
      </section>
      <section className="section">
        <h2>Recent Projects</h2>
        <ul>
          {projects.map((project) => (
            <li key={project.name}>
              <a href={project.link} target="_blank" rel="noopener noreferrer">{project.name}</a>: {project.description}
            </li>
          ))}
        </ul>
      </section>
      <footer className="footer">
        &copy; {new Date().getFullYear()} Anix86. All rights reserved.
      </footer>
      <style jsx>{`
        .hero {
          display: flex;
          align-items: center;
          padding: 2rem 1rem;
        }
        .hero-image {
          margin-right: 2rem;
        }
        .profile-img {
          border-radius: 50%;
        }
        .hero-details {
          max-width: 500px;
        }
        .section {
          margin: 2rem 1rem;
        }
        .date {
          color: #aaa;
          font-size: 0.9em;
          margin-left: 0.5em;
        }
        .view-more {
          display: inline-block;
          margin-top: 0.8em;
          color: #0070f3;
          text-decoration: underline;
        }
        .footer {
          text-align: center;
          padding: 2rem 0 1rem 0;
          font-size: 1em;
          color: #666;
          border-top: 1px solid #eee;
          margin-top: 3rem;
        }
      `}</style>
    </div>
  )
}
