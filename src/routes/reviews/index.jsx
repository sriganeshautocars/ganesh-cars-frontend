import { useEffect } from "react";

import { TESTIMONIALS } from "./constants";
import { ReviewCard } from "./components/ReviewCard";

const Reviews = () => {
    useEffect(() => {
        window.scrollTo({ top: 0 });
    }, []);

    return <div className="flex flex-col gap-2 max-w-[1280px] mx-auto p-4 mt-4">
        <h2 className="font-bold text-2xl mb-4">Customer Reviews</h2>
        {
            TESTIMONIALS.map((testimonial) => {
                return (
                    <ReviewCard key={testimonial?.id} testimonial={testimonial} />
                )
            })
        }
        <img data-v-f36d035b="" src="https://dynamic.design.com/asset/logo/73bfb2df-9a65-48b8-ad07-506760562eba/logo-search-grid-2x?logoTemplateVersion=1&amp;v=1768123548168&amp;layout=layout-auto-1-1&amp;text=Sri+Ganesh+Auto+Cars&amp;colorpalette=blue" alt="Logo preview" class="preview-image tw-w-full" draggable="false"></img>

    </div>
}

export default Reviews