import { setUser } from '../store/slices/userSlice';
import { Form } from './Form';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { useDispatch } from 'react-redux';

const SignUp = () => {
  const dispatch = useDispatch();

  const handleRegister = (email, password) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then(console.log)
      .catch(console.error);
  };
  return <Form title='register' handleClick={handleRegister} />;
};

export default SignUp;
