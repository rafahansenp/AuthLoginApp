import { useState, useEffect } from 'react';

import { Button } from '@components/Button';
import { Input } from '@components/Input';
import { GoBackArrow } from '@components/GoBackArrow';

import { authRegister } from './authRegister';
import { reSendEmail } from './reSendEMail';
import * as Yup from 'yup'
import { show } from '@utils/configToast';

import * as S from './styles';

export function Register() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [mailSent, setMailSent] = useState(false);
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(true);
  const [timer, setTimer] = useState(60);

  const handleTextChange = (text: string) => {
    const filteredText = text.replace(/^[\s]+|[^a-zA-Z0-9]/g, '');
    setUsername(filteredText);
  };

  const handleRegister = async () => {
    try {
      const schema = Yup.object().shape({
        username: Yup.string().required('Usuário é Obrigatório'),
        email: Yup.string()
          .required('E-mail Obrigatório')
          .email('Digite um e-mail válido'),
        password: Yup.string().required('Senha Obrigatória'),
      });


      await schema.validate(
        { username, email, password },
        { abortEarly: false },
      );

      const response = await authRegister(username, email, password);

      show({
        message: 'Confirmação de Cadastro',
        description: `${response.data.message}`,
        type: 'success',
      });
      setMailSent(true);
      setIsTimerRunning(true);
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        show({
          message: 'Algo deu errado',
          description: 'Verifique ou preencha os campos antes de continuar ',
          type: 'info',
        });
        return;
      }
      console.log(error);
    }
  };


  const handleResendEmail = async () => {
    try {
      setIsTimerRunning(true);
      await reSendEmail(email);

      show({
        message: 'Confirmação de Cadastro',
        description: `E-mail reenviado com sucesso`,
        type: 'success',
      });

    } catch (error) {
      console.log(error)
    }
  };

  useEffect(() => {
    let interval;
    if (isTimerRunning && timer > 0) {
      interval = setInterval(() => {
        setTimer((prevSeconds) => prevSeconds - 1);
      }, 1000);
    } else if (timer === 0) {
      setIsTimerRunning(false);
      setTimer(60);
    }

    return () => clearInterval(interval);
  }, [isTimerRunning, timer]);

  return (
    <S.Container>
      <GoBackArrow />
      <S.TitleContainer>
        <S.Title>
          Registrar
        </S.Title>
        <S.Text>
          Informe seu nome de usuario,{'\n'}email e sua senha para registrar.
        </S.Text>
      </S.TitleContainer>
      <Input
        placeholder="Nome do Usuário"
        value={username}
        onChangeText={handleTextChange}
      />
      <Input
        placeholder="Email"
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
        title='Registrar'
        type='SECONDARY'
        style={{ marginTop: 40 }}
        onPress={() => handleRegister()}
      />
      {mailSent &&
        <S.ReSendButton onPress={() => handleResendEmail()} disabled={isTimerRunning} >
          <S.ReSendText disabled={isTimerRunning}>Email não foi enviado? Reenviar</S.ReSendText>
          {isTimerRunning && <S.ReSendText disabled={isTimerRunning}>{timer} seg</S.ReSendText>}
        </S.ReSendButton>
      }
    </S.Container>
  )
}