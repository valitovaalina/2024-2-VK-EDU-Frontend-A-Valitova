import {type FC} from 'react';
import styles from './AuthHeader.module.scss';

interface IAuthHeader {
    title: string;
}

export const AuthHeader: FC<IAuthHeader> = ({title}) => {
    return (
        <h1 className={styles.title}>{title}</h1>
    );
}