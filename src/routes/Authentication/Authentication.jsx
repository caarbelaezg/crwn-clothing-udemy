import React from 'react';

import SingUpForm from '../../components/SignUpForm/SignUpForm';
import SignInForm from '../../components/SignInForm';

import './Authentication.scss';

function Authentication() {
  return (
    <div className='authentication-container'>
      <SignInForm />
      <SingUpForm />
    </div>
  );
}

export default Authentication;
