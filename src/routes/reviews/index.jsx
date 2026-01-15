import { useEffect } from "react";

import { TESTIMONIALS } from "./constants";
import { ReviewCard } from "./components/ReviewCard";

const Reviews = () => {
    useEffect(() => {
        window.scrollTo({ top: 0 });
    }, []);

    return (
        <div className="w-full flex flex-col items-start gap-2 max-w-[1280px] mx-auto p-4 mt-4">
            <h2 className="font-bold text-2xl mb-4">Customer Reviews</h2>
            {/* {
            TESTIMONIALS.map((testimonial) => {
                return (
                    <ReviewCard key={testimonial?.id} testimonial={testimonial} />
                )
            })
        } */}
            <div className="w-full text-center text-5xl text-blue-500 mt-40">
                Customer reviews are coming soon!
            </div>
        </div>
    );
};

export default Reviews;
