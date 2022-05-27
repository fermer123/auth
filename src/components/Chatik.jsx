import {
  collection,
  doc,
  getDocs,
  getFirestore,
  onSnapshot,
  setDoc,
} from 'firebase/firestore';
import { useEffect, useState } from 'react';

const Chatik = () => {
  const [messeges, setMesseges] = useState([]);

  useEffect(() => {
    const db = getFirestore();
    const mes = onSnapshot(collection(db, 'messages'), (doc) => {
      doc.forEach((d) => {
        setMesseges((e) => [d.data().Text, e]); //не понял почему
        console.log(d.data().Text);
      });
      console.log(messeges);
    });

    return () => {
      mes();
    };
  }, []);
  return (
    <div style={{ width: '200px', height: '100px' }}>
      {messeges.map((e) => {
        <div>1</div>;
      })}
    </div>
  );
};

export default Chatik;
