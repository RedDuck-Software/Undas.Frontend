import React, {ReactNode} from "react";
import { ViewAllBtn } from "../../../HomePage/page-components/Recomended/Recommended.styles";


import { Wrap,
    SectionTitle,
    SectionDescription,
    DescriptWrap,
    CardsWrap
} from "./MainPageSection.styles";


interface MainPageSection {
    titleText: string;
    descriptText: string;
    blogCard: ReactNode;
}

const MainPageSection: React.FC<MainPageSection> = ({titleText, descriptText, blogCard}) => {
  return <Wrap>
      <SectionTitle>{titleText}</SectionTitle>
      <DescriptWrap>
        <SectionDescription>{descriptText}</SectionDescription>
        <ViewAllBtn>View All</ViewAllBtn>
      </DescriptWrap>
      <CardsWrap>
         {blogCard}
      </CardsWrap>
      
  </Wrap>;
};

export default MainPageSection;