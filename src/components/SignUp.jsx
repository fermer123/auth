import { useDispatch } from 'react-redux';
import { setUser } from '../store/slices/userSlice';
import { Form } from './Form';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

const SignUp = () => {
  const auth = getAuth();
  const dispatch = useDispatch();

  const handleLogin = () => {};
  return <div></div>;
};

export default SignUp;
