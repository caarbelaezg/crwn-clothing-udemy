import React, { useState } from 'react';

// Firebase
import {
  singInWithGooglePopup,
  createUserDocumentFromAuth,
  signInAuthUserWithEmailAndPassword,
} from '../../utils/firebase/firebase.utils';

// Constants
import { defaultSignInFormFields } from '../../constats';

// Components
import FormInput from '../FormInput/FormInput';
import Button from '../Button';

// Styles
import './SignInForm.scss';

function SignInForm() {
  const [formFields, setFormFields] = useState(defaultSignInFormFields);
  const { email, password } = formFields;

  const signInWithGoogle = async () => {
    await singInWithGooglePopup();
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await signInAuthUserWithEmailAndPassword(email, password);
      setFormFields(defaultSignInFormFields);
    } catch (error) {
      if (error.code === 'auth/wrong-password') {
        alert('email or password incorrect');
      }
      console.log(error);
    }
    setFormFields(defaultSignInFormFields);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className='sign-up-container'>
      <h2>Already have an account</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label='Email'
          required
          type='email'
          name='email'
          value={email}
          onChange={handleChange}
        />

        <FormInput
          label='Password'
          required
          type='password'
          name='password'
          value={password}
          onChange={handleChange}
        />
        <div className='buttons-container'>
          <Button type='submit'>Sign in</Button>
          <Button buttonType='google' type='button' onClick={signInWithGoogle}>
            Google sign in
          </Button>
        </div>
      </form>
    </div>
  );
}

export default SignInForm;
