import React from 'react';

import { singInWithGooglePopup } from '../../utils/firebase/firebase.utils';

function SingIn() {
  const logGoogleUser = async () => {
    const reponse = await singInWithGooglePopup();
    console.log(reponse);
  };
  return (
    <div>
      <div>Sing</div>
      <button onClick={logGoogleUser}>Sing in with Google</button>
    </div>
  );
}

export default SingIn;
