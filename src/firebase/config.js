import * as firebase from 'firebase/app'
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
  var firebaseConfig = {
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

  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();

  export { projectStorage,projectFirestore };
