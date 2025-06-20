import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectIsLoggedIn } from '../redux/auth/authSelectors';

export default function RestrictedRoute({ element, redirectPath }) {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return isLoggedIn ? <Navigate to={redirectPath} /> : element;
}
