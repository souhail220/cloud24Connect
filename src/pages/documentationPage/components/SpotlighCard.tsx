import {type FC, type MouseEventHandler, type PropsWithChildren, useRef} from 'react';
import './SpotlightCard.css';

interface SpotlightCardProps extends PropsWithChildren {
    className?: string;
    spotlightColor?: `rgba(${number}, ${number}, ${number}, ${number})`;
}

const SpotlightCard: FC<SpotlightCardProps> = ({
                                                         children,
                                                         className = '',
                                                         spotlightColor = 'rgba(255, 255, 255, 0.25)'
                                                     }) => {
    const divRef = useRef<HTMLDivElement | null>(null);

    const handleMouseMove: MouseEventHandler<HTMLDivElement> = e => {
        if (!divRef.current) return;

        const rect = divRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        divRef.current.style.setProperty('--mouse-x', `${x}px`);
        divRef.current.style.setProperty('--mouse-y', `${y}px`);
        divRef.current.style.setProperty('--spotlight-color', spotlightColor);
    };

    return (
        <article ref={divRef} onMouseMove={handleMouseMove} className={`card-spotlight ${className}`}>
            {children}
        </article>
    );
};

export default SpotlightCard;
