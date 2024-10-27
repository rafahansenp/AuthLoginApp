import styled, { css } from "styled-components/native";
import { FontAwesome } from "@expo/vector-icons";

type Props = {
  name: string;
  size: number;
  color: string;
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

export const LogoutText = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.RED_DARK};
    text-align: center;
  `};
`;

export const TitleContainer = styled.View`
  width: 250px;
  margin-bottom: 100px;
`;

export const ContentText = styled.Text`
font-size:${({ theme }) => theme.FONT_SIZE.SM}px ;
font-family:${({ theme }) => theme.FONT_FAMILY.REGULAR};
color:${({ theme }) => theme.COLORS.WHITE};
text-align: start;
padding: 10px;
`;


export const Button = styled.TouchableOpacity`
margin-top: 10px;
flex-direction: row;
align-items: center;
`;

export const UserIcon = styled(FontAwesome)``;
export const LogoutIcon = styled(FontAwesome)``;