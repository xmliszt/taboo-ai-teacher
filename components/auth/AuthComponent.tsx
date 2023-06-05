'use client';

import { Avatar, Button, Flex, Spacer, Tag, TagLabel } from '@chakra-ui/react';
import { signOut } from 'firebase/auth';
import { auth } from '@/firebase/firebase';
import { signInWithGooglePopUp } from '@/lib/auth';
import { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import Loader from '../common/Loader';

export const AuthComponent = () => {
  const [user, loading, error] = useAuthState(auth);
  const [isScreenLoading, setIsScreenLoading] = useState(false);
  const [screenLoadingText, setScreenLoadingText] = useState<string>();

  const signIn = async () => {
    setIsScreenLoading(true);
    setScreenLoadingText('Authenticating with Google...');
    await signInWithGooglePopUp();
    setIsScreenLoading(false);
  };

  const renderAuthComponent = () => {
    if (user) {
      return (
        <>
          <Tag variant='outline' colorScheme='blackAlpha'>
            <Avatar
              src={user.photoURL ?? undefined}
              name={user.displayName ?? undefined}
              size='xs'
              my='2'
              mx='1'
            />
          </Tag>
          <Button
            onClick={() => {
              signOut(auth);
            }}
          >
            Sign Out
          </Button>
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
