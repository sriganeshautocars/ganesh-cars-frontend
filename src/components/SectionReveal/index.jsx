import React from 'react';
import { useInView } from '../../hooks/useInView';

export const SectionReveal = ({
    children,
    className = '',
    threshold = 0.05,
    once = true,
    delay = 0,        // ms
    duration = 700,   // ms
    ...rest
}) => {
    const [ref, inView] = useInView({ threshold, once });

    // Tailwind classes: keep transition classes present on mount
    // Use transition-all for both transform & opacity
    const baseClasses = 'transform will-change-transform transition-all ease-out';
    const durationClass = `duration-[${duration}ms]`; // keep fallback if your Tailwind doesn't support dynamic durations, use duration-700
    const hiddenClasses = 'translate-y-6 opacity-0';
    const visibleClasses = 'translate-y-0 opacity-100';

    // If your tailwind config doesn't support dynamic durations, replace durationClass with 'duration-700'
    const wrapperStyle = { transitionDelay: `${delay}ms` };

    return (
        <div
            ref={ref}
            className={`${baseClasses} ${inView ? visibleClasses : hiddenClasses} ${className} ${durationClass}`}
            style={wrapperStyle}
            {...rest}
        >
            {children}
        </div>
    );
};
