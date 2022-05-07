import { useState } from 'react';

const Form = ({ title, handleClick }) => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  return (
    <div>
      <input
        type='email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type='password'
        value={pass}
        onChange={(e) => setPass(e.target.value)}
      />
      <button onClick={handleClick}>{title}</button>
    </div>
  );
};

export default Form;
