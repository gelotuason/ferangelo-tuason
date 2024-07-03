import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MobileIcon, EnvelopeClosedIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import { Email, Mobile, Linkedin, WhatsApp } from "./contact-list";

export default function ContactTabs() {
    return (
        <Tabs defaultValue="email" className="grid place-content-center">
            <TabsList className="mb-2">
                <TabsTrigger value="email">
                    <EnvelopeClosedIcon />
                    Email
                </TabsTrigger>
                <TabsTrigger value="mobile">
                    <MobileIcon className="w-6 h-6" />
                    Mobile
                </TabsTrigger>
                <TabsTrigger value="linkedin">
                    <LinkedInLogoIcon />
                    Linkedin
                </TabsTrigger>
                <TabsTrigger value="whatsapp">
                    WhatsApp
                </TabsTrigger>
            </TabsList>
            <TabsContent value="email">
                <Email />
            </TabsContent>
            <TabsContent value="mobile">
                <Mobile />
            </TabsContent>
            <TabsContent value="linkedin">
                <Linkedin />
            </TabsContent>
            <TabsContent value="whatsapp">
                <WhatsApp />
            </TabsContent>
        </Tabs>
    )
}