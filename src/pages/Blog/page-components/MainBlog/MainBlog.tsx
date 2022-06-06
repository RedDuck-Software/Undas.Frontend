import React from "react";
import BlogCard from "../BlogCard/BlogCard";
import BlogMainGrid from "../BlogMainGrid/BlogMainGrid";
import MainPageSection from "../MainPageSection/MainPageSection";

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
    News3
} from "../../imports"

import { Wrap } from "./MainBlog.styles";

const WebsiteCards: React.FC = () => {
    return <>
          <BlogCard image={WebsiteTips1} titleText={"Beginners Guide: What is a Website Domain Name?"} date={"06.06.2022"}/>
          <BlogCard image={WebsiteTips2} titleText={"Beginners Guide: What is a Website Domain Name?"} date={"06.06.2022"}/>
          <BlogCard image={WebsiteTips3} titleText={"Beginners Guide: What is a Website Domain Name?"} date={"06.06.2022"}/>
    </>;
};
const BusinessCards: React.FC = () => {
    return <>
          <BlogCard image={BusinessTips1} titleText={"Beginners Guide: What is a Website Domain Name?"} date={"06.06.2022"}/>
          <BlogCard image={BusinessTips2} titleText={"Beginners Guide: What is a Website Domain Name?"} date={"06.06.2022"}/>
          <BlogCard image={BusinessTips3} titleText={"Beginners Guide: What is a Website Domain Name?"} date={"06.06.2022"}/>
    </>;
};
const InspirationCards: React.FC = () => {
    return <>
          <BlogCard image={Inspiration1} titleText={"Beginners Guide: What is a Website Domain Name?"} date={"06.06.2022"}/>
          <BlogCard image={Inspiration2} titleText={"Beginners Guide: What is a Website Domain Name?"} date={"06.06.2022"}/>
          <BlogCard image={Inspiration3} titleText={"Beginners Guide: What is a Website Domain Name?"} date={"06.06.2022"}/>
    </>;
};
const NewsCards: React.FC = () => {
    return <>
          <BlogCard image={News1} titleText={"Beginners Guide: What is a Website Domain Name?"} date={"06.06.2022"}/>
          <BlogCard image={News2} titleText={"Beginners Guide: What is a Website Domain Name?"} date={"06.06.2022"}/>
          <BlogCard image={News3} titleText={"Beginners Guide: What is a Website Domain Name?"} date={"06.06.2022"}/>
    </>;
};

const MainBlog: React.FC = () => {
  return <Wrap>
      <BlogMainGrid />
      <MainPageSection titleText="Website Tips" descriptText="From design tips to content ideas to SEO—everything you need to know about your online presence" blogCard={(<WebsiteCards />)} />
      <MainPageSection titleText="Business Tips" descriptText="Marketing and social media, tools and productivity, and information on self-employment, freelancing, and launching your own idea" blogCard={(<BusinessCards />)} />
      <MainPageSection titleText="Inspiration" descriptText="Real companies, real stories. Get fresh ideas from Jimdo users already making their mark" blogCard={(<InspirationCards />)} />
      <MainPageSection titleText="News" descriptText="The latest updates from Jimdo including new features, community campaigns, and company news" blogCard={(<NewsCards />)} />
  
  </Wrap>;
};

export default MainBlog;