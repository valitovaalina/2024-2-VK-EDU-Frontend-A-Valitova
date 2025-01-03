import {type FC, type FormEvent, useEffect, useState} from 'react';
import {type AxiosError} from 'axios';
import {useInput} from '../../hooks/useInput';
import styles from './ProfileBasicEdit.module.scss';
import type {UserApiType} from '../../types/user/index';
import {ProfilePageInput} from '../ProfilePageInput/ProfilePageInput';
import {useAppDispatch} from '../../hooks/useStore';
import {updateUser} from '../../store/apiActions';
import {updateUserBio, updateUserFirstName, updateUserLastName} from '../../store/actions';
import {LazyImage} from '../LazyImage/LazyImage';

interface IProfileBasicEdit {
    user: UserApiType;
    editBasicHandler: () => void;
}

export const ProfileBasicEdit: FC<IProfileBasicEdit> = ({user, editBasicHandler}) => {
    const dispatch = useAppDispatch();

    const [currentFirstName, setCurrentFirstName] = useState<string | null>(user.first_name);
    const [currentLastName, setCurrentLastName] = useState<string | null>(user.last_name);
    const [currentBio, setCurrentBio] = useState<string | null>(user.bio ?? '');

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
        
        if (currentFirstName === user.first_name) {
            setCurrentFirstName(null);
        }
        else
            setCurrentFirstName(user.first_name);

        if (currentLastName === user.last_name) {
            setCurrentLastName(null);
        }
        else
            setCurrentLastName(user.last_name);

        if (currentBio === user.bio) {
            setCurrentBio(null);
        }
        else
            setCurrentBio(user.bio ?? '');

        editBasicHandler();

        dispatch(updateUser(
            {
                id: user.id,
                userData: {
                    first_name: currentFirstName ?? user.first_name,
                    last_name: currentLastName ?? user.last_name,
                    bio: currentBio ?? user.bio ?? '',
                }
            }
        )).catch((err: AxiosError) => alert(err));
    }, [isReady, dispatch]);

    return (
        <div className={styles.container}>
            <div>
                <LazyImage
                    src={user.avatar}
                    alt={'profile'}
                    style={{
                        "width": "150px",
                        "height": "150px",
                        "borderRadius": "100%",
                    }}
                />
            </div>
            <form
                onSubmit={(e: FormEvent<HTMLFormElement>) => {
                    e.preventDefault();
                    setReady(true);
                }}>
                <h1 className={styles.header}>Основное</h1>
                <ProfilePageInput
                    value={user.first_name}
                    type='text'
                    placeholder='Имя'
                    id='first_name'
                    labelText=''
                    name='first_name'
                    required
                    errorText={firstNameMaxLengthError.length > 0 ? firstNameMaxLengthError : firstNameIsEmpty}
                    isError={firstNameMaxLengthError.length > 0 ? true : firstNameIsEmpty.length > 0}
                    onChange={(e: FormEvent<HTMLInputElement>) => {
                        const newFirstName = String(e.currentTarget.value);
                        setCurrentFirstName(newFirstName);
                        dispatch(updateUserFirstName(newFirstName));
                    }}
                    onBlur={firstName.onBlur}
                />
                <ProfilePageInput
                    value={user.last_name}
                    type='text'
                    placeholder='Фамилия'
                    id='last_name'
                    labelText=''
                    name='last_name'
                    required
                    errorText={lastNameMaxLengthError.length > 0 ? lastNameMaxLengthError : lastNameIsEmpty}
                    isError={lastNameMaxLengthError.length > 0 ? true : lastNameIsEmpty.length > 0}
                    onChange={(e: FormEvent<HTMLInputElement>) => {
                        const newLastName = String(e.currentTarget.value);
                        setCurrentLastName(newLastName);
                        dispatch(updateUserLastName(newLastName));
                    }}
                    onBlur={lastName.onBlur}
                />
                <ProfilePageInput
                    value={user.bio ?? ''}
                    type='text'
                    placeholder='Bio'
                    id='bio'
                    labelText=''
                    name='bio'
                    required
                    errorText={bioMaxLengthError.length > 0 ? bioMaxLengthError : bioIsEmpty}
                    isError={bioMaxLengthError.length > 0 ? true : bioIsEmpty.length > 0}
                    onChange={(e: FormEvent<HTMLInputElement>) => {
                        const newBio = String(e.currentTarget.value);
                        setCurrentBio(newBio);
                        dispatch(updateUserBio(newBio));
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
                    Сохранить
                </button>
            </form>
        </div>
    );
}
