import React from 'react';
import I18n from '../../../i18n/i18n';
import { useTranslation } from 'react-i18next';
import { Switch } from 'antd';
import { BulbOutlined, CloseOutlined } from '@ant-design/icons';
import {useDispatch} from 'react-redux';
import {changeTheme} from '../../../store/mangaManager'
import { useSelector } from 'react-redux';
import {
    Container
} from './styles';

const Header = () => {
    const {t} = useTranslation();

    const dispatch = useDispatch()
    const theme = useSelector(state=>state.api.theme);

    return (
        <Container themeSelected={theme}>
            <I18n />

            <Switch
                checkedChildren={<CloseOutlined />}
                unCheckedChildren={<BulbOutlined />}
                onChange={()=>dispatch(changeTheme())} />

        </Container>
    )
}

export default Header;