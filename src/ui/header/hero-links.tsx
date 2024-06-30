import { Button } from "@/components/ui/button";
import Link from "next/link";
import { PaperPlaneIcon } from "@radix-ui/react-icons";

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