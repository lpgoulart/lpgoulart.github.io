import styled from 'styled-components';
import Tokens from '../../../assets/tokens';

export const SunMoon = styled.div`
    width: 10rem;
    height: 10rem;
    border-radius: 50%;
    background: ${props=>props.themeSelected
        ? "#fff77e"
        : "none"};
    box-shadow: ${props=>props.themeSelected
                    ? "0"
                    : "1rem -1rem 0 0 #fff77e"};
    transition: 2s;
    z-index: 0;
    position: absolute;
    top: ${props=>props.themeSelected
                    ? "0"
                    : "1rem"};
    left: ${props=>props.themeSelected
                    ? "1rem"
                    : "calc(100% - 11.5rem)"};
`;

export const ThemeEffectContainer = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    padding: 0 20px;
    background-color: transparent;
    z-index: 0;
`;

export const Container = styled.div`
    position: relative;
    min-height: 12rem;
    display: flex;
    justify-content: center;
    transition: 2s;
    align-items: center;
    background-color: ${props=>props.themeSelected
                    ? Tokens.light.backgroundColor
                    : Tokens.dark.backgroundColor};
    * { 
        color: ${props=>props.themeSelected
                    ? Tokens.light.fontColor
                    : Tokens.dark.fontColor};
        transition: 2s;
    }
    
`;

export const Content = styled.div`
`;

export const NeonTitle = styled.div`
    font-size: 32px;
    animation: flicker 1.5s infinite alternate;     

    @keyframes flicker {
        0%, 18%, 22%, 25%, 53%, 57%, 100% {
            text-shadow:
                ${props=>props.themeSelected
                    ? `0 0 4px ${Tokens.light.fontColor}`
                    : `0 0 4px ${Tokens.dark.fontColor}`},
                ${props=>props.themeSelected
                    ? `0 0 11px ${Tokens.light.fontColor}`
                    : `0 0 20px ${Tokens.dark.fontColor}`},
                ${props=>props.themeSelected
                    ? `0 0 19px ${Tokens.light.fontColor}`
                    : `0 0 30px ${Tokens.dark.fontColor}`},
                ${props=>props.themeSelected
                    ? `0 0 40px ${Tokens.light.fontColor}`
                    : `0 0 60px ${Tokens.dark.fontColor}`},
                ${props=>props.themeSelected
                    ? `0 0 80px ${Tokens.light.fontColor}`
                    : `0 0 90px ${Tokens.dark.fontColor}`},
                ${props=>props.themeSelected
                    ? `0 0 90px ${Tokens.light.fontColor}`
                    : `0 0 120px ${Tokens.dark.fontColor}`},
                ${props=>props.themeSelected
                    ? `0 0 100px ${Tokens.light.fontColor}`
                    : `0 0 150px ${Tokens.dark.fontColor}`},
                ${props=>props.themeSelected
                    ? `0 0 150px ${Tokens.light.fontColor}`
                    : `0 0 200px ${Tokens.dark.fontColor}`};
        }
        
        20%, 24%, 55% {        
            text-shadow: none;
        }    
    }
`;