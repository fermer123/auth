import { Link } from 'react-router-dom';

const LoginPage = () => {
  return (
    <div>
      <div>Login</div>
      <p>
        Or <Link to='/register'>register</Link>
      </p>
    </div>
  );
};

export default LoginPage;
