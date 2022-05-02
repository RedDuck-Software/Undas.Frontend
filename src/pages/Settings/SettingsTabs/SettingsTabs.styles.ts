import styled from "styled-components";
import { Tabs, Tab } from 'react-bootstrap';
import { ProfileIcon } from "./imports";


export const SettingsTabWrap = styled.div `

`
export const SettingsTab = styled(Tab) `
    & .profile-icon{
        padding-left: 30px;
        background: url({ProfileIcon});
    }
`