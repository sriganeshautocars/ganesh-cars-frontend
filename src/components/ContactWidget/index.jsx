import { FaWhatsapp } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";

export const ContactWidget = () => {
    return (
        <div className="fixed bottom-[40vh] sm:bottom-0 right-0 flex flex-col items-center justify-center gap-y-2 p-2 z-50 bg-blue-600">
            <a
                href="https://whatsapp.com/channel/0029Vb7V2oq3WHTZXgJ0br36"
                target="_blank"
                className="p-2 border border-white rounded-lg"
            >
                <FaWhatsapp color="white" />
            </a>
            <a
                href="https://www.facebook.com/sriganesh.autocars/"
                target="_blank"
                className="p-2 border border-white rounded-lg"
            >
                <FaFacebook color="white" />
            </a>
            <a
                href="https://www.instagram.com/sri_ganesh_auto_cars/"
                target="_blank"
                className="p-2 border border-white rounded-lg"
            >
                <FaInstagram color="white" />
            </a>
            <a
                href="https://www.youtube.com/@sriganeshautocars6989"
                target="_blank"
                className="p-2 border border-white rounded-lg"
            >
                <FaYoutube color="white" />
            </a>
        </div>
    );
}