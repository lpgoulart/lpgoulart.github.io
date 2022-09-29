import styled from 'styled-components';
import Tokens from '../../../assets/tokens';

export const Container = styled.div`
    position: relative;
    min-height: 10rem;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${props=>props.themeSelected
                    ? Tokens.light.fontColor
                    : Tokens.dark.fontColor};
    background-color: ${props=>props.themeSelected
                    ? Tokens.light.backgroundColor
                    : Tokens.dark.backgroundColor};
    transition: 2s;
`;

export const Content = styled.div`
`;
