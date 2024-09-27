import { faCode, faLaptopCode } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Services() {
    return (
        <section id="services" className="container h-max mt-56 mb-28">
            <h2 className="font-bold">Services I offer<span className="text-accent">.</span></h2>
            <div className="grid grid-cols-1 md:grid-rows-2 mt-2 gap-2 h-full">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    <div className="cols-span-1">
                        <div className="h-max border-l-4 ps-3 border-accent">
                            <p>
                                I offer a range of services including web development, custom software solutions, and API integration.
                                With my expertise in the latest technologies and best practices, I aim to deliver solutions that meet
                                your <span className="text-accent">needs</span> and exceed your <span className="text-accent">expectations</span>.
                            </p>
                        </div>
                    </div>
                    <div className="cols-span-1">
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
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    <div className="cols-span-1">
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
                    </div>
                    <div className="cols-span-1">
                        <div className="flex flex-wrap md:flex-nowrap justify-between gap-2 h-full">
                            <div className="grid gap-4 bg-secondary rounded-lg p-4 w-full">
                                <h6 className="flex items-center gap-2 font-bold">
                                    <FontAwesomeIcon icon={faCode} className="w-8 h-8 bg-primary rounded-full p-1" />
                                    API INTEGRATION
                                </h6>
                                <p>
                                    I can incorporate third-party APIs into your systems, enabling the use of external services.
                                </p>
                            </div>
                            <div className="grid gap-4 bg-accent rounded-lg p-4 w-full">
                                <h6 className="flex items-center gap-2 font-bold">
                                    <FontAwesomeIcon icon={faLaptopCode} className="w-8 h-8 bg-foreground text-accent rounded-full p-1" />
                                    RESPONSIVE WEB DESIGN
                                </h6>
                                <p>
                                    I can create websites for you that work seamlessly on various devices and screen sizes.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}