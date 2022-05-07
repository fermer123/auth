import { setUser } from '../store/slices/userSlice';
import { Form } from './Form';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const dispatch = useDispatch();
  const push = useNavigate();

  const handleLogin = (email, password) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            token: user.accessToken,
          }),
        );
        push('/');
      })
      .catch(console.error);
  };
  return (
    <div>
      <Form title='sign in' handleClick={handleLogin} />
    </div>
  );
};

export default Login;
