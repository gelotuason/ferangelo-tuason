import ProjectsMockup from "./projects-mockup"

export default function ProjectsSection() {
    return (
        <section id="projects" className="container mt-56 mb-28 w-full">
            <h1 className="section-headings">Projects<span className="text-accent">.</span></h1>
            <div className="h-max w-full grid grid-cols-1 md:grid-cols-3 gap-5 mt-2">
                <ProjectsMockup /> 
            </div>
        </section>
    )
}