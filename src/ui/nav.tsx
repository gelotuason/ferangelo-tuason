'use client';

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMediaQuery } from "@/hooks/media-query";
import { HamburgerMenuIcon, Cross1Icon } from "@radix-ui/react-icons";
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer";
import { useState } from "react";

const links = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Projects', href: '/projects' },
    { name: 'Contact', href: '/contact' }
]

export default function Nav() {
    const isDesktop = useMediaQuery('(min-width: 768px)');

    return (
        <nav className="container relative mt-2 z-10 flex items-center justify-between">
            <Link href='/'>
                <h2 className="scroll-m-20 text-3xl font-semibold tracking-tight first:mt-0">
                    Gelo<span className="text-accent">.</span>
                </h2>
            </Link>
            {
                isDesktop ? <DesktopNavMenu /> : <MobileNavMenu />
            }
        </nav>
    )
}

function DesktopNavMenu() {
    const pathname = usePathname();

    return (
        <div>
            {
                links.map(link => {
                    return (
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
                    )
                })
            }
        </div>
    )
}

function MobileNavMenu() {
    const pathname = usePathname();
    const [open, setOpen] = useState(false);

    return (
        <Drawer open={open} onOpenChange={setOpen} direction="right">
            <DrawerTrigger>
                <HamburgerMenuIcon className="w-6 h-6" />
            </DrawerTrigger>
            <DrawerContent>
                <DrawerHeader>
                    <DrawerTitle />
                    <DrawerDescription />
                    <DrawerClose className="flex justify-start">
                        <Cross1Icon className="w-6 h-6" />
                    </DrawerClose>
                </DrawerHeader>
                {
                    links.map(link => {
                        return (
                            <Link
                                key={link.name}
                                href={link.href}
                                onClick={() => setOpen(false)}
                                className={clsx(
                                    'hover:text-accent flex justify-center px-4 py-2',
                                    {
                                        'text-accent': pathname === link.href
                                    }
                                )}
                            >
                                {link.name}
                            </Link>
                        )
                    })
                }
            </DrawerContent>
        </Drawer>
    )
}