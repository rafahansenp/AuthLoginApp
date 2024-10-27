import { useState } from 'react';

import { Button } from '@components/Button';
import { Input } from '@components/Input';
import { GoBackArrow } from '@components/GoBackArrow';
import { authLogin } from './authLogin';
import { useNavigation } from '@react-navigation/native';

import * as Yup from 'yup'
import { show } from '@utils/configToast';

import * as S from './styles';


export function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(true);
  const navigation = useNavigation();

  const handleLogin = async () => {

    try {
      const schema = Yup.object().shape({
        email: Yup.string()
          .required('E-mail Obrigatório')
          .email('Digite um e-mail válido'),
        password: Yup.string().required('Senha Obrigatória'),
      });


      await schema.validate(
        { email, password },
        { abortEarly: false },
      );

      const success = await authLogin(email, password);

      if (success) {
        navigation.navigate('home');
      }

    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        show({
          message: 'Algo deu errado',
          description: 'Verifique ou preencha os campos antes de continuar ',
          type: 'info',
        });
        return;
      }
      if (error.response.status === 401) {
        show({
          message: 'Email ou senha inválidos',
          description: 'Verifique os dados digitados e tente novamente ',
          type: 'warning',
        });
        return;
      }

      console.log(error);
    }
  };

  const handleNavigate = () => {
    navigation.navigate('recover')
  };

  return (
    <S.Container>
      <GoBackArrow />
      <S.TitleContainer>
        <S.Title>
          Login
        </S.Title>
        <S.Text>
          Por favor insira seu email e {'\n'}sua senha para continuar.
        </S.Text>
      </S.TitleContainer>

      <Input
        placeholder="Email"
        returnKeyType="done"
        onChangeText={setEmail}
      />
      <Input
        placeholder="Senha"
        onChangeText={setPassword}
        secureTextEntry={passwordVisible}
        returnKeyType="done"
        hasIcon
        PressIcon={() => setPasswordVisible(!passwordVisible)}
      />

      <Button
        title='Entrar'
        type='SECONDARY'
        style={{ marginTop: 40 }}
        onPress={() => handleLogin()}
      />
      <S.RecoverText style={{ marginTop: 5 }}>
        Esqueceu sua senha?
      </S.RecoverText>
      <S.RecoverButton onPress={() => handleNavigate()}>
        <S.RecoverText recover>
          Recuperar
        </S.RecoverText>
      </S.RecoverButton>
    </S.Container>
  )
}