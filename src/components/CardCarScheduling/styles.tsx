import styled, { css } from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { RectButton } from 'react-native-gesture-handler';
import { FontAwesome } from '@expo/vector-icons'

export const Container = styled(RectButton)`
    flex: 1;

    align-items: center;
    justify-content: space-between;

    margin-bottom: 16px;

    background: ${({ theme }) => theme.COLORS.WHITE};
`;

export const Content = styled.View`
    flex: 1;
    padding: 24px;

    flex-direction: row;
`;

export const CarImage = styled.Image`
    width: ${RFValue(168)}px;
    height: ${RFValue(87)}px;;
`;

export const Details = styled.View`
`;

export const Name = styled.Text`
    ${({ theme }) => css`
        font-family: ${theme.FONT_FAMILY.ARCHIVO_MEDIUM};
        font-size: ${theme.FONT_SIZE.MD}px;
        color: ${theme.COLORS.TITLE};
    `}
`;

export const InfoTitle = styled.Text`
    ${({ theme }) => css`
        font-family: ${theme.FONT_FAMILY.ARCHIVO_MEDIUM};
        font-size: ${theme.FONT_SIZE.SM}px;
        color: ${theme.COLORS.TEXT_DETAILS};
    `}
`;


export const About = styled.View`
    margin-top: 16px;

    flex-direction: row;
    align-items: flex-end;
    justify-content: space-between;
`;

export const Info = styled.View``;

export const Type = styled.View`
    margin-left: 25px;
    flex-direction: row;
`;

export const Value = styled.Text`
    ${({ theme }) => css`
        font-family: ${theme.FONT_FAMILY.ARCHIVO_MEDIUM};
        font-size: ${theme.FONT_SIZE.MD}px;
        color: ${theme.COLORS.RED};
    `}
`;

export const Footer = styled.View`
    width: 100%;
    padding: 8px 24px;

    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    border-top-width: 3px;
    border-color: ${({ theme }) => theme.COLORS.SHAPE};
`;

export const TextPeriod = styled.Text`
    ${({ theme }) => css`
        font-size: ${RFValue(11)}px;
        color: ${theme.COLORS.TEXT_DETAILS};
        font-family: ${theme.FONT_FAMILY.ARCHIVO_MEDIUM};
    `}
`;

export const DateWrapper = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

`;


export const Date = styled.Text`
    ${({ theme }) => css`
        font-size: ${RFValue(11)}px;
        color: ${theme.COLORS.TITLE};
        font-family: ${theme.FONT_FAMILY.INTER_REGULAR};
    `}

    margin-left: 10px;
    margin-right: 10px;
`;


export const Icon = styled(FontAwesome)`
    color: ${({ theme }) => theme.COLORS.TEXT_DETAILS};
`;




