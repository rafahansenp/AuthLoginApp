import styled, {css} from "styled-components/native";
import { TextInput, View, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";



export const Container = styled(View)`
  ${({ theme }) => css`  
    flex-direction: row;  
    background-color:${theme.COLORS.GRAY_700};

    min-height: 56px;
    max-height: 56px;
    min-width: 300px;
    max-width: 300px; 

    border-radius: 12px;
    padding: 16px;
    margin-top: 10px;
    `};
  `;

export const Input = styled(TextInput)`
  ${({ theme }) => css`
    flex: 1;

    background-color:${theme.COLORS.GRAY_700}; 
    color:${theme.COLORS.WHITE}; 
    font-family:${theme.FONT_FAMILY.REGULAR}; 
    font-size:${theme.FONT_SIZE.MD}px; 
  `};
`;

export const IconButton = styled(TouchableOpacity)``;

export const EyeIcon = styled(Feather)``;