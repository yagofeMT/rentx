import styled, { css } from 'styled-components/native';
import { TextInputProps, TouchableOpacity } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
    padding: 24px;
    background: ${({ theme }) => theme.COLORS.SHAPE};

    padding-top: ${RFValue(100)}px;
`;

export const Title = styled.Text`
     ${({ theme }) => css`
        font-family: ${theme.FONT_FAMILY.ARCHIVO_BOLD};
        font-size: ${RFValue(40)}px;
    `};
`;

export const SubTitle = styled.Text`
     ${({ theme }) => css`
        font-family: ${theme.FONT_FAMILY.INTER_REGULAR};
        font-size: ${RFValue(theme.FONT_SIZE.MD)}px;
        color: ${theme.COLORS.TEXT};
    `};

    margin-top: ${RFValue(20)}px;
`;

export const Forgot = styled(TouchableOpacity)`
      margin-top: ${RFValue(10)}px;
`;

export const ForgotText = styled.Text`
 ${({ theme }) => css`
        font-family: ${theme.FONT_FAMILY.INTER_REGULAR};
        font-size: 13px;
        color: ${theme.COLORS.TEXT};
    `};
`;

export const InputWrapper = styled.View`
     margin-top: ${RFValue(40)}px;
`;


export const ButtonsWrapper = styled.View`
     margin-top: ${RFValue(60)}px;
`;
