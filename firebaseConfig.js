import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBZyMlcU9-i0Ni_VnbTWIZuR7ho0WsDimg",
  authDomain: "examen-segundo-parcial-1ae56.firebaseapp.com",
  projectId: "examen-segundo-parcial-1ae56",
  storageBucket: "examen-segundo-parcial-1ae56.firebasestorage.app",
  messagingSenderId: "571422843550",
  appId: "1:571422843550:web:abdb1ed275b3ff90cd918f"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };