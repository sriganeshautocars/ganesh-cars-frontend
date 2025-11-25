import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { LOGOS } from "../../../../constants";



export const BrandList = ({ handleViewAllCars }) => {
    const [searchQuery, setSearchQuery] = useState("");

    const navigate = useNavigate();

    const handleKeydown = (e) => {
        if (e.key === "Enter") {
            handleFilterNavigation(searchQuery);
        }
    }

    const handleFilterNavigation = (value) => {
        navigate(`/listing?search=${value}`);
    }

    return <div className="flex flex-col gap-y-4 items-center justify-center w-full">
        <button className="px-3 py-1.5 bg-blue-600 hover:bg-blue-500 text-white rounded-md sm:hidden" onClick={handleViewAllCars}>View All Cars</button>
        <input
            type="text"
            placeholder="Search by car name or brand..."
            className="w-full p-3 rounded-2xl border border-gray-300 outline-indigo-400"
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={handleKeydown}
        />
        <div className="grid grid-cols-5 sm:flex flex-wrap items-center gap-2 sm:gap-6">
            {LOGOS.map((logo, index) => {
                return (
                    <div className="px-2 py-1.5 rounded-lg bg-gray-300 cursor-pointer" key={index}>
                        <img
                            src={logo?.logo}
                            alt="image"
                            className="w-10 h-10 object-contain"
                            onClick={() => handleFilterNavigation(logo?.id)}
                        />
                    </div>
                );
            })}
            <button className="hidden sm:block px-3 py-3 rounded-md bg-blue-600 text-white hover:bg-blue-700 cursor-pointer" onClick={handleViewAllCars}>
                View All Cars
            </button>
        </div>
    </div>
}