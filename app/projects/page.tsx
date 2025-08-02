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

export default function Projects() {
  return (
    <div className="container">
      <h1>Projects</h1>
      <ul>
        {projects.map(project => (
          <li key={project.name}>
            <a href={project.link} target="_blank" rel="noopener noreferrer">{project.name}</a>: {project.description}
          </li>
        ))}
      </ul>
      <style jsx>{`
        .container {
          max-width: 700px;
          margin: 2rem auto;
          padding: 1rem;
        }
      `}</style>
    </div>
  )
}
