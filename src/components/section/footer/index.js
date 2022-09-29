import React from 'react';
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux';
import {
    Container,
    Content
} from './styles';

const Footer = () => {
    const {t} = useTranslation();
    const theme = useSelector(state=>state.api.theme);

    return (
        <Container themeSelected={theme}>
            <Content>
                {t("footer.title")}
            </Content>
        </Container>
    )
}

export default Footer;