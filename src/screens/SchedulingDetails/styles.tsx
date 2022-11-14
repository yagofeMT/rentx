import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import styled, { css } from 'styled-components/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const Container = styled.View`
    flex: 1;
    margin-top: ${getStatusBarHeight() + 20}px;
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



export const About = styled.View`
    flex: 1;
    padding: 24px 0;
    align-items: center;
    justify-content: center;
`;

export const AboutDate = styled.View`
    width: 100%;
    flex-direction: row;

    justify-content: space-between;
    align-items: center;

    border-bottom-width: 2px;
    padding-bottom: 8px;
    margin-bottom: 10px;
    border-bottom-color: ${({ theme }) => theme.COLORS.SHAPE};
`;

export const DivIcon = styled.View`
    background: ${({ theme }) => theme.COLORS.RED};
    width: ${RFPercentage(6)}px;
    height: ${RFPercentage(6)}px;
    justify-content: center;
    align-items: center;
`;

export const CalendarIcon = styled(MaterialCommunityIcons)`
    color: ${({ theme }) => theme.COLORS.SHAPE};
`;

export const DateAllocation = styled.View``;

export const DateTitle = styled.Text`
    ${({ theme }) => css`
        font-family: ${theme.FONT_FAMILY.ARCHIVO_MEDIUM};
        font-size: 10px;
        color: ${theme.COLORS.TEXT_DETAILS};
    `}
`;
export const Date = styled.Text`
     ${({ theme }) => css`
        font-family: ${theme.FONT_FAMILY.INTER_MEDIUM};
        font-size: 13px;
        color: ${theme.COLORS.TITLE};
    `}
`;

export const Arrow = styled(MaterialIcons)`
    color: ${({ theme }) => theme.COLORS.TEXT_DETAILS};
`;


export const TotalWrapper = styled.View`
    width: 100%;
    flex-direction: row;

    justify-content: space-between;
    align-items: center;
`;

export const TotalDetails = styled.View``;

export const TitleTotal = styled.Text`
     ${({ theme }) => css`
        font-family: ${theme.FONT_FAMILY.ARCHIVO_MEDIUM};
        font-size: ${theme.FONT_SIZE.SM}px;
        color: ${theme.COLORS.TEXT_DETAILS};
    `}
`;

export const ValueDiary = styled.Text`
      ${({ theme }) => css`
        font-family: ${theme.FONT_FAMILY.INTER_MEDIUM};
        font-size: ${theme.FONT_SIZE.MD}px;
        color: ${theme.COLORS.TITLE};
    `}
`;

export const Total = styled.Text`
      ${({ theme }) => css`
        font-family: ${theme.FONT_FAMILY.ARCHIVO_MEDIUM};
        font-size: ${theme.FONT_SIZE.XL}px;
        color: ${theme.COLORS.GREEN};
    `}
`;

export const Footer = styled.View`
    padding: ${RFPercentage(2)}px 24px;
    align-items: center;
    justify-content: center;

    background: ${({ theme }) => theme.COLORS.SHAPE};
`;


export const Loading = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`;