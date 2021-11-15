import { createStandaloneToast } from '@chakra-ui/react';
import theme from "../../../../config/theme";

const notification = (title: string, status: 'success' | 'error'): void => {
  const toast = createStandaloneToast({ theme });

  toast({
    title,
    status,
    duration: 1000,
    isClosable: true,
    position: 'top-right',
  });
};


export const successNotification = (title: string): void => {
  notification(title, 'success');
};

export const errorNotification = (title: string): void => {
  notification(title, 'error')
}
