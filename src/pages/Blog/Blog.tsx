import React from "react";

import { BlogWrap, Text } from "./Blog.styles";
// import BusinessTips from "./page-components/BusinessTips/BusinessTips";
// import Inspiration from "./page-components/Inspiration/Inspiration";
import MainBlog from "./page-components/MainBlog/MainBlog";
// import News from "./page-components/News/News";
// import WebsiteTips from "./page-components/WebsiteTips/WebsiteTips";

import {
  Container,
  Background,
  PageTitle,
  ColoredText,
} from "../../globalStyles";

const Blog: React.FC = () => {
  // const [tab, setTab] = useState("main");

  return (
    <Background>
      <BlogWrap>
        <Container>
          <PageTitle>
            THE <ColoredText>UNDAS</ColoredText> BLOG
          </PageTitle>
          <Text>
            Get advice about self-employment, starting a business, website tips,
            web design, online stores, SEO, marketing, and more
          </Text>
        </Container>
        {/* <TabsMenuWrap>
          <Container>
            <TabsMenu>
              <Tab
                onClick={() => setTab("main")}
                className={tab === "main" ? "active" : ""}
              >
                <span>Recent Posts</span>
              </Tab>
              <Tab
                onClick={() => setTab("website-tips")}
                className={tab === "website-tips" ? "active" : ""}
              >
                <span>Website Tips</span>
              </Tab>
              <Tab
                onClick={() => setTab("business-tips")}
                className={tab === "business-tips" ? "active" : ""}
              >
                <span>Business Tips</span>
              </Tab>
              <Tab
                onClick={() => setTab("inspiration")}
                className={tab === "inspiration" ? "active" : ""}
              >
                <span>Inspiration</span>
              </Tab>
              <Tab
                onClick={() => setTab("news")}
                className={tab === "news" ? "active" : ""}
              >
                <span>News</span>
              </Tab>
            </TabsMenu>
          </Container>
        </TabsMenuWrap> */}
        <Container>
          <MainBlog />
          {/* {tab === "main" && <MainBlog />}
          {tab === "website-tips" && <WebsiteTips />}
          {tab === "business-tips" && <BusinessTips />}
          {tab === "inspiration" && <Inspiration />}
          {tab === "news" && <News />} */}
        </Container>
      </BlogWrap>
    </Background>
  );
};

export default Blog;
