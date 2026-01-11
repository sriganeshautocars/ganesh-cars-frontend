import { getNumberInStringFormat, getOrdinalNumber, getTitleCase } from "../../../../utils";
import { GrLocation } from "react-icons/gr";

export const WishlistCard = ({ carDetails, handleOpenCarDetailsPage, onRemove }) => {
    const handleRemoveFromWishlist = (e) => {
        e.stopPropagation();
        const likedCarIds = JSON.parse(localStorage.getItem("liked_cars")) || [];
        const updatedLikedCarIds = likedCarIds.filter(id => id !== carDetails?.id);
        localStorage.setItem("liked_cars", JSON.stringify(updatedLikedCarIds));
        onRemove(carDetails?.id);
    };

    return (
        <div
            className="w-full h-fit border border-gray-300 rounded-lg overflow-hidden flex flex-col sm:flex-row sm:items-start cursor-pointer hover:shadow-md transition-shadow relative"
            key={carDetails?.id}
            title={carDetails?.name}
            onClick={() => !carDetails?.is_on_hold && handleOpenCarDetailsPage(carDetails?.id)}
        >
            <img
                src={carDetails?.thumbnail}
                className="w-full sm:w-64 h-40  object-cover sm:flex-shrink-0"
                width={100}
                height={100}
                alt="Car Image"
                loading="lazy"
            />
            <div className="flex flex-col sm:items-start justify-between p-3 flex-grow gap-y-2 sm:gap-y-0">
                <div className="w-full flex items-start justify-between">
                    <div className="flex flex-col items-start justify-start sm:mb-3">
                        <p className="flex items-center justify-start gap-x-1.5 sm:gap-x-2 font-medium text-sm">
                            <span>{carDetails?.reg_year}</span>
                            <span>{getTitleCase(carDetails?.brand)}</span>
                            <span>{getTitleCase(carDetails?.name)}</span>
                        </p>
                        <span className="font-normal text-xs text-gray-600">
                            {carDetails?.variant}
                        </span>
                        <span className="font-semibold text-sm">{`₹ ${getNumberInStringFormat(carDetails?.price)}`}</span>
                    </div>
                    <button
                        onClick={handleRemoveFromWishlist}
                        className="hidden sm:block px-4 py-2 bg-red-500 hover:bg-red-600 text-white font-medium rounded-md transition-colors flex-shrink-0"
                        title="Remove from wishlist"
                    >
                        Remove
                    </button>
                </div>

                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-0">
                    <div className="flex items-center justify-start flex-wrap gap-2">
                        <span className="min-w-12 px-1 py-0.5 sm:px-2 sm:py-1 bg-blue-100 rounded-md text-xs">{`${getNumberInStringFormat(carDetails?.km_driven)} km`}</span>
                        <span className="min-w-12 px-1 py-0.5 sm:px-2 sm:py-1 bg-blue-100 rounded-md text-xs">{carDetails?.fuel_type}</span>
                        <span className="min-w-12 px-1 py-0.5 sm:px-2 sm:py-1 bg-blue-100 rounded-md truncate inline-block max-w-24 text-xs">{carDetails?.transmission_type}</span>
                        <span className="min-w-12 px-1 py-0.5 sm:px-2 sm:py-1 bg-blue-100 rounded-md text-center text-xs">{`${getOrdinalNumber(carDetails?.ownership)} owner`}</span>

                    </div>
                </div>
                <div className="flex items-center justify-start gap-1 mt-2">
                    <GrLocation size={14} />
                    <span>{carDetails?.location}</span>
                </div>
            </div>

            {/* Remove Button - Mobile */}
            <button
                onClick={handleRemoveFromWishlist}
                className="sm:hidden mx-3 mb-3 px-4 py-2 bg-red-500 hover:bg-red-600 text-white font-medium rounded-md transition-colors"
                title="Remove from wishlist"
            >
                Remove
            </button>
            {/* On Hold Overlay */}
            {carDetails?.is_on_hold && (
                <div className="absolute top-0 right-0 left-0 bottom-0 bg-gray-400/50 cursor-not-allowed z-20 rounded-lg flex items-center justify-center">
                    <p className="bg-blue-400 text-white font-medium px-4 py-2 rounded">On Hold</p>
                </div>
            )}
        </div>
    );
};