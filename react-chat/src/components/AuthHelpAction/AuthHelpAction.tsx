import {type FC } from 'react';
import {Link} from 'react-router-dom';
import styles from './AuthHelpAction.module.scss'

interface IAuthHelpAction {
    text: string;
    link: string;
    path: string;
}

export const AuthHelpAction: FC<IAuthHelpAction> = ({...props}) => {
    return (
        <div className={styles.helpAction}>
            <p className={styles.text}>{props.text}</p>
            <Link to={props.path} className={styles.link}>
                {props.link}
            </Link>
        </div>
    );
}