import { MdLocationOn } from "react-icons/md";
import { HiOutlineMail } from "react-icons/hi";
import { FiPhoneCall } from "react-icons/fi";
import { AiOutlineClockCircle } from "react-icons/ai";

import { ContactInfoItem } from "./ContactInfoItem";
import { MapItem } from "./MapItem";
import { useInView } from "../../../../hooks/useInView";

const CONTACT_INFO = {
    address: {
        icon: <MdLocationOn size={32} />,
        title: "Office Address",
        description: "N.H.66, NEar Abharan Motors, N.G.O Colony, Puttur P.O, Udupi - 576105, Karnataka, India"
    },
    email: {
        icon: <HiOutlineMail size={32} />,
        title: "Email Address",
        isEmail: true,
        description: "sriganeshautocarsudupi@gmail.com"

    },
    phone: {
        icon: <FiPhoneCall size={32} />,
        title: "Phone Number",
        isMobile: true,
        description: ['+91 9880041747', '+91 9480661747']
    },
    time: {
        icon: <AiOutlineClockCircle size={32} />,
        title: "Working Hours",
        description: "Mon - Sat: 9:00 AM - 6:00 PM"
    }
}

export const ContactUs = () => {
    const [ref, inView] = useInView({ threshold: 0.2, once: true });

    return (
        <div ref={ref} className={`w-full mb-3 sm:mb-0 transform transition-all duration-700 ease-out ${inView ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'}`}>
            <h3 className="font-bold text-xl">Contact Us</h3>
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 py-2 gap-6 sm:gap-10">
                <MapItem />
                <div className="flex flex-col items-start justify-start gap-y-3">
                    {
                        Object.values(CONTACT_INFO).map((info, index) => (
                            <ContactInfoItem
                                key={index}
                                icon={info?.icon}
                                title={info?.title}
                                description={info?.description}
                                isEmail={info?.isEmail}
                                isMobile={info?.isMobile}
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}