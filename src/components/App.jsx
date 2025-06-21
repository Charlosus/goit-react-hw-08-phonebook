import { Route, Routes } from 'react-router-dom';
import { SharedLayout } from './SharedLayout';
import { lazy, useEffect } from 'react';
import RestrictedRoute from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';
import { useDispatch, useSelector } from 'react-redux';
import { refreshUser } from '../redux/auth/authOperations';
import { selectIsRefreshing } from '../redux/auth/authSelectors';
import { ClipLoader } from 'react-spinners';

import './App.css';

const HomePage = lazy(() => import('../pages/Home/Home'));
const LoginPage = lazy(() => import('../pages/Login/Login'));
const ContactsPage = lazy(() => import('../pages/Contacts/Contacts'));
const RegisterPage = lazy(() => import('../pages/Register/Register'));

export function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  if (isRefreshing) {
    return <ClipLoader color="#ff6b08" size={40} />;
  }
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route
          path="contacts"
          element={
            <PrivateRoute redirectPath="/login" element={<ContactsPage />} />
          }
        />
        <Route
          path="login"
          element={
            <RestrictedRoute redirectPath="/contacts" element={<LoginPage />} />
          }
        />
        <Route
          path="register"
          element={
            <RestrictedRoute redirectPath="/tasks" element={<RegisterPage />} />
          }
        />
      </Route>
    </Routes>
  );
}
