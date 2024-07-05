import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from "@fortawesome/free-solid-svg-icons";

export function DownloadCvLink() {
    return (
        <Button variant='default' size="lg" className="w-full mt-6 md:mt-0" asChild>
            <Link href='https://drive.google.com/file/d/1j7TuFjjHOkt0MeX4452L5I7alUGf9opP/view?usp=drive_link' target="_blank" className="gap-2">
                <FontAwesomeIcon icon={faDownload} className="w-6 h-6" />
                Download CV
            </Link>
        </Button>
    )
}