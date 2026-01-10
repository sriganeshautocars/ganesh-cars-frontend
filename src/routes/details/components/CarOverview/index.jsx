import { OverviewItem } from "../../../../components/OverviewItem"
import { DROPDOWN_VALUES_MAP } from "../../../../constants"

export const CarOverview = ({ carDetails }) => {
    return (
        <div className="w-full shadow rounded-lg p-6">
            <h3 className="text-2xl font-semibold mb-4">Car Overview</h3>
            <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-4">
                <OverviewItem
                    icon="registration"
                    title="Reg year"
                    value={carDetails?.reg_year}
                />
                <OverviewItem
                    icon="fuel"
                    title="Fuel type"
                    value={DROPDOWN_VALUES_MAP[carDetails?.fuel_type] || carDetails?.fuel_type}
                />
                <OverviewItem
                    icon="transmission"
                    title="Transmission"
                    value={DROPDOWN_VALUES_MAP[carDetails?.transmission_type] || carDetails?.transmission_type}
                />
                <OverviewItem
                    icon="engine"
                    title="Engine"
                    value={`${carDetails?.engine_displacement}cc`}
                />
                <OverviewItem
                    icon="ownership"
                    title="Ownership"
                    value={carDetails?.ownership}
                    isOwnership={true}
                />
                <OverviewItem
                    icon="make"
                    title="Make year"
                    value={carDetails?.make_year}
                />
                <OverviewItem
                    icon="seats"
                    title="Seats"
                    value={carDetails?.no_of_seats}
                />
                <OverviewItem
                    icon="body_type"
                    title="Body type"
                    value={DROPDOWN_VALUES_MAP[carDetails?.body_type] || carDetails?.body_type}
                />
                <OverviewItem
                    isRegNumber={true}
                    icon="reg_number"
                    title="Reg number"
                    value={carDetails?.reg_number}
                />
                <OverviewItem
                    icon="insurance"
                    title="Insurance"
                    value={carDetails?.insurance}
                />
                <OverviewItem
                    icon="location"
                    title="Location"
                    value={carDetails?.location}
                />
            </div>
        </div>
    )
}