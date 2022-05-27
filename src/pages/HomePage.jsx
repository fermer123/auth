import { useDispatch } from 'react-redux';
import { Navigate } from 'react-router-dom';
import Chatik from '../components/Chatik';
import { useAuth } from '../hooks/useAuth';
import { removeUser } from '../store/slices/userSlice';

const HomePage = () => {
  const dispatch = useDispatch();
  const { isAuth, email } = useAuth();
  return isAuth ? (
    <div>
      <h1> Welcome</h1>
      <Chatik />
      <button
        onClick={() => {
          dispatch(removeUser());
        }}
      >
        Log out from {email}
      </button>
    </div>
  ) : (
    <Navigate to='/login' />
  );
};

export default HomePage;
