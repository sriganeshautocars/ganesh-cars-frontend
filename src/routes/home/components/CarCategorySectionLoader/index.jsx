import Shimmer from "../../../../components/ShimmerLoader"

export const CarCategorySectionLoader = () => {
    return (
        <div className="w-full">
            <Shimmer count={2} gap={0} variant="rect" width="80px" height={20} className="flex items-center gap-x-2 my-2 pb-1 border-b border-gray-600" />
            <div className="w-full flex gap-4 overflow-x-auto">
                {Array.from({ length: 4 }).map((_, index) => (
                    <div key={index} className="border border-gray-200 rounded-md w-64 min-w-64 px-2 pt-2">
                        <Shimmer variant="rect" width="100%" height={136} className="mb-2" />
                        <Shimmer variant="rect" width="80%" height={16} className="mb-1" />
                        <Shimmer variant="rect" width="80%" height={15} className="mb-2" />
                        <Shimmer variant="text" lines={1} width="50%" height={12} />
                    </div>
                ))}
            </div>
        </div>



    )
}