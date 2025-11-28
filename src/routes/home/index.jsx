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
    const [testimonialRef, testimonialInView] = useInView({ threshold: 0.2, once: true });

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

    const getReviewContent = (review) => {
        if (review?.length > 90)
            return review.slice(0, 90) + "..."
        return review
    }

    return (
        <div className="w-full flex flex-col items-center justify-start">
            <div className="flex flex-col items-start justify-start w-full">
                <HeroSection handleViewAllCars={handleViewAllCarsClick} />
                <BrandList handleViewAllCars={handleViewAllCarsClick} />
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
                <div ref={testimonialRef} className={`w-full my-4 transform transition-all duration-700 ease-out ${testimonialInView ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'}`}>
                    <h3 className="font-bold text-xl">Customer Testimonials</h3>
                    <div className="flex flex-col sm:flex-row items-center justify-stretch gap-y-2 sm:gap-x-2 py-2">
                        {
                            TESTIMONIALS.slice(0, 4).map((testimonial, index) => {
                                return (
                                    <div className="w-full sm:w-72 h-auto border border-gray-300 rounded-lg overflow-hidden flex flex-col items-start justify-start" key={index}>
                                        <img
                                            src={testimonial?.image}
                                            className="w-full h-48 object-cover"
                                            width={100}
                                            height={100}
                                            alt="Customer Image" />
                                        <div className="px-3 py-2">
                                            <p>{getReviewContent(testimonial?.review)}</p>
                                            <div className="text-sm font-semibold flex justify-between mt-2">
                                                <p className="flex flex-col items-start">
                                                    <span className="text-lg">
                                                        {testimonial?.name}
                                                    </span>
                                                    <span className="text-sm">
                                                        {testimonial?.location}
                                                    </span>
                                                </p>
                                                <span className="text-green-900">{testimonial?.rating}/5</span>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <ContactUs />
            </div>
        </div>
    );
}

export default Home;
