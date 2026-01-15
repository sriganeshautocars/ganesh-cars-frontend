import { useMemo, useState } from "react";

import { CheckAuth } from "../../components/CheckAuth";
import { Modal } from "../../components/Modal";
import CarDetailsForm from "../../components/CarDetailsForm";
import { useCarDataStore } from "../../store/useAppStore";
import { deleteCar, getCarList } from "../../api";
import { DeleteConfirmContent } from "./components/DeleteConfirmContent";
import { useFetchCars } from "../../hooks/useFetchCars";


const Dashboard = () => {
    const [showModal, setShowModal] = useState(false);
    const [selectedCarDetails, setSelectedCarDetails] = useState({});
    const [selectedCarToDelete, setSelectedCarToDelete] = useState(null);
    const [searchString, setSearchString] = useState("");

    const { allCars, setAllCars } = useCarDataStore();

    const carList = useMemo(() => {
        if (searchString.trim() === "") return allCars;
        return allCars?.filter(car =>
            car?.name?.toLowerCase().includes(searchString.toLowerCase()) ||
            car?.location?.toLowerCase().includes(searchString.toLowerCase()) ||
            car?.reg_number?.toLowerCase().includes(searchString.toLowerCase())
        );
    }, [searchString, allCars]);

    useFetchCars()

    const getAllCars = async () => {
        try {
            const cars = await getCarList();
            setAllCars(cars)
        } catch (e) {
            console.log('Error while fetching list', e)
        }
    }

    const handleDeleteCar = async (carId) => {
        try {
            const response = await deleteCar(carId);
            if (response?.status === 204) {
                getAllCars();
            }
        }
        catch (e) {
            console.log('Error while deleting', e)
        }
    }

    const handleClose = () => {
        setShowModal(false);
        setSelectedCarDetails({});
        getAllCars();
    }

    const handleCloseModal = () => {
        setShowModal(false);
        setSelectedCarDetails({});
    }

    return (
        <CheckAuth>
            <div className="w-full sm:max-w-[1280px] p-4">
                <div className="w-full flex items-center justify-between mt-4">
                    <h3 className="text-2xl sm:text-3xl font-semibold">Car List</h3>
                    <button className="px-2 sm:px-3 py-1 sm:py-1.5 bg-blue-600 text-white rounded-md hover:bg-blue-700" onClick={() => setShowModal(true)}>Add New Car</button>
                </div>
                <input type="text" placeholder="Search by name, location, reg no..." onChange={e => setSearchString(e.target.value)} className="my-4 w-full sm:w-96 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                <div className="grid grid-cols-9 sm:grid-cols-10 gap-2 border-b-2 border-gray-400py-2 sm:p-2 mb-2">
                    <div className="col-span-1 font-medium">Id</div>
                    <div className="col-span-2 font-medium">Image</div>
                    <div className="col-span-2 sm:col-span-1 font-medium">Name</div>
                    <div className="hidden sm:block col-span-2 font-medium">Reg No</div>
                    <div className="hidden sm:block col-span-2 font-medium">Location</div>
                    <div className="col-span-2 sm:col-span-1" />
                    <div className="col-span-2 sm:col-span-1" />
                </div>
                {carList?.map((car, index) => (
                    <div className="grid grid-cols-9 sm:grid-cols-10 items-center gap-2 border-b-2 border-gray-300 py-2 sm:p-2" key={index}>
                        <div className="col-span-1">{car?.id}</div>
                        <div className="col-span-2 flex items-center justify-start">
                            <img src={car?.thumbnail} alt={car?.name} className="w-full sm:w-40 h-auto sm:h-24" loading="lazy" />
                        </div>
                        <div className="col-span-2 sm:col-span-1 w-full text-ellipsis overflow-hidden">{car?.name}</div>
                        <div className="hidden sm:block col-span-2">{car?.reg_number}</div>
                        <div className="hidden sm:block col-span-2">{car?.location}</div>
                        <button
                            className="col-span-2 sm:col-span-1 h-fit px-1 sm:px-2 py-0.5 sm:py-1.5 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                            onClick={() => {
                                setSelectedCarDetails(car);
                                setShowModal(!showModal);
                            }}
                        >
                            Update
                        </button>
                        <button className=" col-span-2 sm:col-span-1 h-fit px-1 sm:px-2 py-0.5 sm:py-1.5 bg-red-600 text-white rounded-md hover:bg-red-700" onClick={() => setSelectedCarToDelete(car)}>
                            Delete
                        </button>
                    </div>
                ))}
            </div>
            {
                showModal && (
                    <Modal content={<CarDetailsForm carId={selectedCarDetails?.id} handleClose={handleClose} />} handleClose={handleCloseModal} />
                )
            }
            {
                selectedCarToDelete?.id && (
                    <Modal
                        content={
                            <DeleteConfirmContent
                                carName={selectedCarToDelete?.name}
                                onConfirm={() => {
                                    handleDeleteCar(selectedCarToDelete?.id);
                                    setSelectedCarToDelete(null);
                                }}
                                onCancel={() => setSelectedCarToDelete(null)}
                            />}
                        handleClose={() => setSelectedCarToDelete(null)}
                    />
                )
            }
        </CheckAuth>
    );
};

export default Dashboard;
