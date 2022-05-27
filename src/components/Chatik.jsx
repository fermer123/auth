import {
  addDoc,
  collection,
  doc,
  getDocs,
  getFirestore,
  onSnapshot,
} from 'firebase/firestore';
import { useEffect, useState } from 'react';

const Chatik = () => {
  const [messeges, setMesseges] = useState([]);
  const [content, setContent] = useState('');
  let msg = [];
  const db = getFirestore();
  useEffect(() => {
    const mes = onSnapshot(collection(db, 'messages'), (doc) => {
      doc.forEach((d) => {
        //setMesseges((e) => [...e, d.data()]);
        msg.push(d.data());
        setMesseges(msg);
      });
    });

    return () => {
      mes();
    };
  }, []);

  console.log(messeges);

  const addMessage = async (e) => {
    await addDoc(collection(db, 'messages'), {
      content,
    });
    setContent('');
  };

  return (
    <div style={{ width: '400px', height: '500px' }}>
      {messeges.map((e) => (
        <div style={{ marginLeft: '100px' }} key={e.id}>
          {e.Text}
        </div>
      ))}
      {messeges.map((e) => (
        <div style={{ marginRight: '100px' }} key={e.id}>
          {e.content}
        </div>
      ))}
      <input value={content} onChange={(e) => setContent(e.target.value)} />
      <button onClick={addMessage}>отправь</button>
    </div>
  );
};

export default Chatik;
