import { LetsTalk } from "./hero-links";
import { DoubleArrowDownIcon } from "@radix-ui/react-icons";
import Link from "next/link";

export default function HeroSection() {
    return (
        <header className="container h-screen grid place-content-center">
            <h1 className="scroll-m-20 text-4xl font-bold lg:text-8xl">
                Transforming Ideas Into <span className="text-accent">Reality</span> Through Code.
            </h1>
            <h2 className="scroll-m-20 text-3xl mt-10">
                Hello there! I’m Gelo, a Front End Developer creating <br />
                scalable, efficient, and user-friendly web applications.
            </h2>
            <div className="mt-20 flex items-center gap-4">
                <LetsTalk />
                <Link href='/'>
                    <DoubleArrowDownIcon className="w-8 h-8 rounded-full border-t-2 border-b-2 border-accent text-accent p-1" />
                </Link>
            </div>
        </header>
    )
}