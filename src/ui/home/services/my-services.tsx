import { CodeIcon } from "@radix-ui/react-icons"

export function WebDevelopment() {
    return (
        <div className="grid gap-4 text-center bg-secondary rounded-lg p-4">
            <h1 className="flex justify-center items-center gap-2 font-bold">
                <CodeIcon className="w-8 h-8 rounded-full bg-primary p-1" />
                WEB DEVELOPMENT
            </h1>
            <p>
                From simple landing pages to complex web applications, I can bring your ideas to life
                using the latest web technologies such as ReactJS, NextJS, and Firebase.
            </p>
        </div>
    )
}

export function CustomSoftwareSolutions() {
    return (
        <div className="grid gap-4 text-center bg-accent rounded-lg p-4">
            <h1 className="flex justify-center items-center gap-2 font-bold text-">
                <CodeIcon className="w-8 h-8 rounded-full text-accent bg-foreground p-1" />
                CUSTOM SOFTWARE SOLUTIONS
            </h1>
            <p>
                Looking for a custom solution for your business? I’m at your service.
                From basic landing pages to complex web applications, I can turn your ideas into reality.
            </p>
        </div>
    )
}

export function ApiIntegration() {
    return (
        <div className="grid gap-4 text-center bg-secondary rounded-lg p-4">
            <h1 className="flex justify-center items-center gap-2 font-bold">
                <CodeIcon className="w-8 h-8 rounded-full bg-primary p-1" />
                API INTEGRATION
            </h1>
            <p>
                I can incorporate third-party APIs into your systems, enabling the use of external services.
            </p>
        </div>
    )
}

export function ResponsiveWebDesign() {
    return (
        <div className="grid gap-4 text-center bg-accent rounded-lg p-4">
            <h1 className="flex justify-center items-center gap-2 font-bold text-">
                <CodeIcon className="w-8 h-8 rounded-full text-accent bg-foreground p-1" />
                RESPONSIVE WEB DESIGN
            </h1>
            <p>
                I can create websites for you that work seamlessly on various devices and screen sizes.
            </p>
        </div>
    )
}