import { Button } from "@/components/ui/button";
import Link from "next/link";
import { PaperPlaneIcon } from "@radix-ui/react-icons";
import { DoubleArrowDownIcon } from "@radix-ui/react-icons";

export function LetsTalk() {
    return (
        <Button variant='default' className="w-max" asChild>
            <Link href='/contact' className="gap-2">
                <PaperPlaneIcon className="w-5 h-5" />
                Let's Talk
            </Link>
        </Button>
    )
}

export function ScrollDown() {
    return (
        <Link href='/'>
            <DoubleArrowDownIcon className="w-8 h-8 rounded-full border-t-2 border-b-2 border-accent text-accent p-1" />
        </Link>
    )
}