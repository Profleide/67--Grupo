import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyAP1vny5ySusFns9gx5i4uyFVcDiZf0O1w",
  authDomain: "wrireless-byzzer.firebaseapp.com",
  databaseURL: "https://wrireless-byzzer-default-rtdb.firebaseio.com",
  projectId: "wrireless-byzzer",
  storageBucket: "wrireless-byzzer.appspot.com",
  messagingSenderId: "946508423329",
  appId: "1:946508423329:web:a645082e30afe4319690e0",
  measurementId: "G-QXJXZE41NM"
};


// Initialize Firebase
let app = firebase.initializeApp(firebaseConfig);
export default app.database();
