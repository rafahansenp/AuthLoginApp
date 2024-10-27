
import { useNavigation } from '@react-navigation/native';
import { Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { USER_TOKEN } from '@storage/storageConfig';
import { show } from '@utils/configToast';

import { getUserInfo } from './getUserInfo';

import theme from '@theme/index';
import * as S from './styles';

export function Home() {
  const navigation = useNavigation();

  const handleNavigateUserProfile = async () => {
    try {
      const response = await getUserInfo();
      show({
        message: 'PARABÉNS',
        description: `${response.data.message}`,
        type: 'success',
      });
    } catch (error) {
      if (error.response.status === 401) {
        show({
          message: 'Sessão expirou!',
          description: `Por favor, realize o login novamente`,
          type: 'warning',
        });
      }
      await logOut();
      console.log(error)
    }
  };

  const logOut = async () => {
    try {
      await AsyncStorage.removeItem(`${USER_TOKEN}`);
    } catch (error) {
      console.log(error)
    } finally {
      navigation.navigate("main");
    }
  }
  const handleLogout = () => {
    Alert.alert('', 'Deseja sair do App? ', [
      {
        text: 'Não',
        style: 'cancel',
      },
      {
        text: 'Sim',
        style: 'destructive',
        onPress: () => logOut(),
      },
    ]);
  }

  return (
    <S.Container>
      <S.TitleContainer>
        <S.Title>
          Bem Vindo!
        </S.Title>
        <S.Text>
          Auth Login Services
        </S.Text>
      </S.TitleContainer>
      <S.Button onPress={() => handleNavigateUserProfile()}>
        <S.UserIcon
          name='user'
          size={22}
          color={theme.COLORS.WHITE}
        />
        <S.ContentText>
          Acessar perfil do usuário
        </S.ContentText>
      </S.Button>
      <S.Button
        onPress={() => handleLogout()}
      >
        <S.LogoutIcon
          name='sign-out'
          size={22}
          color={theme.COLORS.RED_DARK}
        />
        <S.LogoutText>
          Sair
        </S.LogoutText>
      </S.Button>
    </S.Container>
  )
}