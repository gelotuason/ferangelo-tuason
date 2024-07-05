import TechstackDescription from "./techstack-desc";
import TechstackLogos from "./techstack-logos";

export default function TechstackSection() {
    return (
        <section className="container h-max mt-56 mb-28">
            <h1 className="section-headings">Tech Stack<span className="text-accent">.</span></h1>
            <TechstackDescription />
            <div className="grid justify-center mt-10">
                <h2 className="small-text text-center">These are the tools I used the most:</h2>
                <TechstackLogos />
            </div>
        </section>
    )
}