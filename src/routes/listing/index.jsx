import { useNavigate } from "react-router-dom";
import { useCarDataStore } from "../../store/useAppStore";
import CarFilters from "../../components/Filters";
import SortCars from "../../components/SortCars";
import { CarListingCard } from "../..//components/CarListingCard";
import { useFetchCars } from "../../hooks/useFetchCars";
import { useMemo } from "react";

const CarListing = () => {
    const { filteredCars } = useCarDataStore();

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
        <div className="w-full h-auto grid grid-cols-5 gap-4 py-6">
            <div className="col-span-1">
                <CarFilters />
            </div>
            <div className="col-span-4">
                <div className="w-full flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-lg">{finalCarList?.length} Cars</h3>
                    <div className="flex items-center gap-x-2">
                        {searchQuery && <button className="text-blue-500 cursor-pointer" onClick={handleClearSearch}>Clear search</button>}
                        <SortCars />
                    </div>
                </div>
                <div className="grid grid-cols-3 auto-rows-min gap-4">
                    {finalCarList?.map((car, index) => (
                        <CarListingCard carDetails={car} key={index} handleOpenCarDetailsPage={() => openCarDetailsPage(car?.id)} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CarListing;
