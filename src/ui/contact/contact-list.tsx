import { Link2Icon } from "@radix-ui/react-icons"
import Link from "next/link"

export function Email() {
    return (
        <Link href='mailto:gelotuason@gmail.com' className="flex justify-center items-center gap-2 hover:opacity-70">
            <Link2Icon className="w-6 h-6" />
            gelotuason@gmail.com
        </Link>
    )
}

export function Linkedin() {
    return (
        <Link href='https://www.linkedin.com/in/ferangelo-tuason/' target="_blank" className="flex justify-center items-center gap-2 hover:opacity-70">
            <Link2Icon className="w-6 h-6" />
            Ferangelo Tuason
        </Link>
    )
}

export function Mobile() {
    return (
        <div className="flex justify-center gap-2">
            +63 936 702 7624
        </div>
    )
}

export function WhatsApp() {
    return (
        <Link href='https://wa.me/+639367027624' target="_blank" className="flex justify-center items-center gap-2 hover:opacity-70">
            <Link2Icon className="w-6 h-6" />
            +63 936 702 7624
        </Link>
    )
}