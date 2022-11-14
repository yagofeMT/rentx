import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import styled, { css } from 'styled-components/native';
import { FontAwesome } from '@expo/vector-icons';

interface DateValueProps {
    selected: boolean;
}

export const Container = styled.View`
    flex: 1;
    background: ${({ theme }) => theme.COLORS.SHAPE};
`;

export const Header = styled.View`
    width: 100%;
    height: 40%;
    
    justify-content: center;
    
    padding: 25px;
    padding-top: ${getStatusBarHeight() + 40}px;
     
    background: ${({ theme }) => theme.COLORS.BLACK};
`;

export const TextHeader = styled.Text`
    ${({ theme }) => css`
        font-family: ${theme.FONT_FAMILY.ARCHIVO_MEDIUM};
        font-size: ${RFValue(34)}px;
        color: white;
    `}
    margin-top: 24px;
`;

export const DateFilter = styled.View`
    width: 100%;

    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    margin: 10px 0;
`;

export const InputView = styled.View`
    width: 30%;
`;


export const PlaceholderDate = styled.Text`
    ${({ theme }) => css`
        font-family: ${theme.FONT_FAMILY.ARCHIVO_MEDIUM};
        font-size: ${theme.FONT_SIZE.SM}px;
        color: ${({ theme }) => theme.COLORS.TITLE};
        text-align: start;
    `}

    text-transform: uppercase;
`;

export const DateValue = styled.Text<DateValueProps>`
    font-family: ${({ theme }) => theme.FONT_FAMILY.INTER_MEDIUM};
    font-size: ${RFValue(15)}px;
    color:  ${({ theme }) => theme.COLORS.SHAPE};    
    
    ${({theme, selected}) => !selected && css`
        border-bottom-width: 1px;
        border-bottom-color: ${theme.COLORS.TEXT};
        padding-bottom: 5px;
    `}
`;

export const Content = styled.ScrollView.attrs({
    contentContainerStyle: {
        paddingBottom: 24,
    },
    showVerticalScrollIndicator: false,
})``;

export const Footer = styled.View`
    padding:24px;
`;

export const Icon = styled(FontAwesome)`
    color: ${({ theme }) => theme.COLORS.TEXT};
`;