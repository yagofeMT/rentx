import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import styled, { css } from 'styled-components/native';

export const Container = styled.View`
    margin-top: ${getStatusBarHeight() + 20}px;
    flex: 1;
`;


export const Content = styled.View`
    flex: 1;
    padding: 0px 24px;
`;

export const Details = styled.View`
    justify-content: space-between;
    flex-direction: row;
`;

export const AboutCar = styled.View``;

export const Brand = styled.Text`
    ${({ theme }) => css`
        font-size: 11px;
        font-family: ${theme.FONT_FAMILY.ARCHIVO_MEDIUM};
        color: ${theme.COLORS.TEXT_DETAILS};
    `}

    text-transform: uppercase;
`;

export const Name = styled.Text`
      ${({ theme }) => css`
        font-size: ${theme.FONT_SIZE.XL}px;
        font-family: ${theme.FONT_FAMILY.ARCHIVO_REGULAR};
        color: ${theme.COLORS.TITLE};
    `}
`;

export const AboutPrice = styled.View``;

export const Price = styled.Text`
  ${({ theme }) => css`
        font-size: ${theme.FONT_SIZE.XL}px;
        font-family: ${theme.FONT_FAMILY.ARCHIVO_REGULAR};
        color: ${theme.COLORS.RED};
    `}
`;

export const Accessories = styled.View`
    flex-direction: row;
    flex-wrap: wrap;

    justify-content: space-between;
    align-items: center;
`;

export const AboutDiv = styled.View`
    flex: 1;
    margin-top: ${RFValue(25)}px;
    align-items: center;
`;

export const About = styled.Text`
      ${({ theme }) => css`
        font-size: ${RFPercentage(2.3)}px;
        font-family: ${theme.FONT_FAMILY.INTER_REGULAR};
        color: ${theme.COLORS.TEXT};
    `}
`;

export const Footer = styled.View`
    padding: ${RFPercentage(2.5)}px 24px;
    align-items: center;
    justify-content: center;

    background: ${({ theme }) => theme.COLORS.SHAPE};
`;