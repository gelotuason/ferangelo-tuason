import TechstackDescription from "./techstack-desc"

export default function TechstackSection() {
    return (
        <section className="container h-max mt-28 mb-28">
            <h1 className="font-bold text-6xl">Tech Stack<span className="text-accent">.</span></h1>
            <TechstackDescription />
        </section>
    )
}