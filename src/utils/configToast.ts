import { showMessage, MessageType } from 'react-native-flash-message';

type ToastProps =  {
  message: string;
  type: MessageType ;
  description: string,
};

export const show = ({
  message,
  description,
  type,
}: ToastProps) => {
  showMessage({
    message,
    description,
    type,
    duration: 2500,
    position: 'bottom',
    floating: true,
  });
};
