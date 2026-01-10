import { useNavigate } from "react-router-dom";
import { useCarDataStore } from "../../store/useAppStore";
import CarFilters from "../../components/Filters";
import SortCars from "../../components/SortCars";
import { CarListingCard } from "../..//components/CarListingCard";
import { useFetchCars } from "../../hooks/useFetchCars";
import { useEffect, useMemo, useState } from "react";
import { FiFilter } from "react-icons/fi";
import { CarListingCardLoader } from "../../components/Loaders/ListingCardLoader";

const CarListing = () => {
    const [showFilters, setShowFilters] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const { filteredCars, isLoading } = useCarDataStore();

    const params = new URLSearchParams(window.location.search);
    const searchQuery = params.get("search");

    const navigate = useNavigate();

    useFetchCars();

    useEffect(() => {
        if (searchQuery) {
            setSearchTerm(searchQuery);
        }
    }, [searchQuery]);

    const isMatchingSearchTerm = (car, term) => {
        const lowerTerm = term?.toLowerCase();
        return car?.name?.toLowerCase().includes(lowerTerm) ||
            car?.brand?.toLowerCase().includes(lowerTerm) ||
            car?.reg_number?.toLowerCase().includes(lowerTerm) ||
            car?.location?.toLowerCase().includes(lowerTerm);
    }

    const finalCarList = useMemo(() => {
        let searchedCars = filteredCars;
        if (searchTerm) {
            searchedCars = filteredCars?.filter(car => isMatchingSearchTerm(car, searchTerm));
        }
        return searchedCars;
    }, [filteredCars, searchTerm]);

    const handleSearchTextChange = (e) => {
        if (e.target.value === "") {
            setSearchTerm("");
            navigate("/listing");
            return;
        }
        setSearchTerm(e.target.value);
    }


    const openCarDetailsPage = (carId) => {
        navigate(`/details/${carId}`)
    }

    const handleClearSearch = () => {
        setSearchTerm("");
        navigate("/listing")

    }


    return (
        <div className="w-full sm:max-w-[1280px] h-auto grid grid-cols-5 gap-4 py-6 px-4">
            <div className="col-span-1 hidden sm:block">
                <CarFilters />
            </div>
            <div className="col-span-5 sm:col-span-4">
                <input type="text" placeholder="Search by name, brand, reg no, location..." value={searchTerm} onChange={handleSearchTextChange} className="mb-4 w-full px-3 py-2 border border-gray-400 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" />
                <div>
                    {searchTerm &&
                        <div className="mb-2 flex items-center gap-x-2">
                            <p>Results for "<span className="font-medium">{searchTerm}</span>"</p>
                            <button className="h-full text-blue-500 font-medium cursor-pointer underline" onClick={handleClearSearch}>Clear search</button>
                        </div>}
                </div>
                <div className="w-full flex items-center justify-between mb-2">
                    <div className="flex items-center gap-x-2">
                        <div className="block sm:hidden">
                            <p className="flex items-center gap-x-1 border border-gray-500 rounded-md p-2" onClick={() => setShowFilters(true)}>Filters <FiFilter /></p>
                            {showFilters &&
                                <div className="absolute z-30 w-full max-w-screen top-14 left-0 right-0 bg-white">
                                    <CarFilters handleClose={() => setShowFilters(false)} />
                                </div>
                            }
                        </div>
                        <h3 className="hidden sm:block font-semibold text-lg">{`${finalCarList?.length} Car${finalCarList?.length !== 1 ? 's' : ''}`}</h3>
                    </div>
                    <div className="flex items-end gap-x-2">
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
