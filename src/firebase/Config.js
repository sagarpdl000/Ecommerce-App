import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyATv5kCFSZK3-mmosNb3kic4XDTsfcna0A",
    authDomain: "ecommerce-project1-f512d.firebaseapp.com",
    projectId: "ecommerce-project1-f512d",
    storageBucket: "ecommerce-project1-f512d.appspot.com",
    messagingSenderId: "843182274690",
    appId: "1:843182274690:web:f97b9e4854adc7d520dc9b"
  };

firebase.initializeApp(firebaseConfig);


const projectAuth = firebase.auth()



export {projectAuth};