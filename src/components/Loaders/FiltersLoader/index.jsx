import Shimmer from "../../ShimmerLoader"

export const FiltersLoader = () => {
    return (
        <div className="w-full flex flex-col px-5">
            <Shimmer variant="rect" height={28} width="30%" />
            <Shimmer lines={2} variant="text" gap={0} height={20} width="100%" />
            <hr className="my-2" />
            <Shimmer variant="rect" height={28} width="30%" />
            <Shimmer count={4} variant="rect" height={12} width="70%" />
            <hr className="my-2" />
            <Shimmer variant="rect" height={28} width="30%" />
            <Shimmer count={2} variant="rect" height={12} width="70%" />
            <hr className="my-2" />
            <Shimmer variant="rect" height={28} width="30%" />
            <Shimmer lines={2} variant="text" gap={0} height={20} width="100%" />
            <hr className="my-2" />
            <Shimmer variant="rect" height={28} width="30%" />
            <Shimmer count={3} variant="rect" height={12} width="80%" />
            <hr className="my-2" />
            <Shimmer variant="rect" height={28} width="30%" />
            <Shimmer count={4} variant="rect" height={12} width="70%" />
            <Shimmer variant="rect" height={36} width="100%" className="mt-3" />
        </div>
    )
}