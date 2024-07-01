import Description from "./description";
import { WebDevelopment, CustomSoftwareSolutions, ApiIntegration, ResponsiveWebDesign } from "./my-services";

export default function ServicesSection() {
    return (
        <section className="container h-max">
            <h1 className="font-bold text-6xl">Services I offer<span className="text-accent">.</span></h1>
            <div className="grid grid-rows-2 mt-6 gap-2 h-full">
                <div className="grid grid-cols-2 gap-2">
                    <div className="cols-span-1">
                        <Description />
                    </div>
                    <div className="cols-span-1">
                        <WebDevelopment />
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-2">
                    <div className="cols-span-1">
                        <CustomSoftwareSolutions />
                    </div>
                    <div className="cols-span-1">
                        <div className="flex justify-between gap-2">
                            <ApiIntegration />
                            <ResponsiveWebDesign />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}