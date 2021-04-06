import React from "react";

import StyledFooter from "./styles/footer/footer.styles";

const Footer: React.FC = () => {
  return (
    <StyledFooter>
      <p>Created By Andre Potgieter</p>
      <nav>
        <a href="https://www.apollographql.com/docs/apollo-server/v1/">Github </a>

      </nav>
    </StyledFooter>
  );
};

export default Footer;
