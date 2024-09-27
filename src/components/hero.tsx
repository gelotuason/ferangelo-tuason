'use client';

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { faComments } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { TypeAnimation } from 'react-type-animation';

export default function Hero() {
    return (
        <header className="container h-screen grid content-center w-full">
            <h1 className="main-headings">
                Bringing Ideas Into&nbsp;
                <TypeAnimation
                    preRenderFirstString={true}
                    sequence={[
                        'Reality.',
                        2000,
                        'Life.',
                        2000,
                    ]}
                    cursor={true}
                    repeat={Infinity}
                    speed={{ type: 'keyStrokeDelayInMs', value: 200 }}
                    className="main-headings text-accent"
                />
            </h1>
            <h5 className="max-w-[768px]">Hello there! I&apos;m Gelo, a Front End Developer creating scalable, efficient, and user-friendly web applications.</h5>
            <div className="mt-16 flex items-center gap-4">
                <Button variant='default' size="lg" className="w-max" asChild>
                    <Link href='#contact' className="gap-2">
                        <FontAwesomeIcon icon={faComments} className="w-8 h-8" />
                        Let&apos;s Talk
                    </Link>
                </Button>
            </div>
        </header>
    )
}