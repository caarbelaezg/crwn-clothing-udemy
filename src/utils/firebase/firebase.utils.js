import { async } from '@firebase/util';
import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
} from 'firebase/auth';

import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

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

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: 'select_account',
});

export const auth = getAuth(); // keeps track of user authentication state

export const singInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);

export const singInWithGoogleRedirect = () =>
  signInWithRedirect(auth, googleProvider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInformation = {}
) => {
  if (!userAuth) return;

  const userDocRef = doc(db, 'users', userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth; // get data from user when tried to log in
    const createdAt = new Date(); // set a date to know when was the user created

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      });
    } catch (error) {
      console.log('error creating the user', error);
    }
  }

  return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await createAuthUserWithEmailAndPassword(auth, email, password);
};
