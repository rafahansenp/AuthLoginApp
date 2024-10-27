import { Key } from '@assets/Icons/key';
import { Button } from '@components/Button';
import { useNavigation } from '@react-navigation/native';
import { APP_API } from '@env';

import * as S from './styles';

export function Main() {
  const navigation = useNavigation();

  const handleNavigationLogin = () => {
    navigation.navigate('login');
  };

  const handleNavigationRegister = () => {
    navigation.navigate('register');
  };


  return (
    <S.Container>
      <Key
        width={100}
        height={100}
      />
      <S.Title>Auth Login Services</S.Title>
      <Button
        title='Login'
        type='SECONDARY'
        style={{ marginTop: 20 }}
        onPress={() => handleNavigationLogin()}
      />
      <Button
        title='Registrar-se'
        style={{ marginTop: 10 }}
        onPress={() => handleNavigationRegister()}
      />
    </S.Container>
  )
}