import styled, { css } from "styled-components/native";
import theme from "@theme/index";

type Props = {
  theme: typeof theme;
  recover?: boolean;
}

export const Container = styled.View`
  ${({ theme }) => css`
    background-color: ${theme.COLORS.GRAY_600};
    flex: 1;
    justify-content: center;
    align-items: center;
  `};
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.XL}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.WHITE};
    text-align: center;
    margin-bottom: 20px;
  `};
`;

export const Text = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.WHITE};
    text-align: center;
  `};
`;

export const RecoverText = styled.Text<Props>`
  ${({ theme, recover }) => css`
    font-size: ${theme.FONT_SIZE.EM}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${recover ? theme.COLORS.GREEN_100 : theme.COLORS.WHITE};
    text-align: center;
  `};
`;


export const RecoverButton = styled.TouchableOpacity``;

export const TitleContainer = styled.View`
  width: 250px;
  margin-bottom: 80px;
`;