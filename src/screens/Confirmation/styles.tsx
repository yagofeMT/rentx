import { RFValue } from 'react-native-responsive-fontsize';
import styled, { css } from 'styled-components/native';

export const Container = styled.View`
    flex: 1;

    background: ${({theme}) => theme.COLORS.BLACK};
    padding-top: 100px;
`;


export const Content = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    padding-bottom: 100px;
`;
export const Title = styled.Text`
    ${({theme}) => css`
        font-family: ${theme.FONT_FAMILY.ARCHIVO_MEDIUM};
        font-size: ${RFValue(30)}px;
        color: ${theme.COLORS.WHITE};
    `}
`;
export const Message = styled.Text`
     ${({theme}) => css`
        font-family: ${theme.FONT_FAMILY.INTER_REGULAR};
        font-size: ${RFValue(15)}px;
        color: ${theme.COLORS.TEXT_DETAILS};
        line-height: ${RFValue(25)}px;
    `}
    text-align: center;
    margin-top: 16px;
`;

export const Footer = styled.View`
    width: 100%;
    align-items: center;
    margin: 80px 0;
`;
