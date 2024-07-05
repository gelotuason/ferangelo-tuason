import { DownloadCvLink } from "./about-links";
import MyStory from "./my-story";
import Image from "next/image";

export default function AboutSection() {
    return (
        <section id="about" className="container h-max mb-28">
            <h1 className="section-headings">About<span className="text-accent">.</span></h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-2">
                <div className="cols-span-1 mx-auto grid place-content-between justify-between gap-2">
                    <MyStory />
                    <DownloadCvLink />
                </div>
                <div className="hidden md:block cols-span-1 mx-auto">
                    <Image
                        src='/my-photo.jpg'
                        width={400}
                        height={400}
                        alt="My Photo"
                        className="rounded-full border-2 border-secondary"
                    />
                </div>
            </div>
        </section>
    )
}