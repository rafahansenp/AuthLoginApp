
import { useNavigation } from '@react-navigation/native';
import * as S from './styles';

export function GoBackArrow() {
  const navigation = useNavigation();

  const handleGoBack = () => {
    navigation.goBack();
  }
  return (
    <S.Container>
      <S.BackButton onPress={handleGoBack}>
        <S.BackIcon />
      </S.BackButton>
    </S.Container>
  )
}