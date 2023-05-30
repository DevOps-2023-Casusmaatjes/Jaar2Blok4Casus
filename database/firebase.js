const firebaseConfig = {
  apiKey: "AIzaSyBSRVWzmDx3qnSR0FUyjAH2NkfuN3XsnBE",
  authDomain: "trojan-devops-forums.firebaseapp.com",
  databaseURL: "https://trojan-devops-forums-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "trojan-devops-forums",
  storageBucket: "trojan-devops-forums.appspot.com",
  messagingSenderId: "87629673126",
  appId: "1:87629673126:web:1604aa8df69f7b397e7a67",
  measurementId: "G-FT8Q94J2BZ"
}

firebase.initializeApp(firebaseConfig)
const db = firebase.firestore();