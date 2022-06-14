import React from "react";

import {
  WebsiteTips1,
  WebsiteTips2,
  WebsiteTips3,
  BusinessTips1,
  BusinessTips2,
  BusinessTips3,
  Inspiration1,
  Inspiration2,
  Inspiration3,
  News1,
  News2,
  News3,
} from "../../imports";
import BlogCard from "../BlogCard/BlogCard";
import BlogMainGrid from "../BlogMainGrid/BlogMainGrid";
import MainPageSection from "../MainPageSection/MainPageSection";

const WebsiteCards: React.FC = () => {
  return (
    <>
      <BlogCard
        image={WebsiteTips1}
        titleText={"Lorem ipsum dolor sit amet consectetur adipisicing elit."}
        date={"06.06.2022"}
      />
      <BlogCard
        image={WebsiteTips2}
        titleText={"Lorem ipsum dolor sit, amet consectetur"}
        date={"04.06.2022"}
      />
      <BlogCard
        image={WebsiteTips3}
        titleText={"Lorem ipsum amet consectetur adipisicing elit."}
        date={"31.05.2022"}
      />
    </>
  );
};
const BusinessCards: React.FC = () => {
  return (
    <>
      <BlogCard
        image={BusinessTips1}
        titleText={"Lorem ipsum dolor sit, elit."}
        date={"05.06.2022"}
      />
      <BlogCard
        image={BusinessTips2}
        titleText={"Lorem ipsum dolor sit, amet consectetur"}
        date={"03.06.2022"}
      />
      <BlogCard
        image={BusinessTips3}
        titleText={"How to Lorem ipsum dolor sit, amet consectetur"}
        date={"01.06.2022"}
      />
    </>
  );
};
const InspirationCards: React.FC = () => {
  return (
    <>
      <BlogCard
        image={Inspiration1}
        titleText={"7 Lorem ipsum dolor sit, amet"}
        date={"06.06.2022"}
      />
      <BlogCard
        image={Inspiration2}
        titleText={"Lorem ipsum dolor sit, amet adipisicing elit."}
        date={"06.06.2022"}
      />
      <BlogCard
        image={Inspiration3}
        titleText={"Lorem ipsum dolor sit, amet consectetur adipisicing elit."}
        date={"15.04.2022"}
      />
    </>
  );
};
const NewsCards: React.FC = () => {
  return (
    <>
      <BlogCard
        image={News1}
        titleText={"Lorem ipsum dolor sit, amet consectetur adipisicing elit."}
        date={"06.06.2022"}
      />
      <BlogCard
        image={News2}
        titleText={"Lorem ipsum adipisicing elit."}
        date={"06.06.2022"}
      />
      <BlogCard
        image={News3}
        titleText={"Lorem ipsum dolor sit, amet elit adipisicing elit."}
        date={"06.06.2022"}
      />
    </>
  );
};

const MainBlog: React.FC = () => {
  return (
    <>
      <BlogMainGrid />
      <MainPageSection
        titleText="Website Tips"
        descriptText="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt impedit rerum culpa id ea rem dignissimos."
        blogCard={<WebsiteCards />}
        blogLink="/blog/website-tips"
      />
      <MainPageSection
        titleText="Business Tips"
        descriptText=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate repudiandae quidem sit earum amet veritatis, voluptates vel provident tenetur qui itaque nobis omnis! Hic accusantium odit quasi sed quia praesentium?"
        blogCard={<BusinessCards />}
        blogLink="/blog/business-tips"
      />
      <MainPageSection
        titleText="Inspiration"
        descriptText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia cupiditate impedit tempora eos. Quam voluptates recusandae asperiores nesciunt, odit porro atque impedit soluta doloribus!"
        blogCard={<InspirationCards />}
        blogLink="/blog/inspiration"
      />
      <MainPageSection
        titleText="News"
        descriptText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Non perspiciatis modi fugit pariatur ex nulla ipsam, tempora deserunt excepturi accusamus!"
        blogCard={<NewsCards />}
        blogLink="/blog/news"
      />
    </>
  );
};

export default MainBlog;
