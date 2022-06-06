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
          <BlogCard image={WebsiteTips1} titleText={"How to Embed a Spotify Playlist on Your Website"} date={"06.06.2022"}/>
          <BlogCard image={WebsiteTips2} titleText={"Simple Keyword Research To Attract More Customers"} date={"04.06.2022"}/>
          <BlogCard image={WebsiteTips3} titleText={"The Basics of Jimdo Fonts"} date={"31.05.2022"}/>
    </>;
};
const BusinessCards: React.FC = () => {
    return <>
          <BlogCard image={BusinessTips1} titleText={"Music Marketing: Tips and Strategies"} date={"05.06.2022"}/>
          <BlogCard image={BusinessTips2} titleText={"How Do You Charge for Shipping? Let’s See the Options"} date={"03.06.2022"}/>
          <BlogCard image={BusinessTips3} titleText={"How to Make Your Small Business More Sustainable"} date={"01.06.2022"}/>
    </>;
};
const InspirationCards: React.FC = () => {
    return <>
          <BlogCard image={Inspiration1} titleText={"7 Photography Websites with the Wow Factor"} date={"06.06.2022"}/>
          <BlogCard image={Inspiration2} titleText={"Dancer’s online store leads to success: “Every sale is like a dopamine rush!”"} date={"06.06.2022"}/>
          <BlogCard image={Inspiration3} titleText={"Meet Amanda: Product manager and coffee entrepreneur at Los Altona"} date={"15.04.2022"}/>
    </>;
};
const NewsCards: React.FC = () => {
    return <>
          <BlogCard image={News1} titleText={"New Jimdo Terms of Service: Shorter, Simpler, Handier"} date={"06.06.2022"}/>
          <BlogCard image={News2} titleText={"Business Listings Help New Customers Find Your Business Online"} date={"06.06.2022"}/>
          <BlogCard image={News3} titleText={"Web Design Features for Beautiful Branding"} date={"06.06.2022"}/>
    </>;
};

const MainBlog: React.FC = () => {
  return <Wrap>
      <BlogMainGrid />
      <MainPageSection titleText="Website Tips" descriptText="From design tips to content ideas to SEO—everything you need to know about your online presence" blogCard={(<WebsiteCards />)} blogLink="#website-tips" />
      <MainPageSection titleText="Business Tips" descriptText="Marketing and social media, tools and productivity, and information on self-employment, freelancing, and launching your own idea" blogCard={(<BusinessCards />)} blogLink="#business-tips" />
      <MainPageSection titleText="Inspiration" descriptText="Real companies, real stories. Get fresh ideas from Jimdo users already making their mark" blogCard={(<InspirationCards />)} blogLink="#inspiration" />
      <MainPageSection titleText="News" descriptText="The latest updates from Jimdo including new features, community campaigns, and company news" blogCard={(<NewsCards />)} blogLink="#news" />
  
  </Wrap>;
};

export default MainBlog;