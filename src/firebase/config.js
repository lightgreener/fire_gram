// import firebase from 'firebase/app';
import firebase from 'firebase'

import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyAsbI-xsHKWpFET55J8H9xWAD5ANYuWzbg",
    authDomain: "afternoon-firegram.firebaseapp.com",
    databaseURL: "https://afternoon-firegram.firebaseio.com",
    projectId: "afternoon-firegram",
    storageBucket: "afternoon-firegram.appspot.com",
    messagingSenderId: "326297334941",
    appId: "1:326297334941:web:3cf5693b77a9241b795074"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const database =firebase.database();

  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();
  // const projectData = firebase.database();  //在这个是错误的，没有database（） 方法
  // 下面 firebase 自己创建的时间邮票
  const timestamp =firebase.firestore.FieldValue.serverTimestamp;

  export { projectStorage,projectFirestore,timestamp,database};
