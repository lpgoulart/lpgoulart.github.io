import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux';
import {
    SunMoon,
    ThemeEffectContainer,
    Container,
    Content,
    NeonTitle
} from './styles';

const Opening = () => {
    const {t} = useTranslation();
    const theme = useSelector(state=>state.api.theme);

    return (
        <Container themeSelected={theme}>
            <ThemeEffectContainer themeSelected={theme}>
                <SunMoon themeSelected={theme} />
            </ThemeEffectContainer>
            <Content>
                <NeonTitle>
                    {t("opening.title")}
                </NeonTitle>
            </Content>
        </Container>
    )
}

export default Opening;