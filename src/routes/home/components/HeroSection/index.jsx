import Car from "/innova.png";

export const HeroSection = ({ handleViewAllCars }) => {
    return (
        <div className="w-full">
            <div className="w-full flex flex-col items-center justify-start sm:hidden h-fit">
                <img src={Car} alt="image" className="w-full h-auto" />
            </div>
            <div className="w-full relative hidden sm:flex flex-row items-start h-[70vh]">
                <div className="flex flex-col gap-y-10 mt-10 mb-20">
                    <h3 className="hidden sm:block text-5xl font-bold text-center">
                        Welcome to Ganesh Cars
                    </h3>
                    <p className="text-center flex flex-col items-start gap-y-2 text-7xl font-semibold">
                        <span>Drive your</span>
                        <span>Dream Car to</span>
                        <span>Home</span>
                    </p>
                    <button className="px-10 py-3 bg-blue-500 text-xl text-white hover:bg-blue-600 rounded-md w-fit h-fit cursor-pointer" onClick={handleViewAllCars}>Explore Now</button>
                </div>
                <div className="h-full flex items-center justify-center">
                    <img src={Car} alt="image" className="h-full w-auto" />
                </div>
            </div>
        </div>
    )
}
