import { handleMailEnquiry } from "../../../../../utils";

export const ContactInfoItem = ({ icon, title, description, isEmail = false, isMobile = false }) => {
    const Icon = () => icon;

    const handleClick = () => {
        if (isEmail) {
            handleMailEnquiry()
        }
    }

    return (
        <div className="flex items-start justify-start gap-x-4">
            <div className="mt-0.5"><Icon /></div>
            <div className="felx flex-col items-start justify-start gap-y-1">
                <h4 className="font-semibold text-lg">{title}</h4>
                {isMobile ?
                    description?.map((mobile, index) => <span key={index}>{index > 0 ? ', ' : ''}<a href={`tel:${mobile}`} >{mobile}</a> </span>)
                    :
                    <p className={`font-normal ${isEmail ? 'cursor-pointer' : ''}`} onClick={handleClick}>{description}</p>
                }
            </div>
        </div>
    )
}