import Link from "next/link";
import { Button } from "@/components/ui/button";

export function LiveURL({ liveUrl }: { liveUrl: string }) {

    return (
        <Button variant='secondary' asChild>
            <Link href={liveUrl} target="_blank">
                Live URL
            </Link>
        </Button>
    )

}

export function SourceCode({ sourceCodeUrl }: { sourceCodeUrl: string }) {
    return (
        <Button variant='secondary' asChild>
            <Link href={sourceCodeUrl} target="_blank">
                Source Code
            </Link>
        </Button>
    )
}