import { DownloadCvLink } from "./about-links";
import MyStory from "./my-story";
import Image from "next/image";

export default function AboutSection() {
    return (
        <section id="about" className="container h-max mb-28">
            <h2 className="font-bold">About<span className="text-accent">.</span></h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-2">
                <div className="cols-span-1 order-2 md:order-1 mx-auto grid place-content-between justify-between gap-2">
                    <MyStory />
                    <DownloadCvLink />
                </div>
                <div className="relative p-[30%] cols-span-1 order-1 md:order-2 mx-auto my-auto">
                    <Image
                        src='/my-photo.jpg'
                        fill
                        alt="My Photo"
                        className="rounded-full border-2 border-secondary"
                        priority
                    />
                </div>
            </div>
        </section>
    )
}