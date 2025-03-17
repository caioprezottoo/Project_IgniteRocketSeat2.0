import styles from './Avatar.module.css';
import { ImgHTMLAttributes } from 'react';

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement>{
    hasBorder?: boolean;
}

export function Avatar({ hasBorder = true, ...props }: AvatarProps) {

    return (
        <img
            className={hasBorder ? styles.avatarWithBorder : styles.avatar}
            {...props}
        />
    )
}

// export function Avatar(props) {
//     const hasBorder = props.hasBorder !== false;

//     return (
//         <img
//             className={hasBorder ? styles.avatarWithBorder : styles.avatar}
//             src={props.src}
//         />
//     )
// }