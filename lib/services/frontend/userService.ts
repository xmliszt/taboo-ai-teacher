import { firestore } from '@/firebase/firebase';
import IUser from '@/types/user';
import { User } from 'firebase/auth';
import { doc, getDoc, setDoc } from 'firebase/firestore';

/**
 * Create a new user in firestore if not exists,
 * if exists, directly return.
 * if not exist, add new doc into firestore
 */
export async function createUserIfNotExist(user: User) {
  const userSnapshot = await getDoc(doc(firestore, 'user', user.uid));
  console.log(userSnapshot, userSnapshot.exists());
  if (userSnapshot.exists()) {
    return;
  }
  const userData: IUser = {
    uid: user.uid,
    displayName: user.displayName,
    photoUrl: user.photoURL,
    email: user.email,
    createdAt: user.metadata.creationTime,
    lastLoginAt: user.metadata.lastSignInTime,
    tokens: 100,
  };
  await setDoc(doc(firestore, 'user', user.uid), userData, { merge: true });
}
