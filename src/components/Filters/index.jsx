
import { useCarDataStore } from "../../store/useAppStore"; // Adjust path as needed
import { getPriceInLocalString, getTitleCase } from '../../utils';

import { BiArrowBack } from "react-icons/bi";
import { FiltersLoader } from "../Loaders/FiltersLoader";
import { RangeSlider } from "../RangeSlider";
import { DROPDOWN_VALUES_MAP } from "../../constants";


const CarFilters = ({ handleClose }) => {
    const {
        budget,
        selectedBrands,
        selectedTransmissions,
        kmDriven,
        selectedFuelTypes,
        selectedBodyTypes,
        selectedOwnerships,
        selectedSeats,
        makeYear,
        availableBrands,
        availableTransmissions,
        availableFuelTypes,
        availableBodyTypes,
        availableOwnerships,
        availableSeats,
        initialMakeYearRange,
        setBudget,
        toggleBrand,
        toggleTransmission,
        setKmDriven,
        toggleFuelType,
        toggleBodyType,
        toggleOwnership,
        toggleSeat,
        setMakeYear,
        clearFilters,
        isLoading,
        hasActiveFilters
    } = useCarDataStore();

    const handleBudgetChange = ({ name, value }) => {
        if (name === 'budget') {
            setBudget(0, value);
        }
    };

    const handleKmDrivenChange = ({ name, value }) => {
        if (name === 'kmDriven') {
            setKmDriven(0, value);
        }
    };

    const handleMakeYearChange = ({ name, value }) => {
        if (name === 'makeYear_min') {
            setMakeYear(value, makeYear.max);
        } else if (name === 'makeYear_max') {
            setMakeYear(makeYear.min, value);
        }
    };

    const handleClearFilters = () => {
        clearFilters();
        handleClose();
    }


    return (
        <div className="border border-gray-300 py-5 w-full m-0 sm:mr-5 h-auto rounded-md bg-white">
            <div className="flex items-center justify-between px-5">
                <h3 className="w-full flex justify-between gap-x-2 items-center text-xl font-semibold mb-4">
                    <div className="flex items-center gap-2">
                        <span className="block sm:hidden" onClick={handleClose}><BiArrowBack /></span>
                        <span>Filters</span>
                    </div>
                    {
                        hasActiveFilters() && <button
                            onClick={handleClearFilters}
                            className="font-medium text-base text-blue-500 underline"
                        >
                            Clear Filters
                        </button>
                    }
                </h3>
            </div>
            {isLoading
                ?
                <FiltersLoader />
                :
                <div className="max-h-[80vh] sm:max-h-[75vh] overflow-y-auto px-5">
                    {/* Budget Filter */}
                    <div>
                        <h4 className="text-lg font-medium mb-2">Budget (₹)</h4>
                        <div className="mb-3">
                            <div className="flex justify-center text-sm font-semibold text-blue-600">
                                <span>{getPriceInLocalString(budget?.max)}</span>
                            </div>
                            <RangeSlider
                                name="budget"
                                min={0}
                                max={10000000}
                                value={budget?.max}
                                step={1000}
                                onChange={handleBudgetChange}
                            />
                        </div>
                    </div>
                    <hr className="my-4" />
                    {/* Brand Filter */}
                    <div className="mb-4">
                        <h4 className="text-lg font-medium mb-2">Brand</h4>
                        {availableBrands?.map((brand) => (
                            <div key={brand} className="flex items-center mb-1">
                                <input type="checkbox" id={`brand-${brand}`} checked={selectedBrands.includes(brand)} onChange={() => toggleBrand(brand)} className="h-4 w-4 min-w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500" />
                                <label htmlFor={`brand-${brand}`} className="ml-2 text-sm text-gray-700">{DROPDOWN_VALUES_MAP[brand] || getTitleCase(brand)}</label>
                            </div>
                        ))}
                    </div>
                    <hr className="my-4" />

                    {/* Transmission Filter */}
                    <div className="mb-4">
                        <h4 className="text-lg font-medium mb-2">Transmission</h4>
                        {availableTransmissions.map((transmission) => (
                            <div key={transmission} className="flex items-center mb-1">
                                <input type="checkbox" id={`transmission-${transmission}`} checked={selectedTransmissions.includes(transmission)} onChange={() => toggleTransmission(transmission)} className="h-4 w-4 min-w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500" />
                                <label htmlFor={`transmission-${transmission}`} className="ml-2 text-sm text-gray-700">{DROPDOWN_VALUES_MAP[transmission] || getTitleCase(transmission)}</label>
                            </div>
                        ))}
                    </div>
                    <hr className="my-4" />

                    {/* Kilometer Driven Filter */}
                    <div>
                        <h4 className="text-lg font-medium mb-2">Kilometers Driven</h4>
                        <div className="mb-3">
                            <div className="flex justify-center text-sm font-semibold text-blue-600">
                                <span>{Number(kmDriven.max).toLocaleString('en-IN')} km</span>
                            </div>
                            <RangeSlider
                                name="kmDriven"
                                min={0}
                                max={200000}
                                value={kmDriven?.max}
                                step={1000}
                                onChange={handleKmDrivenChange}
                            />
                        </div>
                    </div>
                    <hr className="my-4" />

                    {/* Fuel Type Filter */}
                    <div className="mb-4">
                        <h4 className="text-lg font-medium mb-2">Fuel Types</h4>
                        {availableFuelTypes.map((fuelType) => (
                            <div key={fuelType} className="flex items-center mb-1">
                                <input type="checkbox" id={`fuel-${fuelType}`} checked={selectedFuelTypes.includes(fuelType)} onChange={() => toggleFuelType(fuelType)} className="h-4 w-4 min-w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500" />
                                <label htmlFor={`fuel-${fuelType}`} className="ml-2 text-sm text-gray-700">{DROPDOWN_VALUES_MAP[fuelType] || getTitleCase(fuelType)}</label>
                            </div>
                        ))}
                    </div>
                    <hr className="my-4" />
                    {/* Body Type Filter */}
                    <div className="mb-4">
                        <h4 className="text-lg font-medium mb-2">Body Type</h4>
                        {availableBodyTypes.map((bodyType) => (
                            <div key={bodyType} className="flex items-center mb-1">
                                <input type="checkbox" id={`bodyType-${bodyType}`} checked={selectedBodyTypes.includes(bodyType)} onChange={() => toggleBodyType(bodyType)} className="h-4 w-4 min-w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500" />
                                <label htmlFor={`bodyType-${bodyType}`} className="ml-2 text-sm text-gray-700 capitalize">{DROPDOWN_VALUES_MAP[bodyType] || getTitleCase(bodyType)}</label>
                            </div>
                        ))}
                    </div>
                    <hr className="my-4" />

                    {/* Ownership Filter */}
                    <div className="mb-4">
                        <h4 className="text-lg font-medium mb-2">Ownership</h4>
                        {availableOwnerships.map((ownerVal) => (
                            <div key={ownerVal} className="flex items-center mb-1">
                                <input type="checkbox" id={`ownership-${ownerVal}`} checked={selectedOwnerships.includes(ownerVal)} onChange={() => toggleOwnership(ownerVal)} className="h-4 w-4 min-w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500" />
                                <label htmlFor={`ownership-${ownerVal}`} className="ml-2 text-sm text-gray-700">
                                    {ownerVal === 1 ? 'First Owner' : ownerVal === 2 ? 'Second Owner' : `${ownerVal}rd+ Owner`}
                                </label>
                            </div>
                        ))}
                    </div>
                    <hr className="my-4" />

                    {/* Seats Filter */}
                    <div className="mb-4">
                        <h4 className="text-lg font-medium mb-2">Seats</h4>
                        {availableSeats.map((seatCount) => (
                            <div key={seatCount} className="flex items-center mb-1">
                                <input type="checkbox" id={`seat-${seatCount}`} checked={selectedSeats.includes(seatCount)} onChange={() => toggleSeat(seatCount)} className="h-4 w-4 min-w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500" />
                                <label htmlFor={`seat-${seatCount}`} className="ml-2 text-sm text-gray-700">{seatCount} Seats</label>
                            </div>
                        ))}
                    </div>
                    <hr className="my-4" />
                    {/* Make Year Filter */}
                    <div>
                        <h4 className="text-lg font-medium mb-2">Make Year</h4>
                        <div className="mb-3">
                            <RangeSlider
                                name="makeYear"
                                min={initialMakeYearRange?.min}
                                max={initialMakeYearRange?.max}
                                minValue={makeYear.min}
                                maxValue={makeYear.max}
                                step="1"
                                isDouble={true}
                                onChange={handleMakeYearChange}
                            />
                        </div>
                    </div>
                </div>
            }
        </div>
    );
};

export default CarFilters;