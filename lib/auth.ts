import { auth } from '@/firebase/firebase';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { createUserIfNotExist } from './services/frontend/userService';

const googleOAuthProvider = new GoogleAuthProvider();

export const signInWithGooglePopUp = async () => {
  const result = await signInWithPopup(auth, googleOAuthProvider);
  const credential = GoogleAuthProvider.credentialFromResult(result);
  const accessToken = credential?.accessToken;
  const user = result.user;
  await createUserIfNotExist(user);
};
