'use client';

import { LetsTalk, ScrollDown } from "./hero-links";
import { TypeAnimation } from 'react-type-animation';

export default function HeroSection() {
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
            <h5 className="max-w-[768px]">Hello there! I'm Gelo, a Front End Developer creating scalable, efficient, and user-friendly web applications.</h5>
            <div className="mt-16 flex items-center gap-4">
                <LetsTalk />
                <ScrollDown />
            </div>
        </header>
    )
}