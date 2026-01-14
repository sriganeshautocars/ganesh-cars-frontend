import { getCarList } from "../api";
import { useCarDataStore } from "../store/useAppStore";
import { useEffect } from "react";

export const useFetchCars = () => {
    const { setAllCars, setIsLoading, filteredCars } = useCarDataStore();

    useEffect(() => {
        if (filteredCars?.length === 0) {
            requestIdleCallback(() => getAllCars());
        }
    }, [])

    const getAllCars = async () => {
        try {
            setIsLoading(true);
            const carList = await getCarList();
            setAllCars(carList)
        } catch (error) {
            console.log("Error fetching car list in useFetchCars hook", error);
        } finally {
            setIsLoading(false);
        }
    }
}