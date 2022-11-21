import styled, { css } from 'styled-components/native';

interface Props  {
    isActived: boolean
}

export const Container = styled.TouchableOpacity<Props>`
    padding:6px;

    ${({theme, isActived}) => isActived && css`
        border-bottom-width: 2px;
        border-bottom-color: ${theme.COLORS.RED};
    `}
`;

export const Title = styled.Text<Props>`
    ${({theme, isActived}) => isActived && css`
        font-family: ${theme.FONT_FAMILY.ARCHIVO_BOLD};

    `}

    font-size: ${({theme}) => theme.FONT_SIZE.MD}px;

`;