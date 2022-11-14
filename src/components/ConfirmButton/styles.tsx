import { RectButton } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';
import styled, { css } from 'styled-components/native';

export const Container = styled(RectButton)`
    background: ${({ theme }) => theme.COLORS.TITLE};

    width: ${RFValue(80)}px;
    height: ${RFValue(56)}px;

    justify-content: center;
    align-items: center;
`;

export const Title = styled.Text`
    ${({ theme }) => css`
        font-family: ${theme.FONT_FAMILY.INTER_MEDIUM};
        font-size: ${RFValue(15)}px;
        color: ${theme.COLORS.SHAPE};
    `}
`;
