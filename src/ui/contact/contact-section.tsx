import ContactTabs from "./contact-tabs"

export default function ContactSection() {
    return (
        <section className="container bg-secondary mt-56 mb-28 w-full py-4 rounded-lg text-center">
            <h1 className="font-bold text-6xl text-center mb-3">Get in touch<span className="text-accent">.</span></h1>
            <p className="mb-1">Feel free to message me on any of these!</p>
            <ContactTabs />
        </section>
    )
}