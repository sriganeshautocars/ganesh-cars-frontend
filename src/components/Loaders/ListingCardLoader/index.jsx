import Shimmer from "../../ShimmerLoader"

export const CarListingCardLoader = () => {
    return (
        <div className="w-full border border-gray-200 rounded-md overflow-hidden">
            <Shimmer variant="rect" rounded="none" width="100%" height={160} className="mb-2" />
            <div className="w-full px-2">
                <Shimmer count={2} variant="rect" width="50%" height={35} className="flex gap-x-6" />
                <Shimmer count={4} variant="rect" width="20%" height={28} className="flex gap-x-2" />
                <Shimmer variant="rect" width="100%" height={28} />
            </div>
        </div>
    )
}