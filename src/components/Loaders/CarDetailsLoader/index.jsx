import Shimmer from "../../ShimmerLoader"

export const CarDetailsLoader = () => {
    return (
        <div className="w-full max-w-[1280px] mt-4">
            <Shimmer count={2} width="50%" height="60vh" className="flex gap-x-4" />
            <div className="p-3 border border-gray-300 w-fit rounded-lg">
                <Shimmer width="250px" height="35px" className="flex gap-x-4" />
                <Shimmer count={3} width="190px" height="50px" className="flex gap-x-4" />
                <Shimmer count={3} width="190px" height="50px" className="flex gap-x-4" />
                <Shimmer count={3} width="190px" height="50px" className="flex gap-x-4" />
                <Shimmer count={3} width="190px" height="50px" className="flex gap-x-4" />
            </div>
        </div>
    )
}