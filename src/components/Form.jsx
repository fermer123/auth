import { useState } from 'react';

const Form = ({ title, handleClick }) => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  return (
    <div>
      <input
        placeholder='Email'
        type='email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        placeholder='Password'
        type='password'
        value={pass}
        onChange={(e) => setPass(e.target.value)}
      />
      <button onClick={() => handleClick(email, pass)}>{title}</button>
    </div>
  );
};

export { Form };
