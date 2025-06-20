export const Contacts = () => {
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
