import { Link } from "react-router-dom";

import { ImFacebook2 } from "react-icons/im";
import { GrInstagram } from "react-icons/gr";
import { BsTwitterX } from "react-icons/bs";
import { handleSellingEnquiry } from "../../utils";

export const Footer = () => {
    return <div className="w-full px-4 sm:px-20 py-3 bg-blue-100 flex items-start justify-between gap-x-2">
        <div className="flex flex-col items-start justify-start gap-y-2">
            <h3 className="font-semibold text-lg">Company</h3>
            <Link to="/about-us">About Us</Link>
            <Link to="/why-us">Why Us</Link>
            <Link to="/reviews">Customer Reviews</Link>
            <Link to="/privacy-policy">Privacy Policy</Link>
        </div>
        <div className="flex flex-col items-start justify-start gap-y-2">
            <h3 className="font-semibold text-lg">Explore</h3>
            <Link to="/listing">Buy pre-owned car</Link>
            <span onClick={handleSellingEnquiry} className="cursor-pointer">Sell/Exchange my car</span>
        </div>
        <div className="flex flex-col items-start justify-start gap-y-2">
            <h3 className="font-semibold text-lg">Help and Support</h3>
            <Link to="/terms-conditions">Terms and Conditions</Link>

        </div>
        <div className="flex flex-col items-start justify-start gap-y-2">
            <span className="font-semibold text-lg">Social Links</span>
            <div className="flex flex-col sm:flex-row items-center justify-start gap-y-2 sm:gap-x-2">
                <a href="https://www.facebook.com/" aria-label="Open Facebook" target="_blank" className="p-2 border rounded-lg hover:bg-blue-200"><ImFacebook2 /></a>
                <a href="https://www.instagram.com/sri_ganesh_auto_cars/" aria-label="Open Instagram" target="_blank" className="p-2 border rounded-lg hover:bg-blue-200"><GrInstagram /></a>
                <a href="https://www.twitter.com/" target="_blank" aria-label="Open Twitter" className="p-2 border rounded-lg hover:bg-blue-200"><BsTwitterX /></a>
            </div>

        </div>
    </div>
}