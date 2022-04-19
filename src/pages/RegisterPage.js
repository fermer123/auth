import { Link } from 'react-router-dom';

const RegisterPage = () => {
  return (
    <div>
      <div>Register</div>
      <p>
        Sign in <Link to='/login'>Login</Link>
      </p>
    </div>
  );
};

export default RegisterPage;
