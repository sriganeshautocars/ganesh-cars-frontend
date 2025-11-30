import { useEffect, useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

export const CarImages = ({ carDetails }) => {
    const [imageList, setImageList] = useState([]);
    const [imageIndex, setImageIndex] = useState(0);

    useEffect(() => {
        setImageList([
            carDetails?.thumbnail
        ]);
    }, [carDetails?.thumbnail]);


    const handleNextClick = () => {
        if (imageIndex === imageList.length - 1) return;
        setImageIndex(imageIndex + 1);
    };

    const handlePrevClick = () => {
        if (imageIndex === 0) return;
        setImageIndex(imageIndex - 1);
    };

    return (
        <div className="w-full grid rounded-lg overflow-hidden bg-gray-800">
            <div className="w-full h-auto sm:h-100 relative overflow-hidden">
                {imageIndex > 0 && (
                    <div
                        className="absolute top-[46%] left-2 cursor-pointer h-8 w-8 border-2 border-blue-600 bg-white rounded-full flex items-center justify-center"
                        onClick={handlePrevClick}
                    >
                        <FiChevronLeft size={32} />
                    </div>
                )}
                <img
                    src={`${imageList[imageIndex]}`}
                    alt={carDetails?.name}
                    className={`w-full h-full object-contain sm:object-cover`}
                    loading="lazy"
                />
                {imageIndex < imageList.length - 1 && (
                    <div
                        className="absolute top-[46%] right-2 cursor-pointer h-8 w-8 border-2 border-blue-600 bg-white rounded-full flex items-center justify-center"
                        onClick={handleNextClick}
                    >
                        <FiChevronRight size={32} />
                    </div>
                )}
            </div>
            <div className="w-full flex items-center justify-center gap-x-8 py-3">
                {carDetails?.images?.exterior?.length &&
                    <div>
                        <div
                            className="w-18 h-18 rounded-full overflow-hidden cursor-pointer border-3 border-blue-700"
                            onClick={() => setImageList(carDetails?.images?.exterior || [])}
                        >
                            <img
                                src={carDetails?.images?.exterior?.[0]}
                                alt={carDetails?.name}
                                className="w-full h-full object-cover"
                                loading="lazy"
                            />
                        </div>
                        <p className="text-center text-gray-300">Exterior</p>
                    </div>
                }
                {carDetails?.images?.interior?.length &&
                    <div>
                        <div
                            className="w-18 h-18 rounded-full overflow-hidden cursor-pointer border-3 border-blue-700"
                            onClick={() => setImageList(carDetails?.images?.interior || [])}
                        >
                            <img
                                src={carDetails?.images?.interior?.[0]}
                                alt={carDetails?.name}
                                className="w-full h-full object-cover"
                                loading="lazy"
                            />
                        </div>
                        <p className="text-center text-gray-300">Interior</p>
                    </div>
                }
                {carDetails?.images?.tyres?.length &&
                    <div>
                        <div
                            className="w-18 h-18 rounded-full overflow-hidden cursor-pointer border-3 border-blue-700"
                            onClick={() => setImageList(carDetails?.images?.tyres || [])}
                        >
                            <img
                                src={carDetails?.images?.tyres?.[0]}
                                alt={carDetails?.name}
                                className="w-full h-full object-cover"
                                loading="lazy"
                            />
                        </div>
                        <p className="text-center text-gray-300">Tyres</p>
                    </div>
                }
            </div>

        </div>
    )
}