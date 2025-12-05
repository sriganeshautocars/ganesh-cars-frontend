import { useEffect } from "react";
import { ABOUT_US_CONTENT } from "./constants";

const About = () => {
    useEffect(() => {
        window.scrollTo({ top: 0 });
    }, []);

    return (
        <div className="w-full max-w-[1280px] mx-auto flex flex-col px-4 py-6 gap-y-4">
            {ABOUT_US_CONTENT?.map((item, index) => (
                <div key={index}>
                    <h3 className="text-3xl font-semibold mb-2">{item?.title}</h3>
                    <p className="text-lg">{item?.content}</p>
                </div>
            ))}
        </div>
    );
};

export default About;
