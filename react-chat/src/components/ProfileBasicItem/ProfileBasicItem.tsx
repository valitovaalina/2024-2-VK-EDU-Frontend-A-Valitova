import {type FC} from 'react';
import styles from './ProfileBasicItem.module.scss';

interface IProfileBasicItem {
    property: string,
    value: string;
}

export const ProfileBasicItem: FC<IProfileBasicItem> = ({property, value}) => {
    return (
        <div className={styles.infoBlock}>
            <p className={styles.property}>{property}</p>
            <p className={styles.value}>{value}</p>
        </div>
    );
}
