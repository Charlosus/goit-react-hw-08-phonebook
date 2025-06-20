import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from '../redux/contactsOperations';

export const PhonebookInput = () => {
  const initialState = { name: '', number: '' };
  const dispatch = useDispatch();
  const [state, setState] = useState(initialState);

  const handleChange = evt => {
    const { name, value } = evt.target;
    setState(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    dispatch(addContact({ name: state.name, number: state.number }));
    setState(initialState);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Name
          <input
            type="text"
            name="name"
            value={state.name}
            pattern="^[a-zA-Z]+(([' -][a-zA-Z])?[a-zA-Z]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan."
            required
            onChange={handleChange}
          />
        </label>
        <label>
          {' '}
          Number
          <input
            type="tel"
            name="number"
            value={state.number}
            pattern="^\+?[0-9\- ]+(\([0-9\- ]+\))?[0-9\- ]*$"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={handleChange}
          ></input>
        </label>
        <button type="submit">Add contact</button>
      </form>
    </div>
  );
};
