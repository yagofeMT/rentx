import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';

interface ImageIndexProps {
    active: boolean;
}

export const Container = styled.View`
    padding: 0 24px;
`;

export const Header = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    align-items : center;
`;


export const ImageIndexes = styled.View`
    flex-direction: row;
`;

export const ImageIndex = styled.View<ImageIndexProps>`
    width:6px;
    height: 6px;
    border-radius: 3px;

    margin-right: 8px;

    background : ${({ theme, active }) => active ? theme.COLORS.TITLE : theme.COLORS.SHAPE_BLACK};
`;
export const CarImageWrapper = styled.View`
    width: ${Dimensions.get('window').width}px;
    justify-content: center;
    align-items: center;
`;


export const CarImage = styled.Image`
    width: ${RFValue(280)}px;
    height: ${RFPercentage(20)}px;
`;













