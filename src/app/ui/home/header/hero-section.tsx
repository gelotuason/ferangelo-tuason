'use client';

import { LetsTalk, ScrollDown } from "./hero-links";
import { TypeAnimation } from 'react-type-animation';

export default function HeroSection() {
    return (
        <header className="container h-screen grid content-center w-full">
            <h1 className="paragraph">Hello there! I'm Gelo, a Front End Developer,</h1>
            <h2 className="main-headings">
                Bringing Ideas Into
                <br />
                <TypeAnimation
                    preRenderFirstString={true}
                    sequence={[
                        'Reality',
                        2000,
                        'Life',
                        2000,
                    ]}
                    cursor={true}
                    repeat={Infinity}
                    speed={{ type: 'keyStrokeDelayInMs', value: 200 }}
                    className="main-headings text-accent"
                />
                &nbsp;Through Code.
            </h2>
            <h3 className="paragraph">
                I create scalable, efficient, and user-friendly web applications.
            </h3>
            <div className="mt-16 flex items-center gap-4">
                <LetsTalk />
                <ScrollDown />
            </div>
        </header>
    )
}