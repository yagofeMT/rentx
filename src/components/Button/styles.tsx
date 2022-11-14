import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';
import styled, { css } from 'styled-components/native';

interface ButtonProps extends RectButtonProps {
    themeButton: 'progress' | 'sucess' | 'create';
    loading: boolean;
}

interface TextProps {
    themeButton: 'progress' | 'sucess' | 'create';
}

export const Container = styled(RectButton) <ButtonProps>`
    width: 100%;
    height: ${RFValue(56)}px;

    justify-content: center;
    align-items: center;

    margin-bottom: 10px;

    background: ${({ theme, themeButton }) =>
        themeButton === 'progress' ? theme.COLORS.RED :
            themeButton === 'sucess' ? theme.COLORS.GREEN :
                themeButton === 'create' && theme.COLORS.WHITE
    };


    ${({ enabled }) => enabled == false && css`
        opacity: 0.5;
    `};

    ${({ loading }) => loading && css`
        opacity: 0.5;
    `};
`;

export const TextButton = styled.Text<TextProps>`
    ${({ theme, themeButton }) => css`
        font-family: ${theme.FONT_FAMILY.INTER_MEDIUM};
        font-size: ${theme.FONT_SIZE.MD}px;
        color: ${themeButton === 'create' ? theme.COLORS.BLACK : theme.COLORS.SHAPE};
    `}
`;