import TechstackDescription from "./techstack-desc";
import TechstackLogos from "./techstack-logos";

export default function TechstackSection() {
    return (
        <section className="container h-max mt-28 mb-28">
            <h1 className="font-bold text-6xl">Tech Stack<span className="text-accent">.</span></h1>
            <TechstackDescription />
            <div className="grid justify-center mt-10">
                <h2 className="text-center">These are the tools I mostly used:</h2>
                <TechstackLogos />
            </div>
        </section>
    )
}