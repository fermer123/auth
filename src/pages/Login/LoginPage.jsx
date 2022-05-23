import { NavLink } from 'react-router-dom';
import Login from '../../components/Login';
import style from './Login.module.scss';

const LoginPage = () => {
  return (
    <div>
      <h1>Login</h1>
      <Login />
      <p>
        or
        <NavLink
          style={{ color: 'black', textDecoration: 'none' }}
          to='/register'
        >
          <span> register</span>
        </NavLink>
      </p>
    </div>
  );
};

export default LoginPage;
