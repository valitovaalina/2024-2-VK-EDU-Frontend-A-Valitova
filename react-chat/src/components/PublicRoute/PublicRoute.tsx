import {Navigate, Outlet} from 'react-router-dom';
import {AppApiRoute} from '../../consts/AppRoute';
import {useAuth} from '../../hooks/useAuth';

export const PublicRoute = () => {
    const {isUserAuth} = useAuth();

    return (isUserAuth ? <Navigate to={AppApiRoute.Root} replace /> : <Outlet />);
};