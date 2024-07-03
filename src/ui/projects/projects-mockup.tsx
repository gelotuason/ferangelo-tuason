import Image from "next/image";
import { LiveURL, SourceCode } from "./project-links";

const imageProperties = [
    {
        src: '/projects/emd.png'
    },
    {
        src: '/projects/sma.png'
    },
    {
        src: '/projects/valosource.png'
    }
]

export default function ProjectsMockup() {
    return (
        imageProperties.map(property => {
            return (
                <div className="group relative hover:scale-105 transition-scale duration-150">
                    <Image
                        src={property.src}
                        width={500}
                        height={500}
                        alt="Project Mockup"
                        className="object-cover rounded-xl"
                    />
                    <div className="absolute inset-0 text-primary bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 gap-2 flex flex-col justify-center items-center transition-opacity duration-150 rounded-xl">
                        <LiveURL />
                        <SourceCode />
                    </div>
                </div>
            )

        })
    )
}