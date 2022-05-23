import { Link } from 'react-router-dom';
import SignUp from '../components/SignUp';

const RegisterPage = () => {
  return (
    <div>
      <div>Register</div>
      <SignUp />
      <p>
        Sign in <Link to='/login'>Login</Link>
      </p>
    </div>
  );
};

export default RegisterPage;
