'use client';

import { Avatar, Button, Flex, Spacer, Tag } from '@chakra-ui/react';
import { signOut } from 'firebase/auth';
import { auth, firestore } from '@/firebase/firebase';
import { signInWithGooglePopUp } from '@/lib/auth';
import { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import Loader from '../common/Loader';
import useToast from '@/lib/toast';

export const AuthComponent = () => {
  const [user] = useAuthState(auth);
  const [isScreenLoading, setIsScreenLoading] = useState(false);
  const [screenLoadingText, setScreenLoadingText] = useState<string>();
  const toast = useToast();

  const signIn = async () => {
    setIsScreenLoading(true);
    setScreenLoadingText('Authenticating with Google...');
    try {
      await signInWithGooglePopUp();
      toast.success('Signed In Successfully!');
    } catch (error) {
      toast.error(error.message);
    } finally {
      setIsScreenLoading(false);
    }
  };

  const _signOut = async () => {
    await signOut(auth);
    toast.success('Signed Out Successfully!');
  };

  const renderAuthComponent = () => {
    if (user) {
      return (
        <>
          <Tag variant='subtle' colorScheme='blackAlpha'>
            <Avatar
              src={user.photoURL ?? undefined}
              name={user.displayName ?? undefined}
              size='xs'
              my='2'
              mx='1'
            />
          </Tag>
          <Button onClick={_signOut}>Sign Out</Button>
        </>
      );
    } else {
      return <Button onClick={signIn}>Sign In With Google</Button>;
    }
  };

  return (
    <>
      {isScreenLoading && (
        <Loader isLoading={isScreenLoading} label={screenLoadingText} />
      )}
      <Flex gap='2' alignItems='center'>
        <Spacer />
        {renderAuthComponent()}
      </Flex>
    </>
  );
};
