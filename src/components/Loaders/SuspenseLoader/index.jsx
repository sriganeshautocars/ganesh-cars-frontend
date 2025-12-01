import Shimmer from "../../ShimmerLoader"

export const SuspenseLoader = () => {
    return (
        <div className="w-full max-w-[1280px] mt-4">
            <Shimmer variant="rect" width="100%" height="65vh" />
            <Shimmer variant="rect" rounded="full" width="70%" height="50px" className="w-full flex justify-center" />
            <Shimmer variant="rect" count={10} rounded="lg" width="50px" height="50px" className="w-full flex justify-center gap-x-4" />
            <Shimmer variant="rect" rounded="md" width="150px" height="30px" />
            <Shimmer variant="rect" count={2} rounded="md" width="150px" height="30px" className="flex gap-x-4" />
        </div>
    )
}