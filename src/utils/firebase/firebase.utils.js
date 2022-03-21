import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyAzLdUq1_gzX1gtEz_VsxUTNmCR1KzRyKI',
  authDomain: 'crwn-database-c814b.firebaseapp.com',
  projectId: 'crwn-database-c814b',
  storageBucket: 'crwn-database-c814b.appspot.com',
  messagingSenderId: '288325315057',
  appId: '1:288325315057:web:e2391817be20eef35cfc50',
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: 'select_account',
});

export const auth = getAuth();
export const singInWithGooglePopup = () => signInWithPopup(auth, provider);
