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
import { v4 as uuidv4 } from 'uuid';
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
        console.log(d);
        //setMesseges((e) => [...e, d.data()]);
        msg.push(d.data(d));
        setMesseges(msg);
      });
    });

    return () => {
      mes();
    };
  }, []);

  console.log(messeges);

  const addMessage = async () => {
    await addDoc(collection(db, 'messages'), {
      text,
      email,
      id: uuidv4(),
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
