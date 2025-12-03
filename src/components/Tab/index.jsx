import { useRef, useState, useEffect } from "react";
import { getPriceInLocalString } from "../../utils";
import { useNavigate } from "react-router-dom";

export const Tabs = (props) => {
    const {
        tabs = [],
        selectedTab = {},
        handleTabChange = () => { },
        tabContent = [],
    } = props;

    const itemRefs = useRef([]);
    const [indicatorStyle, setIndicatorStyle] = useState({ width: 0, left: 0 });

    useEffect(() => {
        const index = tabs.findIndex(t => t.id === selectedTab.id);
        const el = itemRefs.current[index];

        if (el) {
            setIndicatorStyle({
                width: el.offsetWidth,
                left: el.offsetLeft
            });
        }
    }, [selectedTab, tabs]);

    const navigate = useNavigate();

    const handleViewCarDetails = (carId) => {
        navigate(`/details/${carId}`);
    };


    return (
        <div className="w-full mt-2">
            <div className="relative w-fit bg-blue-100 rounded-md p-1">
                <div
                    className="absolute top-1 bottom-1 bg-blue-600 rounded-md transition-all duration-300 ease-in-out"
                    style={{
                        width: `${indicatorStyle?.width}px`,
                        transform: `translateX(${indicatorStyle?.left}px)`,
                    }}
                />
                <div className="relative flex items-center gap-x-2">
                    {tabs.map((tab, i) => (
                        <p
                            ref={ele => itemRefs.current[i] = ele}
                            key={tab.id}
                            onClick={() => handleTabChange({ ...tab, index: i })}
                            className={`w-[${100 / tabs.length}%] cursor-pointer relative py-0.5 px-2 z-10 transition-all duration-300 ease-in-out ${selectedTab.id === tab.id ? "text-white" : "text-gray-700 hover:text-blue-500"}`}
                        >
                            {tab.label}
                        </p>
                    ))}
                </div>
            </div>
            <div className="w-full flex justify-stretch py-2 gap-x-3 overflow-y-auto">
                {tabContent?.length > 0 ? (
                    tabContent?.slice(0, 4)?.map((content) => {
                        return (
                            <div
                                className="w-64 min-w-64 h-auto border border-gray-200 shadow-md rounded-lg cursor-pointer overflow-hidden relative"
                                key={content?.id}
                                title={content?.name}
                                onClick={() => handleViewCarDetails(content?.id)}
                            >
                                <img
                                    src={content?.thumbnail}
                                    className="w-full h-34 object-cover"
                                    width={100}
                                    height={100}
                                    alt="Car Image"
                                    loading="lazy"
                                />
                                <div className="p-3">
                                    <h3 className="font-medium text-xl">{content?.name}</h3>
                                    <p className="text-lg">
                                        {getPriceInLocalString(content?.price)}
                                    </p>
                                    <span
                                        className="text-sm text-blue-500 hover:text-blue-700 hover:underline cursor-pointer"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            handleViewCarDetails(content?.id)
                                        }}
                                    >
                                        View Details
                                    </span>
                                </div>
                            </div>

                        );
                    })
                ) : (
                    <div className="w-full flex items-center justify-center h-[241.5px]">No Cars Available Now</div>
                )}
                {tabContent?.length > 4 && (
                    <button className="h-fit px-3 py-2 flex self-center rounded-md bg-blue-600 text-white hover:bg-blue-700 cursor-pointer">
                        View All
                    </button>
                )}
            </div>
        </div>
    );
};
