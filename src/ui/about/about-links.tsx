import { Button } from "@/components/ui/button";
import Link from "next/link";
import { DownloadIcon } from "@radix-ui/react-icons";

export function DownloadCV() {
    return (
        <Button variant='default' className="w-full mt-10" asChild>
            <Link href='/' className="gap-2">
                <DownloadIcon className="w-5 h-5" />
                Download CV
            </Link>
        </Button>
    )
}