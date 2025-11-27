import "./style.css";

export const Shimmer = ({
    count = 1,                 // number of skeleton items to render
    width = "100%",            // width string (px OR %)
    height = 16,               // height (px) or accept tailwind style if passed via className
    rounded = "md",            // one of 'none', 'sm', 'md', 'lg', 'full' — maps to tailwind rounded-{x}
    variant = "rect",          // 'rect' | 'circle' | 'text' | 'avatar'
    lines = 3,                 // for text block: number of lines
    gap = 12,                  // gap px between repeated items
    duration = 1.5,            // shimmer duration in seconds
    className = "",
    style = {},
}) => {
    const roundedMap = {
        none: "rounded-none",
        sm: "rounded-sm",
        md: "rounded-md",
        lg: "rounded-lg",
        full: "rounded-full",
    };

    const rootStyle = { ...style, width, "--shimmer-duration": `${duration}s` };

    const wrapperClasses = `shimmer bg-gray-200 dark:bg-gray-700 ${roundedMap[rounded] ?? roundedMap.md}`;

    const pxGap = `${gap}px`;

    const renderTextBlock = (i) => (
        <div key={i} className={`flex flex-col gap-2 w-full`} style={{ marginBottom: pxGap }}>
            {Array.from({ length: lines }).map((_, idx) => (
                <div
                    key={idx}
                    className={`${wrapperClasses}`}
                    style={{
                        height: 10,
                        width: `${100 - idx * 15}%`,
                        marginBottom: idx === lines - 1 ? 0 : "6px",
                        ...rootStyle,
                    }}
                />
            ))}
        </div>
    );

    const renderItem = (i) => {
        if (variant === "circle") {
            return (
                <div
                    key={i}
                    className={`${wrapperClasses} flex-shrink-0`}
                    style={{ width: height, height: height, borderRadius: "50%", marginBottom: pxGap, ...rootStyle }}
                />
            );
        }

        if (variant === "avatar") {
            // avatar + text lines
            return (
                <div key={i} className="flex items-center gap-3" style={{ marginBottom: pxGap }}>
                    <div
                        className={`${wrapperClasses}`}
                        style={{ width: height, height: height, borderRadius: "50%", ...rootStyle }}
                    />
                    <div className="flex flex-col w-full">
                        <div
                            className={`${wrapperClasses}`}
                            style={{ height: 12, width: "60%", marginBottom: 8, ...rootStyle }}
                        />
                        <div
                            className={`${wrapperClasses}`}
                            style={{ height: 10, width: "40%", ...rootStyle }}
                        />
                    </div>
                </div>
            );
        }

        if (variant === "text") {
            return renderTextBlock(i);
        }

        // default rect
        return (
            <div
                key={i}
                className={`${wrapperClasses}`}
                style={{ width, height, marginBottom: pxGap, ...rootStyle }}
            />
        );
    };

    return (
        <div className={`shimmer-root ${className}`}>
            {Array.from({ length: count }).map((_, i) => renderItem(i))}
        </div>
    );
};

export default Shimmer;