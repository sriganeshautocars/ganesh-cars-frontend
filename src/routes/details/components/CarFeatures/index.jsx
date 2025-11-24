import { Accordian } from "../../../../components/Accordian"
import { FeatureList } from "../../../../components/FeatureList"
import { getTitleCase } from "../../../../utils"

export const CarFeatures = ({ carDetails }) => {
    return (
        <div className="w-full shadow rounded-lg p-6">
            <h3 className="text-2xl font-semibold mb-4">Features</h3>
            <div className="flex flex-col gap-y-2">
                {Object.keys(carDetails?.features || {})?.map(
                    (feature, index) => (
                        <Accordian
                            key={`${index}-${feature}`}
                            title={getTitleCase(feature)}
                            content={
                                <FeatureList
                                    featureCategory={feature}
                                    featureList={carDetails?.features?.[feature]}
                                />
                            }
                        />))
                }
            </div>
        </div>
    )
}