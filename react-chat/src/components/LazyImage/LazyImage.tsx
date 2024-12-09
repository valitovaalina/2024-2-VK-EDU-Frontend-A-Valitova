import {type CSSProperties, type FC} from 'react';
import {useInView} from 'react-intersection-observer';
import avatar from '../../images/avatar_1.jpg';

interface ILazyImage {
    alt: string;
    style: CSSProperties;
    src?: string;
}

export const LazyImage: FC<ILazyImage> = ({src, alt, style}) => {
    const {ref, inView} = useInView({
        triggerOnce: true,
        threshold: 0.5,
    });

    return inView && src
        ? (
            <img
                ref={ref}
                src={src}
                alt={alt}
                style={style}
            />
        )
        : (
            <img
                ref={ref}
                src={avatar}
                alt='default'
                style={style}
            />
        );
};
