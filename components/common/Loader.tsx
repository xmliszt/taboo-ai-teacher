import { Spinner, Text } from '@chakra-ui/react';

interface LoaderProp {
  isLoading?: boolean;
  label?: string;
}

const Loader = (
  props: LoaderProp = {
    isLoading: false,
  }
) => {
  if (props.isLoading) {
    return (
      <div
        id='loader-overlay'
        className='fixed top-0 left-0 z-50 min-w-full min-h-screen bg-black opacity-50 backdrop-blur-md text-white flex justify-center items-center flex-col gap-4'
      >
        <Spinner size='lg' />
        <Text fontSize='lg'>{props.label ?? 'loading...'}</Text>
      </div>
    );
  } else {
    return <></>;
  }
};

export default Loader;
