import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/authOperations';

export default function RegisterForm() {
  const dispatch = useDispatch();
  const handleSubmit = e => {
    e.preventDeault();
    const form = e.target;
    const { name, email, password } = form.elements;
    dispatch(
      register({
        name: name.value,
        email: email.value,
        password: password.value,
      })
    );
    form.reset();
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name
        <input type="text" name="name" />
      </label>
      <br />
      <label>
        Email
        <input type="email" name="email" />
      </label>
      <br />
      <label>
        Password
        <input type="password" name="password" />
      </label>
      <br />
      <button typ="submit">Register</button>
    </form>
  );
}
