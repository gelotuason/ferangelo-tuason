import TechstackDescription from "./techstack-desc";
import TechstackLogos from "./techstack-logos";

export default function TechstackSection() {
    return (
        <section className="container h-max mt-56 mb-28">
            <h2 className="font-bold">Tech Stack<span className="text-accent">.</span></h2>
            <TechstackDescription />
            <div className="grid justify-center mt-10">
                <p className="small-text text-center">These are the tools I used the most:</p>
                <TechstackLogos />
            </div>
        </section>
    )
}