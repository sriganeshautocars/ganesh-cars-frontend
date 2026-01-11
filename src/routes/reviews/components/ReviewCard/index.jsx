import { Rating } from "../Rating"

export const ReviewCard = (props) => {
    const { testimonial } = props;
    return (

        <div className="w-full flex border border-gray-300 rounded-lg shadow-md overflow-hidden">
            <img
                src={testimonial?.image}
                className="w-64 h-auto object-cover"
                width={100}
                height={100}
                alt="Customer Image"
                loading="lazy"
            />
            <div className="px-3 py-2">
                <div className="text-sm font-semibold flex flex-col items-start">
                    <p className="flex justify-start items-center gap-2">
                        <span className="text-lg">
                            {testimonial?.name}
                        </span>
                        |
                        <span className="text-sm">
                            {testimonial?.location}
                        </span>
                    </p>
                    <Rating rating={testimonial?.rating} size={16} />
                </div>
                <p className="mt-2">{testimonial?.review}</p>
            </div>
        </div>
    )
}