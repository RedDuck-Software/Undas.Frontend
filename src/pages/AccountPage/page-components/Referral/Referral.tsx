import React from "react";

import { Copy, Twitter, Telegram, Discord, Instagram, EthIco } from "./imports";
import {
  ReferralWrap,
  PageHead,
  Title,
  PageContent,
  PaginationWrap,
  ReferralLink,
  ReferralLinkButton,
  SocialWrap,
  ShareButton,
  SocialButton,
  TextBlock,
  SubTitle,
  ContentTable,
  ContentTableTr,
  ContentTableTh,
  ContentTableTd,
  ReferralPagination,
  ContentTableWrap
} from "./Referral.styles";

const Referral: React.FC = () => {
  return (
    <ReferralWrap>
      <Title>Referral Program</Title>
      <PageHead>
        <ReferralLinkButton>
          <ReferralLink>https://UNDAS.io/collection/pride-lands</ReferralLink>
          <Copy />
        </ReferralLinkButton>
        <SocialWrap>
          <ShareButton>Share Link</ShareButton>
          <SocialButton>
            <Twitter />
          </SocialButton>
          <SocialButton>
            <Telegram />
          </SocialButton>
          <SocialButton>
            <Discord />
          </SocialButton>
          <SocialButton>
            <Instagram />
          </SocialButton>
        </SocialWrap>
        <TextBlock>
          the one who came through the link gets 50 und (conditionally) and a
          random nft on his balance, which can only be spent on paying site
          commissions
        </TextBlock>
      </PageHead>
      <PageContent>
        <SubTitle>Referral List</SubTitle>
        <ContentTableWrap>
          <ContentTable>
            <ContentTableTr className="first-row">
              <ContentTableTh className="first-column">Referral</ContentTableTh>
              <ContentTableTh>Total Commission Paid</ContentTableTh>
              <ContentTableTh>10% of Commission</ContentTableTh>
            </ContentTableTr>
            <ContentTableTr>
              <ContentTableTd className="first-column">
                0x5d46cb693bd0d1585d1de9823cb6b488281cc99c
              </ContentTableTd>
              <ContentTableTd>50 (UND)</ContentTableTd>
              <ContentTableTd>50 (UND)</ContentTableTd>
            </ContentTableTr>
            <ContentTableTr>
              <ContentTableTd className="first-column">
                0x5d46cb693bd0d1585d1de9823cb6b488281cc99c
              </ContentTableTd>
              <ContentTableTd>$123 278,00</ContentTableTd>
              <ContentTableTd>$123 278,00</ContentTableTd>
            </ContentTableTr>
            <ContentTableTr>
              <ContentTableTd className="first-column">
                0x5d46cb693bd0d1585d1de9823cb6b488281cc99c
              </ContentTableTd>
              <ContentTableTd>
                <EthIco /> 40
              </ContentTableTd>
              <ContentTableTd>
                <EthIco /> 40
              </ContentTableTd>
            </ContentTableTr>
            <ContentTableTr>
              <ContentTableTd className="first-column">
                0x5d46cb693bd0d1585d1de9823cb6b488281cc99c
              </ContentTableTd>
              <ContentTableTd>50 (UND)</ContentTableTd>
              <ContentTableTd>50 (UND)</ContentTableTd>
            </ContentTableTr>
            <ContentTableTr>
              <ContentTableTd className="first-column">
                0x5d46cb693bd0d1585d1de9823cb6b488281cc99c
              </ContentTableTd>
              <ContentTableTd>$123 278,00</ContentTableTd>
              <ContentTableTd>$123 278,00</ContentTableTd>
            </ContentTableTr>
            <ContentTableTr>
              <ContentTableTd className="first-column">
                0x5d46cb693bd0d1585d1de9823cb6b488281cc99c
              </ContentTableTd>
              <ContentTableTd>
                <EthIco /> 40
              </ContentTableTd>
              <ContentTableTd>
                <EthIco /> 40
              </ContentTableTd>
            </ContentTableTr>
            <ContentTableTr>
              <ContentTableTd className="first-column">
                0x5d46cb693bd0d1585d1de9823cb6b488281cc99c
              </ContentTableTd>
              <ContentTableTd>50 (UND)</ContentTableTd>
              <ContentTableTd>50 (UND)</ContentTableTd>
            </ContentTableTr>
            <ContentTableTr>
              <ContentTableTd className="first-column">
                0x5d46cb693bd0d1585d1de9823cb6b488281cc99c
              </ContentTableTd>
              <ContentTableTd>$123 278,00</ContentTableTd>
              <ContentTableTd>$123 278,00</ContentTableTd>
            </ContentTableTr>
            <ContentTableTr className="last-row">
              <ContentTableTd className="first-column">
                0x5d46cb693bd0d1585d1de9823cb6b488281cc99c
              </ContentTableTd>
              <ContentTableTd>
                <EthIco /> 40
              </ContentTableTd>
              <ContentTableTd>
                <EthIco /> 40
              </ContentTableTd>
            </ContentTableTr>
          </ContentTable>
        </ContentTableWrap>
      </PageContent>
      <PaginationWrap>
        <ReferralPagination>
          <ReferralPagination.First />
          <ReferralPagination.Prev />
          <ReferralPagination.Item>{1}</ReferralPagination.Item>
          <ReferralPagination.Ellipsis />

          <ReferralPagination.Item>{10}</ReferralPagination.Item>
          <ReferralPagination.Item>{11}</ReferralPagination.Item>
          <ReferralPagination.Item active>{12}</ReferralPagination.Item>
          <ReferralPagination.Item>{13}</ReferralPagination.Item>
          <ReferralPagination.Item>{14}</ReferralPagination.Item>

          <ReferralPagination.Ellipsis />
          <ReferralPagination.Item>{20}</ReferralPagination.Item>
          <ReferralPagination.Next />
          <ReferralPagination.Last />
        </ReferralPagination>
        {/* For XS */}
        <ReferralPagination size="sm">
          <ReferralPagination.First />
          <ReferralPagination.Prev />
          <ReferralPagination.Item>{1}</ReferralPagination.Item>
          <ReferralPagination.Ellipsis />

          <ReferralPagination.Item>{11}</ReferralPagination.Item>
          <ReferralPagination.Item active>{12}</ReferralPagination.Item>
          <ReferralPagination.Item>{13}</ReferralPagination.Item>

          <ReferralPagination.Ellipsis />
          <ReferralPagination.Item>{20}</ReferralPagination.Item>
          <ReferralPagination.Next />
          <ReferralPagination.Last />
        </ReferralPagination>
      </PaginationWrap>
    </ReferralWrap>
  );
};

export default Referral;
