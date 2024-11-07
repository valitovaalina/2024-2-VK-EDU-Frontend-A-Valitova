import {Navigate} from 'react-router-dom';
import {AppApiRoute} from '../../consts/AppRoute';
import {useAuth} from '../../hooks/useAuth';

export const PrivateRoute = (props: {
    children: JSX.Element;
}) => {
    const {isUserAuth} = useAuth();

    return (isUserAuth ? props.children : <Navigate to={AppApiRoute.Login} />);
};