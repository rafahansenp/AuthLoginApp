import { TextInput, TextInputProps } from "react-native";
import { useTheme } from "styled-components/native";
import * as S from './styles';

type Props = TextInputProps & {
  inputRef?: React.RefObject<TextInput>
  hasIcon?: boolean,
  PressIcon?: () => void
}

export function Input({
  hasIcon = false,
  inputRef,
  PressIcon,
  ...rest }: Props) {
  const { COLORS } = useTheme();

  return (
    <S.Container>
      <S.Input
        ref={inputRef}
        placeholderTextColor={COLORS.GRAY_300}
        {...rest}
      />
      <S.IconButton
        onPress={() => PressIcon()}
      >
        {hasIcon &&
          <S.EyeIcon
            name="eye"
            size={22}
            color={COLORS.GRAY_300}
          />
        }
      </S.IconButton>
    </S.Container>
  )
}