import React from 'react'
import {
  ActivityWrap,
  ActivityTableWrap,
  ActivityTopRow,
  ActivityText,
  ActivityButton,
  ActivityHeadTr,
  ActivityTr,
  ActivityTd,
  ActivityColorText,
  EtherIcon,
  // ActivityHeadTrMobile,
  // ActivityTableWrapMobile,
  // ActivityTdMobile,
  // ActivityTrMobile

} from "../Accordion.styles";
import {
  PriceText
} from '../../../NFTPage.styles'
const ItemActivity = () => {
  return (
    <ActivityWrap>
      <ActivityTopRow>
        <ActivityText>Filter</ActivityText>
        <ActivityButton className='left-btn'>Salers</ActivityButton>
        <ActivityButton>Transfers</ActivityButton>
        <ActivityButton>Listings</ActivityButton>
      </ActivityTopRow>
      <ActivityTableWrap>
      <ActivityHeadTr>
        <ActivityTd>Event</ActivityTd>
        <ActivityTd>Price</ActivityTd>
        <ActivityTd>From</ActivityTd>
        <ActivityTd>To</ActivityTd>
        <ActivityTd>Date</ActivityTd>
      </ActivityHeadTr>
      <ActivityTr>
        <ActivityTd>
          <ActivityText>Sale</ActivityText>
        </ActivityTd>
        <ActivityTd>
          <EtherIcon />
          <PriceText>2,5</PriceText>
          <ActivityText>ETH</ActivityText>
        </ActivityTd>
        <ActivityTd>
          <ActivityColorText color="#5D3F92">steen</ActivityColorText>
        </ActivityTd>
        <ActivityTd>
          <ActivityColorText color="#5D3F92">Hype-eth</ActivityColorText>
        </ActivityTd>
        <ActivityTd>5 months ago</ActivityTd>
      </ActivityTr>
      <ActivityTr>
        <ActivityTd>
        <ActivityText>Transfer</ActivityText>
        </ActivityTd>
        <ActivityTd>
          <EtherIcon />
          <PriceText>2</PriceText>
          <ActivityText>ETH</ActivityText>
        </ActivityTd>
        <ActivityTd>
        <ActivityColorText color="#5D3F92">steen</ActivityColorText>
        </ActivityTd>
        <ActivityTd>
          <ActivityColorText color="#5D3F92">Hype-eth</ActivityColorText>
        </ActivityTd>
        <ActivityTd>5 months ago</ActivityTd>
      </ActivityTr>
      <ActivityTr>
        <ActivityTd>
          <ActivityText>Minted</ActivityText>
        </ActivityTd>
        <ActivityTd>
          <EtherIcon />
          <PriceText>0,5</PriceText>
          <ActivityText>ETH</ActivityText>
        </ActivityTd>
        <ActivityTd>
          <ActivityColorText color="#5D3F92">NullAddress</ActivityColorText>
        </ActivityTd>
        <ActivityTd>
          <ActivityColorText color="#5D3F92">steen</ActivityColorText>
        </ActivityTd>
        <ActivityTd>6 months ago</ActivityTd>
      </ActivityTr>
      <ActivityTr>
        <ActivityTd>
          <ActivityText>Transfer</ActivityText>
        </ActivityTd>
        <ActivityTd>
          <EtherIcon />
          <PriceText>1,25</PriceText>
          <ActivityText>ETH</ActivityText>
        </ActivityTd>
        <ActivityTd>
          <ActivityColorText color="#5D3F92">steen</ActivityColorText>
        </ActivityTd>
        <ActivityTd>
          <ActivityColorText color="#5D3F92">Hype-eth</ActivityColorText>
        </ActivityTd>
        <ActivityTd>8 months ago</ActivityTd>
      </ActivityTr>
      </ActivityTableWrap>

      {/* <ActivityTableWrapMobile>
      <ActivityHeadTrMobile>
        <ActivityTdMobile className='table-head'>Event</ActivityTdMobile>
        <ActivityTdMobile className='table-head text-right'>Sale</ActivityTdMobile>
      </ActivityHeadTrMobile>
      <ActivityTrMobile>
        <ActivityTdMobile>Price</ActivityTdMobile>
        <ActivityTdMobile className='text-right'>
          <EtherIcon />
          <PriceText>2,5</PriceText>
          <ActivityText>ETH</ActivityText>
        </ActivityTdMobile>
      </ActivityTrMobile>  
      <ActivityTrMobile>
          <ActivityTdMobile>From</ActivityTdMobile>
          <ActivityTdMobile className='text-right'>
           <ActivityColorText color="#5D3F92">steen</ActivityColorText>
          </ActivityTdMobile>
      </ActivityTrMobile>
      <ActivityTrMobile>  
          <ActivityTdMobile>To</ActivityTdMobile>
          <ActivityTdMobile className='text-right'>
            <ActivityColorText color="#5D3F92">Hype-eth</ActivityColorText>
          </ActivityTdMobile>
      </ActivityTrMobile>
      <ActivityTrMobile>
        <ActivityTdMobile>Date</ActivityTdMobile>
        <ActivityTdMobile className='text-right'>5 months ago</ActivityTdMobile>
      </ActivityTrMobile>
      </ActivityTableWrapMobile> */}
    </ActivityWrap>
  )
}

export default ItemActivity