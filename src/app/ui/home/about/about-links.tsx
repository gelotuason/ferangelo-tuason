import { Button } from "@/components/ui/button";
import Link from "next/link";
import { DownloadIcon } from "@radix-ui/react-icons";

export function DownloadCvLink() {
    return (
        <Button variant='default' size="lg" className="w-full mt-6 md:mt-0" asChild>
            <Link href='https://drive.google.com/file/d/1j7TuFjjHOkt0MeX4452L5I7alUGf9opP/view?usp=drive_link' target="_blank" className="gap-2">
                <DownloadIcon className="w-5 h-5" />
                Download CV
            </Link>
        </Button>
    )
}