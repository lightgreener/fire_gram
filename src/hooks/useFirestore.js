import { useState, useEffect } from 'react'
import { projectFirestore,database } from '../firebase/config'


const useFirestore = (collection) =>{
  const [docs, setDocs] = useState([]);
  useEffect(()=>{
    const unsub = projectFirestore.collection(collection)
    // database.collection(collection)
      .orderBy('createAt','desc')
      .onSnapshot((snap)=>{
        let documents=[];  //
        snap.forEach(doc =>{
          documents.push({...doc.data(), id: doc.id});
          // doc.data() 是cloud firestore 最后的url
          // doc.id() . 是自动生产的ID
        });
        setDocs(documents);
      });

    return ()=> unsub();
    // this is a cleanup function that react will run when
    // a component using the hook unmounts

  },[collection]);

  return {docs};
}

export default useFirestore;
