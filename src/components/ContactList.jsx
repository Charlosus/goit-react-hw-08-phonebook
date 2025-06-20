import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { deleteContact } from '../redux/contactsOperations';
import { ClipLoader } from 'react-spinners';

export const ContactList = () => {
  const { items, isLoading, error } = useSelector(state => state.contacts);

  const dispatch = useDispatch();
  const [filter, setFilter] = useState('');

  const handleFilterChange = ({ target }) => setFilter(target.value);

  const filteredContacts = items.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  const handleDelete = id => dispatch(deleteContact(id));

  return (
    <div>
      <label>
        Find contact by name
        <input
          type="text"
          placeholder="Search by name"
          value={filter}
          onChange={handleFilterChange}
        />
      </label>
      <ul>
        {isLoading && (
          <div
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100vw',
              height: '100vh',
              backgroundColor: 'rgba(255, 255, 255, 0.7)',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              zIndex: 9999,
            }}
          >
            <ClipLoader color="#ff6b08" size={40} />
          </div>
        )}
        {error && <p>Error: {error}</p>}
        {filteredContacts.map(item => (
          <li key={item.id}>
            {item.name}: {item.number}{' '}
            <button onClick={() => handleDelete(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
