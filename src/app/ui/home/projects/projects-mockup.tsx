import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const projects = [
    {
        name: 'Employee Management Dashboard',
        imageSrc: '/projects/emd.png',
        liveUrl: 'https://project4-employee-management-dashboard-coral.vercel.app/',
        sourceCodeUrl: 'https://github.com/gelotuason/Project4_Employee_Management_Dashboard'
    },
    {
        name: 'Social Media Application',
        imageSrc: '/projects/sma.png',
        liveUrl: 'https://social-media-app-eta-snowy.vercel.app/',
        sourceCodeUrl: 'https://github.com/gelotuason/Social_Media_App',
    },
    {
        name: 'Blackjack',
        imageSrc: '/projects/blackjack.png',
        liveUrl: 'https://blackjack-card-game-tau.vercel.app',
        sourceCodeUrl: 'https://github.com/gelotuason/blackjack-card-game'
    }
]

export default function ProjectsMockup() {
    return (
        projects.map(project => {
            return (
                <div key={project.name} className="group relative min-h-[320px] md:h-[480px]">
                    <Image
                        src={project.imageSrc}
                        fill
                        alt="Project Mockup"
                        className="object-cover rounded-xl"
                    />
                    <div className="absolute inset-0 text-primary bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 gap-2 flex flex-col justify-center items-center transition-opacity duration-150 rounded-xl">
                        <Button variant='secondary' asChild>
                            <Link href={project.liveUrl} target="_blank">
                                Live URL
                            </Link>
                        </Button>
                        <Button variant='secondary' asChild>
                            <Link href={project.sourceCodeUrl} target="_blank">
                                Github URL
                            </Link>
                        </Button>
                    </div>
                </div>
            )
        })
    )
}