import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

import { useInView } from "../../hooks/useInView";

import { BUDGET_TAB_OPTIONS, FUEL_TYPE_TAB_OPTIONS, OWNERSHIP_TAB_OPTIONS, TESTIMONIALS } from "../../constants";

import { Tabs } from "../../components/Tab";
import { useFetchCars } from "../../hooks/useFetchCars";
import { useCarDataStore } from "../../store/useAppStore";
import { BrandList } from "./components/BrandList";
import { HeroSection } from "./components/HeroSection";
import { ContactUs } from "./components/ContactUs";
import { CarCategorySectionLoader } from "../../components/Loaders/CarCategorySectionLoader";


const Home = () => {
    const [selectedBudgetTab, setSelectedBudgetTab] = useState(BUDGET_TAB_OPTIONS[0]);
    const [selectedOwnershipTab, setSelectedOwnershipTab] = useState(OWNERSHIP_TAB_OPTIONS[0])
    const [selectedFuelTypeTab, setSelectedFuelTypeTab] = useState(FUEL_TYPE_TAB_OPTIONS[0])

    const [budgetRef, budgetInView] = useInView({ threshold: 0.2, once: true });
    const [fuelTypeRef, fuelTypeInView] = useInView({ threshold: 0.2, once: true });
    const [ownershipRef, ownershipInView] = useInView({ threshold: 0.2, once: true });

    const { allCars, isLoading } = useCarDataStore();

    const navigate = useNavigate();

    useFetchCars();

    const BUDGET_TABS = useMemo(() =>
        BUDGET_TAB_OPTIONS.filter(tab => allCars?.some(car => car?.price >= tab?.min && car?.price <= tab?.max))
        , [allCars]);

    const FUEL_TYPE_TABS = useMemo(() =>
        FUEL_TYPE_TAB_OPTIONS.filter(tab => allCars?.some(car => car?.fuel_type?.toLowerCase()?.includes(tab?.value)))
        , [allCars]);

    const OWNERSHIP_TABS = useMemo(() =>
        OWNERSHIP_TAB_OPTIONS.filter(tab => allCars?.some(car => car?.ownership === tab?.value))
        , [allCars]);

    const handleViewAllCarsClick = () => {
        navigate("/listing")
    }

    return (
        <div className="w-full flex flex-col items-center justify-start">
            <div className="w-full flex flex-col items-center justify-start ">
                <div className="w-full flex flex-col items-center bg-gradient-to-t from-gray-50 via-blue-200 to-blue-600">
                    <HeroSection handleViewAllCars={handleViewAllCarsClick} />
                    <BrandList handleViewAllCars={handleViewAllCarsClick} />
                </div>
                <div className="w-full sm:max-w-[1280px] px-4 mt-2">
                    <div ref={budgetRef} className={`w-full mt-4 transform transition-all duration-700 ease-out ${budgetInView ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'}`}>
                        <h3 className="font-bold text-xl">Cars by Budget</h3>
                        {
                            isLoading
                                ?
                                <CarCategorySectionLoader />
                                :
                                <Tabs
                                    tabs={BUDGET_TABS}
                                    selectedTab={selectedBudgetTab}
                                    handleTabChange={setSelectedBudgetTab}
                                    tabContent={allCars?.filter(
                                        (car) =>
                                            car?.price >= selectedBudgetTab?.min &&
                                            car?.price <= selectedBudgetTab?.max
                                    )}
                                />
                        }
                    </div>
                    <div ref={fuelTypeRef} className={`w-full mt-4 transform transition-all duration-700 ease-out ${fuelTypeInView ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'}`}>
                        <h3 className="font-bold text-xl">Cars by Fuel Type</h3>
                        {
                            isLoading
                                ?
                                <CarCategorySectionLoader />
                                :
                                <Tabs
                                    tabs={FUEL_TYPE_TABS}
                                    selectedTab={selectedFuelTypeTab}
                                    handleTabChange={setSelectedFuelTypeTab}
                                    tabContent={allCars?.filter(
                                        (car) =>
                                            car?.fuel_type?.toLowerCase()?.includes(selectedFuelTypeTab?.value)
                                    )}
                                />
                        }
                    </div>
                    <div ref={ownershipRef} className={`w-full mt-4 transform transition-all duration-700 ease-out ${ownershipInView ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'}`}>
                        <h3 className="font-bold text-xl">Cars by Ownership</h3>
                        {
                            isLoading
                                ?
                                <CarCategorySectionLoader />
                                :
                                <Tabs
                                    tabs={OWNERSHIP_TABS}
                                    selectedTab={selectedOwnershipTab}
                                    handleTabChange={setSelectedOwnershipTab}
                                    tabContent={allCars?.filter(
                                        (car) => car?.ownership === selectedOwnershipTab?.value
                                    )}
                                />
                        }
                    </div>
                    <ContactUs />
                </div>
            </div>
        </div>
    );
}

export default Home;
