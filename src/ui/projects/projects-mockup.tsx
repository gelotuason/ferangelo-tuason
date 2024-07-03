import Image from "next/image";
import { LiveURL, SourceCode } from "./project-links";

const projectMockupProperties = [
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
        name: 'Valosource',
        imageSrc: '/projects/valosource.png',
        liveUrl: 'https://project3-api-driven-website-ecru.vercel.app/',
        sourceCodeUrl: 'https://github.com/gelotuason/Project3_API-Driven_Website'
    }
]

export default function ProjectsMockup() {
    return (
        projectMockupProperties.map(property => {
            return (
                <div key={property.name} className="group relative hover:scale-105 transition-scale duration-150">
                    <Image
                        src={property.imageSrc}
                        width={500}
                        height={500}
                        alt="Project Mockup"
                        className="object-cover rounded-xl"
                    />
                    <div className="absolute inset-0 text-primary bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 gap-2 flex flex-col justify-center items-center transition-opacity duration-150 rounded-xl">
                        <LiveURL liveUrl={property.liveUrl} />
                        <SourceCode sourceCodeUrl={property.sourceCodeUrl} />
                    </div>
                </div>
            )
        })
    )
}