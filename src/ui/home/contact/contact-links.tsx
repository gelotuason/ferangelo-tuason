import Link from "next/link"

interface ContactLinkProps {
    href: string,
    text: string,
    icon: React.ReactNode
}

export function ContactLink({ href, icon, text }: ContactLinkProps) {
    return (
        <Link href={href} target="_blank" className="flex justify-center items-center gap-2 hover:opacity-70">
            {icon}
            {text}
        </Link>
    )
}
