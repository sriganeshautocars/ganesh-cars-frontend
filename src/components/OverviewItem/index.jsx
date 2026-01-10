import { OVERVIEW_ICON_MAP } from "../../constants";
import { getOrdinalNumber, getTitleCase } from "../../utils";

export const OverviewItem = (data) => {
    const { icon, title, value, isOwnership = false, isRegNumber } = data;

    return (
        <div className="flex items-start justify-start gap-2">
            {OVERVIEW_ICON_MAP?.[icon]}
            <div className="flex flex-col items-start">
                <p className="text-xs font-medium text-gray-500">{title}</p>
                <p className="text-base font-semibold text-gray-900">{isOwnership ? getOrdinalNumber(value) : isRegNumber ? String(value).toUpperCase() : getTitleCase(String(value))}</p>
            </div>
        </div>
    )
};
