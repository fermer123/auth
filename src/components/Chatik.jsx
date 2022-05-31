import {
  addDoc,
  collection,
  doc,
  getDocs,
  getFirestore,
  onSnapshot,
} from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { useAuth } from '../hooks/useAuth';

const Chatik = () => {
  const { id } = useAuth();
  const { email } = useAuth();
  const [messeges, setMesseges] = useState([]);
  const [text, setText] = useState('');
  let msg = [];
  const db = getFirestore();
  useEffect(() => {
    const mes = onSnapshot(collection(db, 'messages'), (doc) => {
      doc.forEach((d) => {
        console.log(d.data());
        //setMesseges((e) => [...e, d.data()]);
        msg.push(d.data());
        setMesseges(msg);
      });
    });

    return () => {
      mes();
    };
  }, []);

  const addMessage = async () => {
    await addDoc(collection(db, 'messages'), {
      text,
      email,
    });
    setText('');
  };

  return (
    <div style={{ width: '400px', height: '500px', overflowX: 'scroll' }}>
      {messeges.map(({ text, id, email }) => (
        <div style={{ marginLeft: '100px' }} key={id}>
          <h4>{email}</h4>
          <h5>{text}</h5>
        </div>
      ))}

      <input value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={addMessage}>отправь</button>
    </div>
  );
};

export default Chatik;
