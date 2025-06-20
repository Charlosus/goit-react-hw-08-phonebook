import { Section } from './Section';
import { PhonebookInput } from './PhonebookInput';
import { ContactList } from './ContactList';
import { fetchContacts } from '../redux/contactsOperations';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <Section title="Phonebook">
        <PhonebookInput />
      </Section>
      <Section title="Contacts">
        <ContactList />
      </Section>
    </div>
  );
};
