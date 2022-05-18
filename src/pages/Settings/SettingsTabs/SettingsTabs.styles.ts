import styled from "styled-components";
import { Tabs, Tab } from 'react-bootstrap';


export const SettingsTabWrap = styled.div `
    .nav-tabs .nav-item.show .nav-link,
    .nav-tabs .nav-link{
        color: #7C7C7C;
    }
    .nav-tabs{
        background: #FBF5FF;
        box-shadow: 0px 4px 4px rgba(124, 124, 124, 0.5);
        border-radius: 0px 0px 10px 10px;
    }
    .nav-tabs .nav-item.show .nav-link, 
    .nav-tabs .nav-link.active{
        border: 1px solid transparent;
        border-bottom: 4px solid rgba(135, 61, 193, 0.5);
    }
    li:first-child .nav-link.active{
        border-radius: 0 0 0 10px;
    }
    .nav-tabs .nav-link:focus,
    .nav-tabs .nav-link:hover {
        border: 1px solid transparent;
        outline: none;
        color: #873DC1;
    }
    .nav-tabs .nav-link:focus, 
    .nav-tabs .nav-link.active:hover{
        border-bottom: 4px solid rgba(135, 61, 193, 0.5);
    }
    @media (max-width: 825px) {
        display: none;
    }
`;
export const DesktopTabs = styled(Tabs)`
    .nav-tabs .nav-item.show .nav-link, 
    .nav-tabs .nav-link.active{
        color: #873DC1;
        border: 1px solid transparent;
        border-bottom: 4px solid rgba(135, 61, 193, 0.5);
    }
`;
export const DesktopTab = styled(Tab)``;

export const MobileSettingsTabWrap = styled.div`
        display: none;
        .nav-tabs .nav-item.show .nav-link,
        .nav-tabs .nav-link{
            color: #7C7C7C;
            width: 100%;
        }
        .nav-tabs{
            background: #FBF5FF;
            box-shadow: 0px 4px 4px rgba(124, 124, 124, 0.5);
            border-radius: 0px 0px 10px 10px;
        }
        .nav-tabs .nav-item.show .nav-link, 
        .nav-tabs .nav-link.active{
            border: 1px solid transparent;
            border-bottom: 4px solid rgba(135, 61, 193, 0.5);
        }
        .nav-tabs .nav-link:focus,
        .nav-tabs .nav-link:hover {
            border: 1px solid transparent;
            outline: none;
            color: #873DC1;
        }
        .nav-tabs .nav-link:focus, 
        .nav-tabs .nav-link.active:hover{
            border-bottom: 4px solid rgba(135, 61, 193, 0.5);
        }
        li:first-child .nav-link.active{
            border-radius: 0 0 0 10px;
        }
        li:last-child .nav-link.active{
            border-radius: 0 0 10px 0;
        }
    @media (max-width: 825px) {
        display: block;
    }
`;
export const MobileTabs = styled(DesktopTabs) `
    display: none;
    @media (max-width: 825px) {
        display: flex;
        justify-content: space-around;
        .nav-tabs .nav-item.show .nav-link, 
        .nav-tabs .nav-link.active{
            color: #873DC1;
            border: 1px solid transparent;
            border-bottom: 4px solid rgba(135, 61, 193, 0.5);
        }
    }
`;

export const MobileTab = styled(DesktopTab) `
    display: none;
    @media (max-width: 825px) {
        display: flex;
    }
`;
export const DescriptionText = styled.p `
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    color: #7C7C7C;
    margin-bottom: 0;
    &.form-descript{
        padding-left: 3.5rem;
        margin-top: 5px;
    }
    @media (max-width: 576px) {
        font-size: 12px;
        line-height: 14px;
    }
`;
