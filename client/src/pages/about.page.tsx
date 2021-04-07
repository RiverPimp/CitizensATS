import React from "react";

import StyledAbout from "../components/styles/pages/about/aboutpage.styles";
import StyledTitle from "../components/styles/pages/about/aboutTitle.styles";
import StyledContainer from "../components/styles/pages/about/aboutContainer.styles";
import StyledEnd from "../components/styles/pages/about/aboutEnd.styles";

import Footer from "../components/footer.component";
import Header from "../components/header.component";
import StyledText from "../components/styles/pages/about/aboutText.styles";

const About: React.FC = () => {
  return (
    <StyledAbout>
      <Header />
      <StyledContainer>
        <StyledTitle>About me</StyledTitle>
        <StyledText>
          Good day, Andre Potgieter at your service. I am a Pearson Institute (Formarly CTI) BSc in Information Technology graduate, situated in Cape Town.
          I see myself as someone who is adaptable and ready to learn, and this project had me combing the web to learn the technologies needed to to complete it. 
        </StyledText>
        <StyledText>
          I took on this project with little knowledge of NodeJS and even less of React and GraphQL.
          I hit my head a few times studying the wrong syntaxs but the project has reached a presentable state.
          My knowlege on this project's required technologies has certainly grown, but I would like it to develop even more.
      
        </StyledText>
      </StyledContainer>
      <StyledContainer>
        <StyledTitle>About this project</StyledTitle>
        <StyledText>
          This project a SovTech Fullstack engineer test.
        </StyledText>
        <StyledText>
          The project makes use of apollo graphql api to fetch data from the swapi RESTful
          api, the client project then presents the requested information to you.
         
        </StyledText>
        <StyledText>
          The project is presentable, but unfortunately not yet complete in a sense. Thus I will continue building on it.
        </StyledText>
        <StyledEnd> Always pass on what you have learned.</StyledEnd>
      </StyledContainer>
      <Footer />
    </StyledAbout>
  );
};

export default About;
