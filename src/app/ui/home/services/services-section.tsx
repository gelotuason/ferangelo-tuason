import ServicesDescripton from "./services-desc";
import { WebDevelopment, CustomSoftwareSolutions, ApiIntegration, ResponsiveWebDesign } from "./my-services";

export default function ServicesSection() {
    return (
        <section id="services" className="container h-max mt-56 mb-28">
            <h1 className="section-headings">Services I offer<span className="text-accent">.</span></h1>
            <div className="grid grid-cols-1 md:grid-rows-2 mt-2 gap-2 h-full">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    <div className="cols-span-1">
                        <ServicesDescripton />
                    </div>
                    <div className="cols-span-1">
                        <WebDevelopment />
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    <div className="cols-span-1">
                        <CustomSoftwareSolutions />
                    </div>
                    <div className="cols-span-1">
                        <div className="flex flex-wrap md:flex-nowrap justify-between gap-2 h-full">
                            <ApiIntegration />
                            <ResponsiveWebDesign />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}