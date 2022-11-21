import { TouchableOpacityProps } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';
import styled, { css } from 'styled-components/native';

export const Container = styled.View``;

export const HeaderWrapper = styled.View`
    width: 100%;
    height: ${RFValue(200)}px;

    background: ${({ theme }) => theme.COLORS.BLACK};
    padding: 0 24px;

    align-items: center;
`;

export const Header = styled.View`
    width: 100%;

    margin-top: ${getStatusBarHeight()}px;

    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const Title = styled.Text`
    ${({ theme }) => css`
        font-size: ${RFValue(22)}px;
        font-family: ${theme.FONT_FAMILY.INTER_MEDIUM};
        color: ${theme.COLORS.SHAPE};
    `}
`;

export const SignOut = styled.TouchableOpacity``;

export const ImageWrapper = styled.View`
    width: ${RFValue(180)}px;
    height: ${RFValue(180)}px;

    border-radius: 90px;

    margin-top: ${RFValue(20)}px;

    background-color: wheat;

    flex-direction: row;

    justify-content: center;
    align-items: center;
`;

export const Image = styled.Image`
     width: ${RFValue(180)}px;
    height: ${RFValue(180)}px;

    border-radius: 90px;

    background-color: wheat;
`;

export const CameraImg = styled.TouchableOpacity<TouchableOpacityProps>`
    position: absolute;
    bottom: 15px;
    right: 0;

    width: 40px;
    height: 40px;

    background: ${({theme}) => theme.COLORS.RED};

    justify-content: center;
    align-items: center;
`;

export const Content = styled.View`
    padding: ${RFValue(60)}px 24px;

`;

export const Options = styled.View`
    width: 100%;
    
    flex-direction: row;
    justify-content: space-around;

    margin-bottom: 10px;
`;

export const Form = styled.View``;



