import { DownloadCV } from "./about-links"
import MyStory from "./my-story"

export default function AboutSection() {
    return (
        <section className="h-max bg-secondary pt-4 pb-4">
            <div className="container">
                <h1 className="font-bold text-6xl">About<span className="text-accent">.</span></h1>
                <div className="grid grid-cols-2">
                    <div className="cols-span-1">
                        <MyStory />
                        <DownloadCV />
                    </div>
                </div>
            </div>
        </section>
    )
}