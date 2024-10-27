import styled, { css } from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";

export const Container = styled(SafeAreaView)`
  ${({ theme }) => css`
    background-color: ${theme.COLORS.GRAY_600};
    flex: 1;
    justify-content: center;
    align-items: center;
  `};
`;

export const Title = styled.Text`
${({ theme }) => css`
    margin-top: 10px;
    font-size:${theme.FONT_SIZE.XL}px;
    font-family:${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.WHITE};
  `};
`;