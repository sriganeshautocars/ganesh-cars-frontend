
export const ContactInfoItem = ({ icon, title, description }) => {
    const Icon = () => icon;
    return (
        <div className="flex items-start justify-start gap-x-4">
            <div className="mt-0.5"><Icon /></div>
            <div className="felx flex-col items-start justify-start gap-y-1">
                <h4 className="font-semibold text-lg">{title}</h4>
                <p className="font-normal">{description}</p>
            </div>
        </div>
    )
}