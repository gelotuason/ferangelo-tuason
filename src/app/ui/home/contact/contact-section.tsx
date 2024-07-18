import ContactTabs from "./contact-tabs"

export default function ContactSection() {
    return (
        <section id="contact" className="container h-max bg-secondary mt-56 mb-28 w-full py-4 rounded-lg text-center">
            <h2 className="font-bold text-center mb-3">Get in touch<span className="text-accent">.</span></h2>
            <p className="mb-2">Feel free to message me on any of these!</p>
            <ContactTabs />
        </section>
    )
}