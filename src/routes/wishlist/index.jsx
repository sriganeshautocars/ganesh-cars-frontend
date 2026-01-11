import { useMemo, useState } from "react";
import { useFetchCars } from "../../hooks/useFetchCars";
import { useCarDataStore } from "../../store/useAppStore";
import { WishlistCard } from "./components/WishlistCard";
import { useNavigate } from "react-router-dom";

const WishlistPage = () => {
    const { allCars, setShortlistedCarsCount } = useCarDataStore();
    const [likedCars, setLikedCars] = useState(() => {
        return JSON.parse(localStorage.getItem("liked_cars")) || [];
    });
    const navigate = useNavigate();

    useFetchCars();

    const wishlistedCars = useMemo(() => {
        return allCars.filter((car) => likedCars.includes(car.id));
    }, [allCars, likedCars]);

    const handleRemoveFromWishlist = (carId) => {
        setLikedCars((prev) => prev.filter((id) => id !== carId));
        setShortlistedCarsCount(likedCars.length - 1);
    };

    const handleOpenCarDetailsPage = (carId) => {
        navigate(`/details/${carId}`);
    };

    return (
        <div className="w-full sm:max-w-[1280px] mx-auto px-4 pt-4 pb-8">
            <h2 className="text-2xl font-semibold mb-6">My Wishlist</h2>
            {wishlistedCars.length === 0 ? (
                <div className="text-center py-12">
                    <p className="text-gray-500 text-lg">Your wishlist is empty</p>
                </div>
            ) : (
                <div className="flex flex-col gap-4">
                    {wishlistedCars.map((car) => (
                        <WishlistCard
                            key={car.id}
                            carDetails={car}
                            handleOpenCarDetailsPage={handleOpenCarDetailsPage}
                            onRemove={handleRemoveFromWishlist}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export default WishlistPage;
