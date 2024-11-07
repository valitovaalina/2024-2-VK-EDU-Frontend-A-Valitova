import {type FC, type FormEvent} from 'react';
import styles from './ProfilePageInput.module.scss';

export interface IProfilePageInput {
    value: string;
    type: string;
    placeholder: string;
    id: string;
    labelText: string;
    name: string;
    required: boolean;
    errorText: string;
    isError: boolean;
    onChange: (e: FormEvent<HTMLInputElement>) => void;
    onBlur: (e: FormEvent<HTMLInputElement>) => void;
}

export const ProfilePageInput: FC<IProfilePageInput> = ({...props}) => {
    return (
        <p className={styles.box}>
            <label className={styles.label} htmlFor={props.id}>
                {props.labelText}
            </label>
            {props.isError && <div className={styles.error}>{props.errorText}</div>}
            <input
                value={props.value}
                className={styles.input}
                type={props.type}
                id={props.id}
                name={props.name}
                placeholder={props.placeholder}
                required={props.required}
                onChange={props.onChange}
                onBlur={props.onBlur}
            />
        </p>
    );
}
