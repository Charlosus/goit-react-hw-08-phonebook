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

import { Route, Router } from "react-router-dom";
import { SharedLayout} from './sharedLayout';

import { lazy } from "react";

const HomePage = lazy(() => import('../pages/Home/Home'));
const LoginPage = lazy(() => import('../pages/Login/Login'));
const ContactsPage = lazy(() => import('../pages/Contacts/Contacts'));
const RegisterPage = lazy(() => import('../pages/Register/Register'));

function App () {

  return (
    <SharedLayout>
      <Routs>
        <Route
        path='/' 
        element={<HomePage/>}/>
      </Routs>
    </SharedLayout>
  )
}
