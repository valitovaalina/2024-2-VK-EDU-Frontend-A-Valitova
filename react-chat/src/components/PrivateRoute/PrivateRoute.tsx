import {Navigate, Outlet} from 'react-router-dom';
import {AppApiRoute} from '../../consts/AppRoute';
import {useAuth} from '../../hooks/useAuth';

export const PrivateRoute = () => {
    const {isUserAuth} = useAuth();

    return (isUserAuth ? <Outlet /> : <Navigate to={AppApiRoute.Login} replace />);
};