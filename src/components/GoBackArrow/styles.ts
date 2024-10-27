import styled from "styled-components/native";
import {FontAwesome6} from '@expo/vector-icons'


export const Container = styled.View`
  position: absolute;
  top: 70px;
  left: 30px;
`;

export const BackButton = styled.TouchableOpacity`
`;

export const BackIcon = styled(FontAwesome6).attrs(({ theme }) => ({
  color: theme.COLORS.WHITE,
  size: 28,
  name: 'arrow-left'
}))``