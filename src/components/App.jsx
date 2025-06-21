// import { Section } from './Section';
// import { PhonebookInput } from './PhonebookInput';
// import { ContactList } from './ContactList';
// import { fetchContacts } from '../redux/contactsOperations';
// import { useDispatch } from 'react-redux';
// import { useEffect } from 'react';

// export const App = () => {
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(fetchContacts());
//   }, [dispatch]);

//   return (
//     <div>
//       <Section title="Phonebook">
//         <PhonebookInput />
//       </Section>
//       <Section title="Contacts">
//         <ContactList />
//       </Section>
//     </div>
//   );
// };

import { Route, Routes } from 'react-router-dom';
import { SharedLayout } from './SharedLayout';
import { lazy } from 'react';
import RestrictedRoute from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';
import './App.css';

const HomePage = lazy(() => import('../pages/Home/Home'));
const LoginPage = lazy(() => import('../pages/Login/Login'));
const ContactsPage = lazy(() => import('../pages/Contacts/Contacts'));
const RegisterPage = lazy(() => import('../pages/Register/Register'));

export function App() {
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
