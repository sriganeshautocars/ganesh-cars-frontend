import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getCarById } from "../../api";
import { ContactCard } from "./components/ContactCard";
import { CarImages } from "./components/CarImages";
import { CarOverview } from "./components/CarOverview";
import { CarFeatures } from "./components/CarFeatures";
import { CarSpecifications } from "./components/CarSpecifications";

const CarDetails = () => {
    const [carDetails, setCarDetails] = useState({});

    const { id } = useParams();

    useEffect(() => {
        if (id) {
            getCarDetails(id)
        }
    }, [id])

    const getCarDetails = async (id) => {
        try {
            const carData = await getCarById(id)
            setCarDetails(carData)
        }
        catch (e) {
            console.log('Error while getting car details', e);
        }

    }

    return (
        <div className="w-full sm:max-w-[1280px] px-4">
            <div className="w-full h-auto hidden sm:grid grid-cols-10 gap-2 py-4">
                <div className="col-span-6 grid gap-6">
                    <CarImages carDetails={carDetails} />
                    <CarOverview carDetails={carDetails} />
                    <CarFeatures carDetails={carDetails} />
                    <CarSpecifications carDetails={carDetails} />
                </div>
                <div className="col-span-4">
                    <ContactCard carDetails={carDetails} />
                </div>
            </div>
            <div className="w-full h-auto grid sm:hidden grid-cols-1 gap-2 py-4">
                <CarImages carDetails={carDetails} />
                <ContactCard carDetails={carDetails} />
                <CarOverview carDetails={carDetails} />
                <CarFeatures carDetails={carDetails} />
                <CarSpecifications carDetails={carDetails} />
            </div>
        </div>
    );
};

export default CarDetails;
