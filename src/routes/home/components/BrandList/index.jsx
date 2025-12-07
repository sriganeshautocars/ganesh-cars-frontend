import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { ChevronRight } from "lucide-react";
import { Search } from "lucide-react";

import { LOGOS } from "../../../../constants";

export const BrandList = ({ handleViewAllCars }) => {
    const [searchQuery, setSearchQuery] = useState("");

    const navigate = useNavigate();

    const handleKeydown = (e) => {
        if (e.key === "Enter" || e.type === "click") {
            handleFilterNavigation(searchQuery);
        }
    }

    const handleFilterNavigation = (value) => {
        const searchQueryParam = value.trim() ? `?search=${value.trim()}` : "";
        navigate(`/listing${searchQueryParam}`);
    }

    return <div className="w-full max-w-[950px] flex flex-col gap-y-4 items-center justify-center px-4">
        <button className="px-3 py-1.5 bg-blue-600 hover:bg-blue-500 text-white rounded-md sm:hidden" onClick={handleViewAllCars}>View All Cars</button>
        <div className="w-full flex items-center border border-blue-500 rounded-full">
            <div>
                <Search className="ml-3 text-gray-700" />
            </div>
            <input
                type="text"
                placeholder="Search by car name or brand..."
                className="w-full border-none outline-none p-3"
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={handleKeydown}
            />
            <div className="w-10 min-w-10 h-10 mr-1 rounded-full flex items-center justify-center bg-blue-600 cursor-pointer" aria-label="Search car" tabIndex={0} onClick={handleKeydown}>
                <ChevronRight color="white" />
            </div>
        </div>
        <div className="grid grid-cols-5 sm:flex flex-wrap items-center justify-center gap-2 sm:gap-6">
            {LOGOS.map((logo, index) => {
                return (
                    <div className="px-2 py-1.5 rounded-lg bg-gray-300 cursor-pointer" key={index}>
                        <img
                            src={logo?.logo}
                            alt="image"
                            className="w-10 h-10 object-contain"
                            onClick={() => handleFilterNavigation(logo?.id)}
                            loading="lazy"
                        />
                    </div>
                );
            })}
        </div>
    </div>
}