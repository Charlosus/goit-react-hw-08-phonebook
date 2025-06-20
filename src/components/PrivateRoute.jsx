import { Navigate } from 'react-router-dom';
import { selectIsLoggedIn } from '../redux/auth/authSelectors';
import { useSelector } from 'react-redux';

export function PrivateRoute({ element, redirectPath }) {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return isLoggedIn ? element : <Navigate to={redirectPath} />;
}
