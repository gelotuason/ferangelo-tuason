import Link from "next/link";
import { Button } from "@/components/ui/button";

export function LiveURL() {
    return (
        <Button variant='secondary' asChild>
            <Link href='/'>
                Live URL
            </Link>
        </Button>
    )
}

export function SourceCode() {
    return (
        <Button variant='secondary' asChild>
            <Link href='/'>
                Source Code
            </Link>
        </Button>
    )
}