import { useEffect, useState } from "react";

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
        <div className="w-full grid gap-6">
            <div className="w-full h-96 sm:h-100 rounded-lg relative overflow-hidden">
                {imageIndex > 0 && (
                    <div
                        className="absolute top-[46%] left-2 cursor-pointer h-8 w-8 bg-blue-300 rounded-full flex items-center justify-center"
                        onClick={handlePrevClick}
                    >
                        <FiChevronLeft size={32} />
                    </div>
                )}
                <img
                    src={`${imageList[imageIndex]}`}
                    alt={carDetails?.name}
                    className="w-full h-full object-contain sm:object-cover"
                />
                {imageIndex < imageList.length - 1 && (
                    <div
                        className="absolute top-[46%] right-2 cursor-pointer  h-8 w-8 bg-blue-300 rounded-full flex items-center justify-center"
                        onClick={handleNextClick}
                    >
                        <FiChevronRight size={32} />
                    </div>
                )}
                <div className="w-full absolute z-10 bottom-0 right-0 left-0 flex items-center justify-center gap-x-8 mb-3">
                    {carDetails?.images?.exterior?.length && <div
                        className="w-18 h-18 rounded-full overflow-hidden cursor-pointer border-3 border-blue-700"
                        onClick={() => setImageList(carDetails?.images?.exterior || [])}
                    >
                        <img
                            src={carDetails?.images?.exterior?.[0]}
                            alt={carDetails?.name}
                            className="w-full h-full object-cover"
                        />
                    </div>
                    }
                    {carDetails?.images?.interior?.length &&
                        <div
                            className="w-18 h-18 rounded-full overflow-hidden cursor-pointer border-3 border-blue-700"
                            onClick={() => setImageList(carDetails?.images?.interior || [])}
                        >
                            <img
                                src={carDetails?.images?.interior?.[0]}
                                alt={carDetails?.name}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    }
                    {carDetails?.images?.tyres?.length &&
                        <div
                            className="w-18 h-18 rounded-full overflow-hidden cursor-pointer border-3 border-blue-700"
                            onClick={() => setImageList(carDetails?.images?.tyres || [])}
                        >
                            <img
                                src={carDetails?.images?.tyres?.[0]}
                                alt={carDetails?.name}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}