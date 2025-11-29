import { useNavigate } from "react-router-dom";
import { useCarDataStore } from "../../store/useAppStore";
import CarFilters from "../../components/Filters";
import SortCars from "../../components/SortCars";
import { CarListingCard } from "../..//components/CarListingCard";
import { useFetchCars } from "../../hooks/useFetchCars";
import { useMemo, useState } from "react";
import { FiFilter } from "react-icons/fi";
import { CarListingCardLoader } from "../../components/Loaders/ListingCardLoader";

const CarListing = () => {
    const [showFilters, setShowFilters] = useState(false);
    const { filteredCars, isLoading } = useCarDataStore();

    const params = new URLSearchParams(window.location.search);
    const searchQuery = params.get("search");

    const finalCarList = useMemo(() => {
        if (searchQuery) {
            return filteredCars?.filter(car => car?.name?.toLowerCase().includes(searchQuery.toLowerCase()) || car?.brand?.toLowerCase().includes(searchQuery.toLowerCase()));
        }
        return filteredCars;
    }, [filteredCars, searchQuery]);

    const navigate = useNavigate();

    useFetchCars();


    const openCarDetailsPage = (carId) => {
        navigate(`/details/${carId}`)
    }

    const handleClearSearch = () => {
        navigate("/listing")
    }


    return (
        <div className="w-full sm:max-w-[1280px] h-auto grid grid-cols-5 gap-4 py-6 px-4">
            <div className="col-span-1 hidden sm:block">
                <CarFilters />
            </div>
            <div className="col-span-5 sm:col-span-4">
                <div className="w-full flex items-center justify-between mb-2">
                    <div className="flex items-center gap-x-2">
                        <div className="block sm:hidden">
                            <p className="flex items-center gap-x-1 border rounded-md p-2" onClick={() => setShowFilters(true)}>Filters <FiFilter /></p>
                            {showFilters &&
                                <div className="absolute z-20 w-full max-w-screen top-14 left-0 right-0 bg-white">
                                    <CarFilters handleClose={() => setShowFilters(false)} />
                                </div>
                            }
                        </div>
                        <h3 className="hidden sm:block font-semibold text-lg">{finalCarList?.length} Cars</h3>
                    </div>
                    <div className="flex items-center gap-x-2">
                        {searchQuery && <button className="text-blue-500 cursor-pointer" onClick={handleClearSearch}>Clear search</button>}
                        <SortCars />
                    </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 auto-rows-min gap-2 sm:gap-4">
                    {
                        isLoading ?
                            Array.from({ length: 6 }).map((_, index) => (
                                <CarListingCardLoader key={index} />
                            ))
                            :
                            finalCarList?.length > 0
                                ?
                                finalCarList?.map((car, index) => (
                                    <CarListingCard carDetails={car} key={index} handleOpenCarDetailsPage={() => openCarDetailsPage(car?.id)} />
                                ))
                                :
                                <div>No cars found</div>
                    }
                </div>
            </div>
        </div>
    );
};

export default CarListing;
