import { NavLink } from 'react-router-dom';
import SignUp from '../../components/SignUp';

const RegisterPage = () => {
  return (
    <div>
      <h1>Register</h1>
      <SignUp />
      <p>
        Sign in
        <NavLink style={{ color: 'black', textDecoration: 'none' }} to='/login'>
          <span> Login</span>
        </NavLink>
      </p>
    </div>
  );
};

export default RegisterPage;
