import { useDispatch, useSelector } from 'react-redux';
import { logOut } from '../redux/auth/authOperations';
import { selectUser } from '../redux/auth/authSelectors';

export default function UserNav() {
  const dispatch = useDispatch();
  const { name = 'Guest' } = useSelector(selectUser) || {};
  const handleLoggOut = () => {
    dispatch(logOut());
  };
  return (
    <div>
      <p>Welcom, {name}</p>
      <button onClick={handleLoggOut}>Logout</button>
    </div>
  );
}
