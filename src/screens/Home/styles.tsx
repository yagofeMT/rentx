import { RFPercentage } from 'react-native-responsive-fontsize';
import styled, { css } from 'styled-components/native';
import {getStatusBarHeight} from 'react-native-iphone-x-helper'
import { FlatList } from 'react-native';
import { CarDTO } from 'src/dtos/CarDTO';

export const Container = styled.View`
    flex: 1;
    background: ${({theme}) => theme.COLORS.SHAPE};
`;

export const Header = styled.View`
    width: 100%;
    height: ${RFPercentage(18)}px;
    background: ${({theme}) => theme.COLORS.BLACK};
`;


export const HeaderWrapper = styled.View`
    margin-top: ${getStatusBarHeight()}px;
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 0 16px;
`;

export const HeaderText = styled.Text`
    ${({theme}) => css`
        font-family: ${theme.FONT_FAMILY.INTER_REGULAR};
        font-size: ${theme.FONT_SIZE.MD}px;
        color: ${theme.COLORS.TITLE};
    `};
`;
export const CarList = styled(FlatList as new () => FlatList<CarDTO>)
.attrs({
    contentContainerStyle: {
        padding: 24,
    },
    showVerticalScrollIndicator: false
})`flex: 1`;