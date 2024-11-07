import {type FC, type FormEvent} from 'react';
import {useNavigate} from 'react-router-dom';
import {AuthApi} from '../../api/auth';
import {AppApiRoute} from '../../consts/AppRoute';
import {useInput} from '../../hooks/useInput';
import {AuthHeader} from '../AuthHeader/AuthHeader';
import {AuthHelpAction} from '../AuthHelpAction/AuthHelpAction';
import {AuthInput} from '../AuthInput/AuthInput';
import styles from './LoginPageForm.module.scss';

export const LoginPageForm: FC = () => {
    const navigate = useNavigate();
    const username = useInput('', {isEmpty: true, maxLength: 50});
    const password = useInput('', {isEmpty: true, maxLength: 50});
    const usernameMaxLengthError = (username.isDirty && username.maxLengthError) && <div className={styles.error}>Поле должно содержать меньше 50 символов!</div>;
    const usernameIsError = (username.isDirty && username.isEmpty) && <div className={styles.error}>Поле не может быть пустым!</div>;
    const passwordMaxLengthError = (password.isDirty && password.maxLengthError) && <div className={styles.error}>Поле должно содержать меньше 50 символов!</div>;
    const passwordIsEmpty = (password.isDirty && password.isEmpty) && <div className={styles.error}>Поле не может быть пустым!</div>;

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const authApi = new AuthApi();

        try {
            const data = await authApi.auth({
                username: username.value,
                password: password.value
            });
            if (data) {
                navigate(AppApiRoute.Chats);
            }
        } catch (error) {
            alert(error);
        }
    }

    return (
        <div className={styles.authPage}>
            <div className={styles.auth}>
                <AuthHeader title={'Вход'} />
                <form action="#" className={styles.form} onSubmit={handleSubmit}>
                    {usernameMaxLengthError}{usernameIsError}
                    <AuthInput onChange={username.onChange} onBlur={username.onBlur} value={username.value} type='username' placeholder='Username' id='username' labelText='Username' />
                    {passwordIsEmpty}{passwordMaxLengthError}
                    <AuthInput onChange={password.onChange} onBlur={password.onBlur} value={password.value} type='password' placeholder='Passord' id='password' labelText='Password' />
                    <button
                        type={'submit'}
                        className={styles.button}
                        disabled={!username.inputValid || !password.inputValid}
                    >
                        Войти
                    </button>
                </form>
                <AuthHelpAction text='Нет аккаунта?' link='Зарегистрироваться' path={AppApiRoute.Register} />
            </div>
        </div>
    );
}
