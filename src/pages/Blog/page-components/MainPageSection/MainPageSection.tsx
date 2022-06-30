import React, { ReactNode } from "react";

import {
  Wrap,
  SectionTitle,
  SectionDescription,
  DescriptWrap,
  CardsWrap,
} from "./MainPageSection.styles";

import { ViewAllBtn } from "../../../HomePage/page-components/Recomended/Recommended.styles";

interface MainPageSection {
  titleText: string;
  descriptText: string;
  blogCard: ReactNode;
  blogLink: string;
}

const MainPageSection: React.FC<MainPageSection> = ({
  titleText,
  descriptText,
  blogCard,
  blogLink,
}) => {
  return (
    <Wrap>
      <SectionTitle>{titleText}</SectionTitle>
      <DescriptWrap>
        <SectionDescription>{descriptText}</SectionDescription>
        <ViewAllBtn to={blogLink}>View All</ViewAllBtn>
      </DescriptWrap>
      <CardsWrap>{blogCard}</CardsWrap>
    </Wrap>
  );
};

export default MainPageSection;
