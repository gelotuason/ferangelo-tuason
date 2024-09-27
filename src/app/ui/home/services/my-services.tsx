import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faLaptopCode } from "@fortawesome/free-solid-svg-icons";

export function WebDevelopment() {
    return (
        <div className="grid gap-4 bg-secondary rounded-lg p-4 w-full h-full">
            <h6 className="flex items-center gap-2 font-bold">
                <FontAwesomeIcon icon={faCode} className="w-8 h-8 bg-primary rounded-full p-1" />
                WEB DEVELOPMENT
            </h6>
            <p>
                From simple landing pages to complex web applications, I can bring your ideas to life
                using the latest web technologies such as ReactJS, NextJS, and Firebase.
            </p>
        </div>
    )
}

export function CustomSoftwareSolutions() {
    return (
        <div className="grid gap-4 bg-accent rounded-lg p-4 w-full h-full">
            <h6 className="flex items-center gap-2 font-bold text-">
                <FontAwesomeIcon icon={faLaptopCode} className="w-8 h-8 bg-foreground text-accent rounded-full p-1" />
                CUSTOM SOFTWARE SOLUTIONS
            </h6>
            <p>
                Looking for a custom solution for your business? I’m at your service.
                From basic landing pages to complex web applications, I can turn your ideas into reality.
            </p>
        </div>
    )
}

export function ApiIntegration() {
    return (
        <div className="grid gap-4 bg-secondary rounded-lg p-4 w-full">
            <h6 className="flex items-center gap-2 font-bold">
                <FontAwesomeIcon icon={faCode} className="w-8 h-8 bg-primary rounded-full p-1" />
                API INTEGRATION
            </h6>
            <p>
                I can incorporate third-party APIs into your systems, enabling the use of external services.
            </p>
        </div>
    )
}

export function ResponsiveWebDesign() {
    return (
        <div className="grid gap-4 bg-accent rounded-lg p-4 w-full">
            <h6 className="flex items-center gap-2 font-bold">
                <FontAwesomeIcon icon={faLaptopCode} className="w-8 h-8 bg-foreground text-accent rounded-full p-1" />
                RESPONSIVE WEB DESIGN
            </h6>
            <p>
                I can create websites for you that work seamlessly on various devices and screen sizes.
            </p>
        </div>
    )
}