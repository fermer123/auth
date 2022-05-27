import {
  addDoc,
  collection,
  doc,
  getDocs,
  getFirestore,
  onSnapshot,
} from 'firebase/firestore';
import { useEffect, useState } from 'react';
const data = new Date();
const Chatik = () => {
  const [messeges, setMesseges] = useState([]);
  let msg = [];
  useEffect(() => {
    const db = getFirestore();
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
  {
    console.log(messeges);
  }
  // const addMessage = async (e) => {
  //   await addDoc;
  // };
  console.log(msg);
  return (
    <div style={{ width: '200px', height: '100px' }}>
      {messeges.map((e) => (
        <div>{e.Text}</div>
      ))}
    </div>
  );
};

export default Chatik;
