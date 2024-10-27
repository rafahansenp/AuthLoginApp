import { useState, useEffect } from 'react';

import { Button } from '@components/Button';
import { Input } from '@components/Input';
import { GoBackArrow } from '@components/GoBackArrow';

import { authRecoverPassword } from './authRecoverPassoword';
import { show } from '@utils/configToast';

import * as S from './styles';


export function RecoverPassword() {
  const [email, setEmail] = useState('');
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [timer, setTimer] = useState(60);
  const handleRecover = async () => {
    try {
      await authRecoverPassword(email);
      setIsTimerRunning(true);

      show({
        message: 'Confirmação de Cadastro',
        description: `Um e-mail de recuperação foi enviado`,
        type: 'success',
      });

    } catch (error) {
      if (error.response.status === 404) {
        show({
          message: 'Confirmação de Cadastro',
          description: `E-mail não encontrado`,
          type: 'warning',
        });
      }
      console.log(error);
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
          Recuperar senha
        </S.Title>
        <S.Text>
          Digite o e-mail da conta cadastrada.
        </S.Text>
      </S.TitleContainer>
      <Input
        placeholder="Email"
        onChangeText={setEmail}
      />
      <Button
        title={isTimerRunning ? `Reenviar (${timer}) seg` : `Enviar E-mail`}
        type={isTimerRunning ? 'DISABLED' : 'PRIMARY'}
        disabled={isTimerRunning}
        style={{ marginTop: 40 }}
        onPress={() => handleRecover()}
      />
    </S.Container>
  )
}