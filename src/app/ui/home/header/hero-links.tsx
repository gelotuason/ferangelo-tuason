import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faCircleDown, faComments } from "@fortawesome/free-solid-svg-icons";

export function LetsTalk() {
    return (
        <Button variant='default' size="lg" className="w-max" asChild>
            <Link href='#contact' className="gap-2">
                <FontAwesomeIcon icon={faComments} className="w-8 h-8" />
                Let's Talk
            </Link>
        </Button>
    )
}

export function ScrollDown() {
    return (
        <Link href='#about' className="flex items-center">
            <FontAwesomeIcon icon={faCircleDown} className="w-8 h-8" />
        </Link>
    )
}