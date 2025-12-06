import Shimmer from "../../ShimmerLoader"
import { CarCategorySectionLoader } from "../CarCategorySectionLoader"

export const SuspenseLoader = () => {
    return (
        <>
            <div className="hidden sm:block w-full max-w-[1280px] mt-4">
                <Shimmer variant="rect" width="100%" height="65vh" />
                <Shimmer variant="rect" rounded="full" width="70%" height="50px" className="w-full flex justify-center" />
                <Shimmer variant="rect" count={10} rounded="lg" width="50px" height="50px" className="w-full flex justify-center gap-x-4" />
                <Shimmer variant="rect" rounded="md" width="150px" height="30px" />
                <Shimmer variant="rect" count={2} rounded="md" width="150px" height="30px" className="flex gap-x-4" />
            </div>
            <div className="sm:hidden w-full mt-4">
                <Shimmer variant="rect" width="100%" height="28vh" />
                <Shimmer variant="rect" rounded="lg" width="300px" height="36px" className="w-full flex justify-center" />
                <Shimmer variant="rect" rounded="lg" width="200px" height="36px" className="w-full flex justify-center" />
                <Shimmer variant="rect" rounded="lg" width="115px" height="36px" className="w-full flex justify-center" />
                <Shimmer variant="rect" rounded="full" width="90%" height="50px" className="w-full flex justify-center" />
                <Shimmer variant="rect" count={10} rounded="lg" width="56px" height="56px" className="w-fit grid grid-cols-5 mx-auto gap-2" />
                <div className="px-4">
                    <Shimmer variant="rect" rounded="md" width="150px" height="30px" />
                    <CarCategorySectionLoader />
                </div>
            </div>
        </>
    )
}