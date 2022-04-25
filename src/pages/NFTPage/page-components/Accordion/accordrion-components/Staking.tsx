import React, {FC} from 'react'

import { 
    StakingWrap,
    StakingWrapDesktop,
    StakingHeadTr,
    StakingTr,
    StakingTd,
    StakingWrapMobile,
    StakingHeadTdMobile,
    StakingTdMobile,
    StakingTrMobile,

 } from '../Accordion.styles'
const Staking: FC = () => {
    return (
        <StakingWrap>
            <StakingWrapDesktop>
                <StakingHeadTr>
                    <StakingTd>Day’s Staked</StakingTd>
                    <StakingTd>Avg. Reward per Day</StakingTd>
                    <StakingTd>Total</StakingTd>
                </StakingHeadTr>
                <StakingTr>
                    <StakingTd>30</StakingTd>
                    <StakingTd>3 (UND)</StakingTd>
                    <StakingTd>90 (UND)</StakingTd>
                </StakingTr>
            </StakingWrapDesktop>

            <StakingWrapMobile>
                <StakingTrMobile>
                    <StakingHeadTdMobile>Day’s Staked</StakingHeadTdMobile>
                    <StakingTdMobile>30</StakingTdMobile>
                </StakingTrMobile>
                <StakingTrMobile>
                    <StakingHeadTdMobile>Avg. Reward per Day</StakingHeadTdMobile>
                    <StakingTdMobile className='center-right'>3 (UND)</StakingTdMobile>
                </StakingTrMobile>   
                <StakingTrMobile>
                    <StakingHeadTdMobile>Total</StakingHeadTdMobile>
                    <StakingTdMobile>90 (UND)</StakingTdMobile>
                </StakingTrMobile>
            </StakingWrapMobile>
        </StakingWrap>
    )
}

export default Staking