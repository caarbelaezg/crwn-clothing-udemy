import React, { useState } from 'react';

// Firebase
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from '../../utils/firebase/firebase.utils';

// Constants
import { defaultSignUpFormFields } from '../../constats';

// Components
import FormInput from '../FormInput/FormInput';
import Button from '../../components/Button';

// Styles
import './SignUpForm.scss';

function SignUpForm() {
  const [formFields, setFormFields] = useState(defaultSignUpFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert('passwords do not match');
      return;
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      await createUserDocumentFromAuth(user, { displayName });
      setFormFields(defaultSignUpFormFields);
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        alert('Cannot create user, email al ready in use');
      } else {
        console.log(error);
      }
    }
    setFormFields(defaultSignUpFormFields);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className='sign-up-container'>
      <h2>Don't have an account?</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label='Display name'
          required
          type='text'
          name='displayName'
          value={displayName}
          onChange={handleChange}
        />

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

        <FormInput
          label='Confirm your password'
          required
          type='password'
          name='confirmPassword'
          value={confirmPassword}
          onChange={handleChange}
        />
        <Button type='submit'>Sing up</Button>
      </form>
    </div>
  );
}

export default SignUpForm;
