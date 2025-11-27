export const CarListingCardLoader = () => {
    return (
        <div className="border border-gray-200 rounded-md w-64 min-w-64 px-2 pt-2">
            <Shimmer variant="rect" width="100%" height={136} className="mb-2" />
            <Shimmer variant="rect" width="80%" height={16} className="mb-1" />
            <Shimmer variant="rect" width="80%" height={15} className="mb-2" />
            <Shimmer variant="text" lines={1} width="50%" height={12} />
        </div>
    )
}