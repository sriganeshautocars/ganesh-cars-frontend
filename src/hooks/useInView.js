import { useEffect, useRef, useState } from 'react';

export const useInView = (options = {}) => {
    const ref = useRef(null);
    const [inView, setInView] = useState(false);

    useEffect(() => {
        if (!ref.current) return;
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setInView(true);
                        if (options.once) observer.unobserve(entry.target);
                    } else if (!options.once) {
                        setInView(false);
                    }
                });
            },
            {
                root: null,
                rootMargin: '0px',
                threshold: options.threshold ?? 0.25,
            }
        );

        observer.observe(ref.current);
        return () => observer.disconnect();
    }, [ref, options]);

    return [ref, inView];
};