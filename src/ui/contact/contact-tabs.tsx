import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faLink } from "@fortawesome/free-solid-svg-icons";
import { ContactLink } from "./contact-links";


const email = <FontAwesomeIcon icon={faEnvelope} className="w-5 h-5" />;
const linkedin = <FontAwesomeIcon icon={faLinkedinIn} className="w-5 h-5" />;
const whatsapp = <FontAwesomeIcon icon={faWhatsapp} className="w-5 h-5" />;
const link = <FontAwesomeIcon icon={faLink} className="w-5 h-5" />;

const contactData = [
    {
        tabsTriggerText: 'Email',
        tabsValue: 'email',
        tabsTriggerIcon: email,
        tabsContentText: 'gelotuason@gmail.com',
        tabsContentIcon: link,
        href: 'mailto:gelotuason@gmail.com'
    },
    {
        tabsTriggerText: 'Linkedin',
        tabsValue: 'linkedin',
        tabsTriggerIcon: linkedin,
        tabsContentText: 'Ferangelo Tuason',
        tabsContentIcon: link,
        href: 'https://www.linkedin.com/in/ferangelo-tuason/'
    },
    {
        tabsTriggerText: 'WhatsApp',
        tabsValue: 'whatsapp',
        tabsTriggerIcon: whatsapp,
        tabsContentText: '+63 936 702 7624',
        tabsContentIcon: link,
        href: 'https://wa.me/+639367027624'
    },
];

export default function ContactTabs() {
    return (
        <Tabs defaultValue="email">
            <>
                <TabsList className="mb-2">
                    {
                        contactData.map(data => (
                            <TabsTrigger value={data.tabsValue} key={data.tabsValue}>
                                {data.tabsTriggerIcon}
                                {data.tabsTriggerText}
                            </TabsTrigger>
                        ))
                    }
                </TabsList>
                {
                    contactData.map(data => (
                        <TabsContent value={data.tabsValue} key={data.tabsValue}>
                            <ContactLink
                                href={data.href}
                                icon={data.tabsContentIcon}
                                text={data.tabsContentText}
                            />
                        </TabsContent>
                    ))
                }
            </>
        </Tabs>
    )
}