import React, { useEffect } from 'react';
import { getRedirectResult } from 'firebase/auth';

import {
  auth,
  createUserDocumentFromAuth,
  singInWithGooglePopup,
  singInWithGoogleRedirect,
} from '../../utils/firebase/firebase.utils';
import SingUpForm from '../../components/SignUpForm/SignUpForm';

function SignIn() {
  useEffect(async () => {
    const response = await getRedirectResult(auth);
    if (response) {
      const userDocRef = await createUserDocumentFromAuth(response.user);
    }
  }, []);

  const logGoogleUser = async () => {
    const { user } = await singInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <div>Sing</div>
      <button onClick={logGoogleUser}>Sing in with Google</button>
      <button onClick={singInWithGoogleRedirect}>
        Sing in with Google Redirect
      </button>

      <SingUpForm />
    </div>
  );
}

export default SignIn;
