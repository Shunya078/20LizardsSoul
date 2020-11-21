import firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCojmWk2lEuo1PazIOvl1__9BoHNe8Yt5E",
  authDomain: "lizards-cfa3e.firebaseapp.com",
  databaseURL: "https://lizards-cfa3e.firebaseio.com",
  projectId: "lizards-cfa3e",
  storageBucket: "lizards-cfa3e.appspot.com",
  messagingSenderId: "521898435523",
  appId: "1:521898435523:web:1ba99744105e77b2f55376",
  measurementId: "G-7P3M2HX2LK",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
  const settings = { timestampsInSnapshots: true };
  firebase.firestore().settings(settings);
}

export default firebase;
export const auth = firebase.auth();
export const firestore = firebase.firestore();
