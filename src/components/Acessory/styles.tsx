import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import styled, { css } from 'styled-components/native';

export const AccessoryCard = styled.View`
    width: ${RFPercentage(14)}px;
    height: ${RFPercentage(13)}px;

    justify-content: center;
    align-items: center;

    background: ${({theme}) => theme.COLORS.SHAPE};
    
    margin-bottom: 10px;
    padding: 0 16px;
`;

export const AccessoryName = styled.Text`
    ${({theme}) => css`
        font-family: ${theme.FONT_FAMILY.INTER_MEDIUM};
        font-size: ${RFPercentage(1.8)}px;
        color: ${theme.COLORS.TEXT};
    `}
`;