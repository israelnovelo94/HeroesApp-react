import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../auth/authcontext';


export const PrivateRoute = ({children}) => {
    const location = useLocation();
    const loc = location.pathname+location.search;
    localStorage.setItem('lastPath', loc);

    const {user} = useContext(AuthContext);

  return user.logged
        ? children
        : <Navigate to="/login" />
}
