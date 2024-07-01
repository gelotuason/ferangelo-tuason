import { DownloadCV } from "./about-links";
import MyStory from "./my-story";
import Image from "next/image";

export default function AboutSection() {
    return (
        <section className="container h-screen">
            <h1 className="font-bold text-6xl">About<span className="text-accent">.</span></h1>
            <div className="grid grid-cols-2 gap-8">
                <div className="cols-span-1 mx-auto">
                    <MyStory />
                    <DownloadCV />
                </div>
                <div className="cols-span-1 mx-auto my-auto">
                    <Image
                        src='/my-photo.jpg'
                        width={500}
                        height={500}
                        alt="My Photo"
                        className="rounded-full border-2 border-secondary p-12"
                    />
                </div>
            </div>
        </section>
    )
}