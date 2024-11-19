import {type FC, type FormEvent} from 'react';
import styles from './AuthInput.module.scss';

interface IAuthInput {
    type: string;
    placeholder: string;
    id: string;
    labelText: string;
    value: string;
    onChange(e: FormEvent<HTMLInputElement>): void;
    onBlur(e: FormEvent<HTMLInputElement>): void;
}

export const AuthInput: FC<IAuthInput> = ({...props}) => {
    return (
        <div className={styles.fields}>
            <input
                className={styles.input}
                type={props.type}
                placeholder={props.placeholder}
                name={props.id}
                id={props.id}
                value={props.value}
                onChange={props.onChange}
                onBlur={props.onBlur}
            />
            <label className={styles.label} htmlFor={props.id}>
                {props.labelText}
            </label>
        </div>
    );
}