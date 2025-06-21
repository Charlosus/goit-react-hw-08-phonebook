import { PhonebookInput } from './PhonebookInput';
import { Section } from './Section';
import { ContactList } from './ContactList';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from '../../redux/contactsOperations';

const Contacts = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className='main'>
      <Section title="Phonebook">
        <PhonebookInput />
      </Section>
      <Section title="Contacts">
        <ContactList />
      </Section>
    </div>
  );
};

export default Contacts;
