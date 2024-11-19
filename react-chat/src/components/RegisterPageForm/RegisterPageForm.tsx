import {type FC, type FormEvent} from 'react';
import {useNavigate} from 'react-router-dom';
import {AuthApi} from '../../api/auth';
import {AppApiRoute} from '../../consts/AppRoute';
import {useInput} from '../../hooks/useInput';
import {AuthHeader} from '../AuthHeader/AuthHeader';
import {AuthHelpAction} from '../AuthHelpAction/AuthHelpAction';
import {AuthInput} from '../AuthInput/AuthInput';
import styles from './RegisterPageForm.module.scss';

export const RegisterPageForm: FC = () => {
    const navigate = useNavigate();
    const username = useInput('', {isEmpty: true, maxLength: 50});
    const password = useInput('', {isEmpty: true, maxLength: 50});
    const first_name = useInput('', {isEmpty: true, maxLength: 50});
    const last_name = useInput('', {isEmpty: true, maxLength: 50});
    const bio = useInput('', {isEmpty: true, maxLength: 50});
    const usernameMaxLengthError = (username.isDirty && username.maxLengthError) &&
        <div className={styles.error}>Поле должно содержать меньше 50 символов!</div>;
    const usernameIsError = (username.isDirty && username.isEmpty) &&
        <div className={styles.error}>Поле не может быть пустым!</div>;
    const passwordMaxLengthError = (password.isDirty && password.maxLengthError) &&
        <div className={styles.error}>Поле должно содержать меньше 50 символов!</div>;
    const passwordIsEmpty = (password.isDirty && password.isEmpty) &&
        <div className={styles.error}>Поле не может быть пустым!</div>;
    const first_nameMaxLengthError = (first_name.isDirty && first_name.maxLengthError) &&
        <div className={styles.error}>Поле должно содержать меньше 50 символов!</div>;
    const first_nameIsEmpty = (first_name.isDirty && first_name.isEmpty) &&
        <div className={styles.error}>Поле не может быть пустым!</div>;
    const last_nameMaxLengthError = (last_name.isDirty && last_name.maxLengthError) &&
        <div className={styles.error}>Поле должно содержать меньше 50 символов!</div>;
    const last_nameIsEmpty = (last_name.isDirty && last_name.isEmpty) &&
        <div className={styles.error}>Поле не может быть пустым!</div>;
    const bioMaxLengthError = (bio.isDirty && bio.maxLengthError) &&
        <div className={styles.error}>Поле должно содержать меньше 50 символов!</div>;
    const bioIsEmpty = (bio.isDirty && bio.isEmpty) && <div className={styles.error}>Поле не может быть пустым!</div>;

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const authApi = new AuthApi();

        try {
            const data = await authApi.register({
                username: username.value,
                password: password.value,
                first_name: first_name.value,
                last_name: last_name.value,
                bio: bio.value,
            });
            if (data) {
                navigate(AppApiRoute.Login);
            }
        } catch (error) {
            alert(error);
        }
    }

    return (
        <div className={styles.authPage}>
            <div className={styles.auth}>
                <AuthHeader title={'Регистрация'} />
                <form action="#" className={styles.form} onSubmit={handleSubmit}>
                    {usernameMaxLengthError}{usernameIsError}
                    <AuthInput onChange={username.onChange} onBlur={username.onBlur} value={username.value} type='text'
                               placeholder='Username' id='username' labelText='Username'/>
                    {first_nameIsEmpty}{first_nameMaxLengthError}
                    <AuthInput onChange={first_name.onChange} onBlur={first_name.onBlur} value={first_name.value}
                               type='first_name' placeholder='First_name' id='first_name' labelText='First_name'/>
                    {last_nameIsEmpty}{last_nameMaxLengthError}
                    <AuthInput onChange={last_name.onChange} onBlur={last_name.onBlur} value={last_name.value}
                               type='last_name' placeholder='Last_name' id='last_name' labelText='Last_name'/>
                    {bioIsEmpty}{bioMaxLengthError}
                    <AuthInput onChange={bio.onChange} onBlur={bio.onBlur} value={bio.value} type='bio'
                               placeholder='Bio' id='bio' labelText='Bio'/>
                    {passwordIsEmpty}{passwordMaxLengthError}
                    <AuthInput onChange={password.onChange} onBlur={password.onBlur} value={password.value}
                               type='password' placeholder='Password' id='password' labelText='Password'/>
                    <button
                        type={'submit'}
                        className={styles.button}
                        disabled={!username.inputValid || !password.inputValid || !first_name.inputValid || !last_name.inputValid || !bio.inputValid}
                    >
                        Зарегистироваться
                    </button>
                </form>
                <AuthHelpAction text='Уже есть аккаунт?' link='Войти' path={AppApiRoute.Login} />
            </div>
        </div>
    );
}
