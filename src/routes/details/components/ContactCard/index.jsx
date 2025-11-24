import { useState, useEffect } from "react"

import { GrLocation } from "react-icons/gr"
import { FcLike } from "react-icons/fc"
import { DROPDOWN_VALUES_MAP } from "../../../../constants"
import { getNumberInLocalString, getNumberInStringFormat, getOrdinalNumber } from "../../../../utils"
import { GoHeart } from "react-icons/go"


export const ContactCard = ({ carDetails }) => {
    const [isLiked, setIsLiked] = useState(false);

    useEffect(() => {
        const likedCarIds = getLikedCarsFromStorage();
        if (likedCarIds.includes(carDetails?.id)) {
            setIsLiked(true);
        }
    }, [carDetails?.id]);

    const handleLikeToggle = () => {
        const likedCarIds = getLikedCarsFromStorage();
        let updatedLikedCarIds;
        if (likedCarIds.includes(carDetails?.id)) {
            updatedLikedCarIds = likedCarIds.filter((id) => id !== carDetails?.id);
            setIsLiked(false);
        } else {
            updatedLikedCarIds = [...likedCarIds, carDetails?.id];
            setIsLiked(true);
        }
        saveLikedCarsToStorage(updatedLikedCarIds);
    };

    // Helper function to get liked car IDs from localStorage
    const getLikedCarsFromStorage = () => {
        const likedCarList = localStorage.getItem("liked_cars");
        return likedCarList ? JSON.parse(likedCarList) : [];
    };

    // Helper function to save liked car IDs to localStorage
    const saveLikedCarsToStorage = (likedCarIds) => {
        localStorage.setItem("liked_cars", JSON.stringify(likedCarIds));
    };

    const getWhatsappText = (car) => {
        return encodeURI(`Hello, I am interested in the car ${car?.reg_year} ${car?.brand} ${car?.name} ${car?.variant} listed at ₹${getNumberInStringFormat(car?.price)}. Please provide more details.`)
    }
    return (
        <div className="w-full h-min shadow rounded-lg p-5 relative grid gap-4">
            <div className="w-full">
                <div className="text-2xl font-semibold w-5/6 flex items-center flex-wrap gap-x-2">
                    <span>{carDetails?.reg_year}</span>
                    <span>{carDetails?.brand}</span>
                    <span>{carDetails?.name}</span>
                    <span className="text-gray-800">{carDetails?.variant}</span>
                </div>
                <div onClick={handleLikeToggle} className="absolute top-4.5 right-4 z-10 cursor-pointer flex items-center justify-center w-8 h-8">
                    {isLiked ? <FcLike size={24} /> : <GoHeart size={24} />}
                </div>
            </div>
            <div className="w-full flex flex-wrap items-center justify-start gap-2">
                <span className="min-w-12 px-1 py-0.5 bg-blue-100 rounded-md">{`${getNumberInLocalString(carDetails?.km_driven)} km`}</span>
                <span className="min-w-12 px-1 py-0.5 bg-blue-100 rounded-md">{DROPDOWN_VALUES_MAP[carDetails?.fuel_type] || carDetails?.fuel_type}</span>
                <span className="min-w-12 px-1 py-0.5 bg-blue-100 rounded-md">{DROPDOWN_VALUES_MAP[carDetails?.transmission_type] || carDetails?.transmission_type}</span>
                <span className="min-w-12 px-1 py-0.5 bg-blue-100 rounded-md text-center">{`${getOrdinalNumber(carDetails?.ownership)} Owner`}</span>
            </div>
            <p className="flex items-center gap-x-2"><GrLocation /><span>{carDetails?.location}</span></p>
            <p className="font-semibold text-2xl">{`₹ ${getNumberInStringFormat(carDetails?.price)}`}</p>
            <a
                href={`https://api.whatsapp.com/send?phone=919901103469&text=${getWhatsappText(carDetails)}`}
                target="_blank"
                className="w-full px-10 py-3 bg-blue-800 text-xl text-white text-center rounded-lg cursor-pointer hover:bg-blue-900"
            >
                Contact For Booking
            </a>
        </div>
    )
}