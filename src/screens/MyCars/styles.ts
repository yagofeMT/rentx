import { FlatList } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';
import { CarDTO } from 'src/dtos/CarDTO';
import styled, { css } from 'styled-components/native';


export const Container = styled.View`
    flex:1;
`;

export const Header = styled.View`
    width: 100%;
    height: ${RFValue(273)}px;
    
    justify-content: center;
    
    padding: 24px;
    padding-top: ${getStatusBarHeight() + 40}px;
     
    background: ${({ theme }) => theme.COLORS.BLACK};
`;

export const TextHeader = styled.Text`
    ${({ theme }) => css`
        font-family: ${theme.FONT_FAMILY.ARCHIVO_MEDIUM};
        font-size: ${RFValue(30)}px;
        color: white;
    `}
    margin-top: 40px;
`;

export const TextSubTitle = styled.Text`
${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.ARCHIVO_REGULAR};
    font-size: ${RFValue(15)}px;
    color: white;
`}
margin-top: 24px;
`;

export const Content = styled.View`
    flex: 1;
`;

export const CarList = styled(FlatList)
.attrs({
    contentContainerStyle: {
        padding: 24,
    },
    showVerticalScrollIndicator: false
})`
`;