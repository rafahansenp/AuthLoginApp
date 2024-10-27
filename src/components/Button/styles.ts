import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

export type ButtonTypeStyleProps = 'PRIMARY' | 'SECONDARY' | 'DISABLED';

type Props = {
  type: ButtonTypeStyleProps;
}

export const Container = styled(TouchableOpacity) <Props>`
${({ theme, type }) => css`
  flex: 1;
  min-height: 56px;
  max-height: 56px;
  min-width: 240px;
  max-width: 240px;
  
  background-color: ${
    type === 'PRIMARY' ? theme.COLORS.GRAY_100
    : type === 'DISABLED' ? theme.COLORS.GRAY_300 
    : theme.COLORS.GREEN_700
  };
  ${type === 'DISABLED' && 'opacity: 0.5;'}
  border-radius: 12px;
  justify-content: center;
  align-items: center;
`}
`;

export const Title = styled.Text`
  font-size:${({ theme }) => theme.FONT_SIZE.MD}px ;
  font-family:${({ theme }) => theme.FONT_FAMILY.REGULAR};
  color:${({ theme }) => theme.COLORS.WHITE};
`