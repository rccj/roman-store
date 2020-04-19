import firebase from 'firebase/app'
import 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCqx4wKV5Qdk6tdcOQYUJz529JCMAlP1WE",
  authDomain: "do-more-5e3b3.firebaseapp.com",
  databaseURL: "https://do-more-5e3b3.firebaseio.com",
  projectId: "do-more-5e3b3",
  storageBucket: "do-more-5e3b3.appspot.com",
  messagingSenderId: "1034373025906",
  appId: "1:1034373025906:web:53c95284c9f8d9b760b2eb",
  measurementId: "G-QB54B3VLTL"
};
// Initialize Firebase
const firebaseApp  = firebase.initializeApp(firebaseConfig);
// firebase.analytics();
export default firebaseApp.firestore()
