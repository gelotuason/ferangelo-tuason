import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function About() {
    return (
        <section id="about" className="container h-max mb-28">
            <h2 className="font-bold">About<span className="text-accent">.</span></h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-2">
                <div className="cols-span-1 order-2 md:order-1 mx-auto grid place-content-between justify-between gap-2">
                    <div className="h-max border-l-4 ps-3 flex flex-col border-accent gap-10">
                        <p>
                            In 2021, I began my career as an Automation Engineer in the manufacturing industry,
                            where I expanded my skills and knowledge in both technical and organizational tasks.
                        </p>
                        <p>
                            As time went on, I decided to enter the field of web development. I started this journey
                            by learning the fundamentals and building projects, ranging from simple to complex.
                        </p>
                        <p>
                            Now, I am ready to contribute to innovative web solutions, driven by my passion for
                            technology and continuous learning.
                        </p>
                    </div>
                    <Button variant='default' size="lg" className="w-full mt-6 md:mt-0" asChild>
                        <Link href='https://drive.google.com/file/d/1j7TuFjjHOkt0MeX4452L5I7alUGf9opP/view?usp=drive_link' target="_blank" className="gap-2">
                            <FontAwesomeIcon icon={faDownload} className="w-6 h-6" />
                            Download CV
                        </Link>
                    </Button>
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