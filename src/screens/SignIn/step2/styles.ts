import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';
import styled, { css } from 'styled-components/native';


interface IndexProps {
    color : 'light' | 'black'
}

export const Container = styled.View`
    padding: 24px;

    padding-top: ${getStatusBarHeight() + 30}px;
`;

export const Header = styled.View`
    width: 100%;

    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const Indexs = styled.View`
    flex-direction: row;
`;

export const Index = styled.View<IndexProps>`
    width: 4px;
    height: 4px;

    border-radius: 2px;

    margin-right: 10px;

    ${({theme, color}) => css`
        background: ${color === 'black' ? theme.COLORS.BLACK : theme.COLORS.TEXT_DETAILS};
    `}
`;


export const InputWrapper = styled.View`
    margin-bottom: ${RFValue(20)}px;
`;

export const TitleStep = styled.Text`
    ${({ theme }) => css`
        font-family: ${theme.FONT_FAMILY.ARCHIVO_MEDIUM};
        font-size: ${RFValue(theme.FONT_SIZE.LG)}px;
        color: ${theme.COLORS.TITLE};
    `};
    margin-top: ${RFValue(40)}px;
    margin-bottom: ${RFValue(20)}px;
    margin-left: 10px
`;
