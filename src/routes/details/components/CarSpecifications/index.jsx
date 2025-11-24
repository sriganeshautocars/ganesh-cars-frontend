import { Accordian } from "../../../../components/Accordian"
import { SpecificationList } from "../../../../components/SpecificationList"
import { getTitleCase } from "../../../../utils"

export const CarSpecifications = ({ carDetails }) => {
    return (
        <div className="w-full shadow rounded-lg p-6">
            <h3 className="text-2xl font-semibold mb-4">Specifications</h3>
            <div className="flex flex-col gap-y-2">
                {Object.keys(carDetails?.specifications || {})?.map((specification, index) => (
                    <Accordian
                        key={`specification-${index}`}
                        title={getTitleCase(specification)}
                        content={
                            <SpecificationList
                                specificationCategory={specification}
                                specificationList={
                                    carDetails?.specifications?.[specification]
                                }
                            />
                        }
                    />
                ))}

            </div>
        </div>
    )
}