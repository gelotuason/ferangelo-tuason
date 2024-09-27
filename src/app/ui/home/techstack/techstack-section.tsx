import TechstackLogos from "./techstack-logos";

export default function TechstackSection() {
    return (
        <section className="container h-max mt-56 mb-28">
            <h2 className="font-bold">Tech Stack<span className="text-accent">.</span></h2>
            <div className="h-max border-l-4 ps-3 border-accent mt-2">
                <p className="small-text">
                    My skills are a strategic blend of advanced tools designed to deliver <span className="text-accent">high-quality</span>, <span className="text-accent">scalable</span>, and <span className="text-accent">efficient solutions</span>.
                    It’s more than just a collection of technologies; it’s a competitive advantage that elevates your web development experience to new heights.
                    Harness the power of my tech stack and step into the future of web development.
                </p>
            </div>
            <div className="grid justify-center mt-10">
                <p className="small-text text-center">These are the tools I used the most:</p>
                <TechstackLogos />
            </div>
        </section>
    )
}