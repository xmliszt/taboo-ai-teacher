import { auth } from "@/firebase/firebase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const googleOAuthProvider = new GoogleAuthProvider();

export const signInWithGooglePopUp = async () => {
  try {
    const result = await signInWithPopup(auth, googleOAuthProvider);
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const accessToken = credential?.accessToken;
    const user = result.user;
    console.log(user, accessToken);
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    const email = error.customData.email;
    const credential = GoogleAuthProvider.credentialFromError(error);
    console.log(errorCode, errorMessage, email, credential);
  }
};
