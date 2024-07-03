'use client';

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

const footerLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
]

export default function Footer() {
    return (
        <footer className="bg-secondary-foreground py-4 h-max container relative flex flex-col items-center justify-center">
            <FooterMenu />
            <h2 className="scroll-m-20 text-3xl font-semibold tracking-tight mt-4 mb-4">
                Gelo<span className="text-accent">.</span>
            </h2>
            <p>© Ferangelo Tuason. All rights reserved.</p>
        </footer>
    )
}

function FooterMenu() {
    const pathname = usePathname();

    return (
        <div>
            {
                footerLinks.map(link => (
                    <Link
                        key={link.name}
                        href={link.href}
                        className={clsx(
                            'hover:text-accent px-4 py-2',
                            {
                                'text-accent': pathname === link.href
                            }
                        )}
                    >
                        {link.name}
                    </Link>
                ))
            }
        </div>
    )
}