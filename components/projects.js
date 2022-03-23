import ProjectPreview from './project-preview'

export default function Projects({ projects }) {
  return (
    <section>
      <h2 className="mb-16 text-6xl md:text-7xl font-bold tracking-tighter leading-tight">
        Projects
      </h2>
      <div className="grid grid-cols-1  md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32 mb-32">
        {projects.map((project) => (
          <ProjectPreview
            key={project.slug}
            title={project.title}
            coverImage={project.coverImage}
            date={project.date}
            author={project.author}
            slug={project.slug}
            excerpt={project.excerpt}
          />
        ))}
      </div>
    </section>
  )
}
