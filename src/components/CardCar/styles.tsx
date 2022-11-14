import styled, { css } from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { TouchableOpacity } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { Image } from 'react-native'

export const Container = styled(RectButton)`
    flex: 1;
    
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    
    padding: 24px;
    margin-bottom: 16px;

    background: ${({ theme }) => theme.COLORS.WHITE};
`;


export const CarImage = styled.Image`
    width: ${RFValue(150)}px;
    height: 100%;
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


