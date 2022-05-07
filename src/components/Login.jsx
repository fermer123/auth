import { setUser } from '../store/slices/userSlice';
import { Form } from './Form';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useDispatch } from 'react-redux';

const Login = () => {
  const dispatch = useDispatch();

  const handleLogin = (email, password) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(console.log)
      .catch(console.error);
  };
  return (
    <div>
      <Form title='sign in' handleClick={handleLogin} />
    </div>
  );
};

export default Login;
