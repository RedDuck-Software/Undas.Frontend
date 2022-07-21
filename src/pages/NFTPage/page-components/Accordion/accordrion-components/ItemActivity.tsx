import { ethers } from "ethers";
import React from "react";

import { PriceText } from "../../../NFTPage.styles";
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
} from "../Accordion.styles";
interface ItemActivityItems {
  items?:any 
}
const ItemActivity: React.FC<ItemActivityItems> = ({items}) => {
  return (
    <ActivityWrap>
      <ActivityTopRow>
        <ActivityText>Filter</ActivityText>
        <ActivityButton className="left-btn">Salers</ActivityButton>
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
         {items.data.listings.map((item:any) => {
            return <ActivityTr key={item}>
                      <ActivityTd>
                        <ActivityText>Sale</ActivityText>
                      </ActivityTd>
                      <ActivityTd>
                        <EtherIcon />
                        <PriceText>{ethers.utils.formatEther(
                             item.price.toString(),
                          )}
                        </PriceText>
                        <ActivityText>ETH</ActivityText>
                      </ActivityTd>
                      <ActivityTd>
                        <ActivityColorText color="#5D3F92">0xdA0....49154</ActivityColorText>
                      </ActivityTd>
                      <ActivityTd>
                        <ActivityColorText color="#5D3F92">0xf35....C8ACd</ActivityColorText>
                      </ActivityTd>
                      <ActivityTd>Day ago</ActivityTd>
                    </ActivityTr>
          })}
          {items.data.stakingListings.map((item:any) => {
            return <ActivityTr key={item}>
                      <ActivityTd>
                        <ActivityText>Rent</ActivityText>
                      </ActivityTd>
                      <ActivityTd>
                        <EtherIcon />
                        <PriceText>{ethers.utils.formatEther(
                             item.colloteralWei.toString(),
                          )}
                        </PriceText>
                        <ActivityText>ETH</ActivityText>
                      </ActivityTd>
                      <ActivityTd>
                        <ActivityColorText color="#5D3F92">0x454...7720</ActivityColorText>
                      </ActivityTd>
                      <ActivityTd>
                        <ActivityColorText color="#5D3F92">0x1DE...93a24</ActivityColorText>
                      </ActivityTd>
                      <ActivityTd>Day ago</ActivityTd>
                    </ActivityTr>
          })}
          {items.data.tokens.map((item:any) => {
            return <ActivityTr key={item}>
                      <ActivityTd>
                        <ActivityText>Mint</ActivityText>
                      </ActivityTd>
                      <ActivityTd>
                        <EtherIcon />
                        <PriceText>
                          -
                        </PriceText>
                        <ActivityText>ETH</ActivityText>
                      </ActivityTd>
                      <ActivityTd>
                        <ActivityColorText color="#5D3F92">-</ActivityColorText>
                      </ActivityTd>
                      <ActivityTd>
                        <ActivityColorText color="#5D3F92">0x1DE...93a24</ActivityColorText>
                      </ActivityTd>
                      <ActivityTd>Week ago</ActivityTd>
                    </ActivityTr>
          })}              
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
  );
};

export default ItemActivity;
