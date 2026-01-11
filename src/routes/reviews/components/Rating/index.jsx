import { Star } from 'lucide-react';

export const Rating = ({ rating = 0, size = 18, fillColor = '#fbbf24', emptyColor = '#d1d5db' }) => {
    const stars = [];

    for (let i = 1; i <= 5; i++) {
        const difference = rating - (i - 1);

        if (difference >= 1) {
            // Full star
            stars.push(
                <Star
                    key={i}
                    size={size}
                    fill={fillColor}
                    color={fillColor}
                />
            );
        } else if (difference > 0 && difference < 1) {
            // Half star
            stars.push(
                <div key={i} className="relative inline-flex">
                    <Star size={size} fill={emptyColor} color={emptyColor} />
                    <div className="absolute top-0 left-0 overflow-hidden" style={{ width: '50%' }}>
                        <Star size={size} fill={fillColor} color={fillColor} />
                    </div>
                </div>
            );
        } else {
            // Empty star
            stars.push(
                <Star
                    key={i}
                    size={size}
                    fill={emptyColor}
                    color={emptyColor}
                />
            );
        }
    }

    return <div className="flex gap-1">{stars}</div>;
};