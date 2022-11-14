import { TextInputProps, TextInput } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import styled, { css } from 'styled-components/native';


interface Props {
    isFocused: boolean
}

export const Container = styled.View`
    flex-direction: row;
    background: ${({ theme }) => theme.COLORS.WHITE};
    width: 100%;
    height: ${RFValue(58)}px;

    margin-bottom: 10px;
`;

export const IconWrapper = styled.View<Props>`
    width: ${RFValue(70)}px;
    justify-content: center;
    align-items: center;

    border-right-width: 1px;
    border-color: ${({ theme }) => theme.COLORS.SHAPE};

    ${({theme, isFocused}) => isFocused && css`
        border-bottom-width: 2px;
        border-bottom-color: ${theme.COLORS.RED};
    `}

`;

export const InputText = styled(TextInput).attrs(({ theme }) => ({
    placeholderTextColor: theme.COLORS.TEXT_DETAILS
}))<Props>`
    ${({ theme }) => css`
        font-family: ${theme.FONT_FAMILY.INTER_REGULAR};
        font-size: ${theme.FONT_SIZE.MD}px;
    `};
    align-items: center;
    flex: 1;
    padding: 0 24px;

    ${({theme, isFocused}) => isFocused && css`
        border-bottom-width: 2px;
        border-bottom-color: ${theme.COLORS.RED};
    `}
   
`;