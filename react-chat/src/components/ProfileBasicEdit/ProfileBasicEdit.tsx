import {type FC, type FormEvent, useEffect, useState} from 'react';
import {ProfileInput} from '../profileInput/profileInput';
import {useInput} from '../../hooks/useInput';
import avatar from '../../images/avatar_1.jpg';
import styles from './profileBasicEdit.module.scss';
import type {User} from '../../types/user/index';

interface IProfileBasicEdit {
    user: User;
    editBasicHandler: () => void;
}

export const ProfileBasicEdit: FC<IProfileBasicEdit> = ({user, editBasicHandler}) => {
    let [currentFirstName, setCurrentFirstName] = useState<string | null>(user.first_name);
    let [currentLastName, setCurrentLastName] = useState<string | null>(user.last_name);
    let [currentBio, setCurrentBio] = useState<string | null>(user.bio);
    
    const [isReady, setReady] = useState(false);

    const firstName = useInput('', {isEmpty: false, maxLength: 50});
    const firstNameMaxLengthError = (firstName.isDirty && firstName.maxLengthError && currentFirstName && currentFirstName.length > 50) ? 'Поле должно содержать меньше 50 символов!' : '';
    const firstNameIsEmpty = (firstName.isDirty && firstName.isEmpty && currentFirstName === '') ? 'Поле не может быть пустым!' : '';

    const lastName = useInput('', {isEmpty: false, maxLength: 50});
    const lastNameMaxLengthError = (lastName.isDirty && lastName.maxLengthError && currentLastName && currentLastName.length > 50) ? 'Поле должно содержать меньше 50 символов!' : '';
    const lastNameIsEmpty = (lastName.isDirty && lastName.isEmpty && currentLastName === '') ? 'Поле не может быть пустым!' : '';

    const bio = useInput('', {isEmpty: false, maxLength: 50});
    const bioIsEmpty = (bio.isDirty && bio.isEmpty && currentBio === '') ? 'Поле не может быть пустым!' : '';
    const bioMaxLengthError = (bio.isDirty && bio.maxLengthError && currentBio && currentBio.length > 50) ? 'Поле должно содержать меньше 50 символов!' : '';

    const isButtonDisabled = firstNameMaxLengthError || firstNameIsEmpty || lastNameMaxLengthError || lastNameIsEmpty || bioIsEmpty || bioMaxLengthError
        ? true
        : false;

    useEffect(() => {
        if (!isReady) {
            return;
        }

        (currentFirstName === user.first_name) ? currentFirstName = null : currentFirstName = user.first_name;
        (currentLastName === user.last_name) ? currentLastName = null : currentLastName = user.last_name;
        (currentBio === user.bio) ? currentBio = null : currentBio = user.bio;

        editBasicHandler();
    }, [isReady]);

    return (
        <div className={styles.container}>
            <div>
                <img src={avatar} className={styles.userImg}/>
            </div>
            <form
                onSubmit={(e: FormEvent<HTMLFormElement>) => {
                    e.preventDefault();
                    setReady(true);
                }}>
                <h1 className={styles.header}>Основное</h1>
                <ProfileInput
                    value={user.first_name}
                    type='text'
                    placeholder='Имя'
                    id='first_name'
                    labelText=''
                    name='first_name'
                    required
                    errorText={firstNameMaxLengthError.length > 0 ? firstNameMaxLengthError : firstNameIsEmpty}
                    isError={firstNameMaxLengthError.length > 0 ? true : firstNameIsEmpty.length > 0}
                    onChange={(e) => {
                        const newFirstName = String(e.currentTarget.value);
                        setCurrentFirstName(newFirstName);
                        user.first_name = newFirstName;
                    }}
                    onBlur={firstName.onBlur}
                />
                <ProfileInput
                    value={user.last_name}
                    type='text'
                    placeholder='Фамилия'
                    id='last_name'
                    labelText=''
                    name='last_name'
                    required
                    errorText={lastNameMaxLengthError.length > 0 ? lastNameMaxLengthError : lastNameIsEmpty}
                    isError={lastNameMaxLengthError.length > 0 ? true : lastNameIsEmpty.length > 0}
                    onChange={e => {
                        const newLastName = String(e.currentTarget.value);
                        setCurrentLastName(newLastName);
                        user.last_name = newLastName;
                    }}
                    onBlur={lastName.onBlur}
                />
                <ProfileInput
                    value={user.bio}
                    type='text'
                    placeholder='Bio'
                    id='bio'
                    labelText=''
                    name='bio'
                    required
                    errorText={bioMaxLengthError.length > 0 ? bioMaxLengthError : bioIsEmpty}
                    isError={bioMaxLengthError.length > 0 ? true : bioIsEmpty.length > 0}
                    onChange={e => {
                        const newBio = String(e.currentTarget.value);
                        setCurrentBio(newBio);
                        user.bio = newBio;
                    }}
                    onBlur={bio.onBlur}
                />
                <button
                    className={styles.button}
                    onClick={(e) => {
                        e.preventDefault();
                        setReady(true);
                    }}
                    disabled={isButtonDisabled}
                >
                    {'Сохранить'}
                </button>
            </form>
        </div>
    );
}
