import { WHATSAPP_API_URL } from "../../constants";
import { handleSellingEnquiry } from "../../utils";
import { trackEvent } from "../../utils/gaEvents";
import Logo from '../../assets/sri-ganesh-logo-white.png';

import { Phone, Heart, HandCoins, UserStar } from "lucide-react";

export const Header = () => {
    const handleTracking = () => {
        trackEvent("contact_seller", {
            method: "whatsapp",
        });
    }

    return (
        <div className="sticky top-0 w-full z-100 px-2 sm:px-4 flex items-center justify-between bg-blue-600 shadow-blue-100 shadow-sm">
            <a href="/" aria-label="Ganesh Cars Home" className="flex items-center gap-2">
                {/* <span className="font-bold text-xl sm:text-2xl text-white">Ganesh</span> */}
                <img src={Logo} alt="Ganesh Cars Logo" className="w-auto h-12" />
            </a>
            <div className="flex items-center gap-2 py-3">
                <div className="flex items-center gap-x-2 mr-4 sm:mr-10">
                    <a href="/reviews" className="flex flex-col items-center cursor-pointer">
                        <UserStar size={20} color="white" />
                        <span className="text-white text-xs font-medium">Reviews</span>
                    </a>
                    <button className="flex flex-col items-center cursor-pointer" onClick={handleSellingEnquiry}>
                        <HandCoins size={20} color="white" />
                        <span className="text-white text-xs font-medium">Sell/Exchange</span>
                    </button>
                    <button className="flex flex-col items-center cursor-pointer">
                        <Heart size={20} color="white" />
                        <span className="text-white text-xs font-medium">Shortlisted</span>
                    </button>
                </div>
                <a
                    href={`${WHATSAPP_API_URL}&text=Hi%2C%20I%20am%20interested%20in%20one%20of%20your%20cars`}
                    target="_blank"
                    className="flex flex-col gap-1 items-center text-white rounded-lg transition"
                    onClick={() => handleTracking()}
                >
                    <span className="text-xs hidden sm:block">Chat on</span>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="#00ff00"
                        viewBox="0 0 24 24"
                    >
                        <path d="M12 0C5.373 0 0 5.373 0 12c0 2.092.542 4.056 1.486 5.783L0 24l6.412-1.692A11.953 11.953 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.82a9.786 9.786 0 0 1-5.019-1.381l-.36-.215-3.812.993.992-3.724-.234-.382A9.784 9.784 0 1 1 21.82 12 9.803 9.803 0 0 1 12 21.82zm5.52-7.389c-.255-.127-1.51-.743-1.743-.828-.233-.085-.403-.127-.572.127s-.656.828-.805 1c-.148.17-.296.191-.551.064a7.939 7.939 0 0 1-2.338-1.44 8.756 8.756 0 0 1-1.62-2.002c-.17-.296-.018-.456.127-.601.13-.129.296-.339.446-.509.149-.17.198-.296.298-.493.101-.212.042-.382-.021-.509s-.572-1.374-.784-1.889c-.206-.496-.415-.429-.572-.437l-.488-.009a.937.937 0 0 0-.675.318c-.233.255-.887.867-.887 2.113 0 1.246.91 2.45 1.036 2.618.127.169 1.787 2.726 4.333 3.822.605.26 1.076.415 1.442.53.605.191 1.157.164 1.592.1.485-.072 1.51-.616 1.724-1.211.212-.596.212-1.107.148-1.211-.064-.106-.234-.17-.489-.297z" />
                    </svg>

                </a>
                <a href="tel:+918197560437" className="flex flex-col items-center text-white rounded-lg  transition">
                    <Phone size={21} className="sm:hidden ml-2" />
                    <span className="text-xs hidden sm:block">Call us at</span>
                    <span className="hidden sm:block">819-756-0437</span>
                </a>
                {/* <p className="flex items-center gap-1 text-white">Wishlist</p> */}
            </div>
        </div>
    )
}

export const SriGaneshLogo = ({ width = 200, height = 60 }) => {
    return (
        <svg
            viewBox="0 0 200 60"
            width={width}
            height={height}
            xmlns="http://www.w3.org/2000/svg"
        >
            {/* Background */}
            <rect width="200" height="60" fill="#ffffff" rx="4" />

            {/* Car icon (simplified) */}
            <g transform="translate(15, 15)">
                {/* Car body */}
                <ellipse cx="12" cy="18" rx="10" ry="6" fill="#1e40af" />
                <rect x="5" y="12" width="14" height="8" rx="2" fill="#1e40af" />

                {/* Windows */}
                <rect x="7" y="13" width="4" height="3" fill="#93c5fd" opacity="0.7" />
                <rect x="13" y="13" width="4" height="3" fill="#93c5fd" opacity="0.7" />

                {/* Wheels */}
                <circle cx="8" cy="24" r="2.5" fill="#1e40af" />
                <circle cx="16" cy="24" r="2.5" fill="#1e40af" />
            </g>

            {/* Text */}
            <text
                x="50"
                y="24"
                fontFamily="Arial, sans-serif"
                fontSize="13"
                fontWeight="bold"
                fill="#1e40af"
            >
                Sri Ganesh
            </text>
            <text
                x="50"
                y="42"
                fontFamily="Arial, sans-serif"
                fontSize="11"
                fill="#1e40af"
            >
                Auto Cars
            </text>
        </svg>
    );
};