import { AlertStatus, useToast as useChakraToast } from '@chakra-ui/react';

export default function useToast() {
  const chakraToast = useChakraToast();

  const success = (title: string) => {
    chakraToast({
      title: title,
      status: 'success',
      position: 'top',
    });
  };

  const error = (title: string) => {
    chakraToast({
      title: title,
      status: 'error',
      position: 'top',
    });
  };

  const info = (title: string) => {
    chakraToast({
      title: title,
      status: 'info',
      position: 'top',
    });
  };

  const warning = (title: string) => {
    chakraToast({
      title: title,
      status: 'warning',
      position: 'top',
    });
  };

  const loading = (title: string) => {
    chakraToast({
      title: title,
      status: 'loading',
      position: 'top',
    });
  };

  const toast = {
    success,
    error,
    info,
    warning,
    loading,
  };

  return toast;
}
