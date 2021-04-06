import React from "react";

import Heading from "./styles/header/header-heading.style.component";
import StyledHeader from "./styles/header/header.style.component";
import StyledSub from "./styles/header/header-subtitle.style";
import StyledLink from "./styles/header/header-navlink.style";
import ListCont from "./styles/header/header-list.style";

const Header: React.FC = () => {
  return (
    <StyledHeader>
      <div>
        <Heading>CITIZENS OF THE STARS</Heading>
        <StyledSub>a character index</StyledSub>
      </div>
      <nav>
        <ListCont>
          <li>
            <StyledLink
              to="/home"
              activeStyle={{ color: "#DAA520", borderColor: "#DAA520" }}
            >
              Home
            </StyledLink>
          </li>
          <li>
            <StyledLink
              to="/about"
              activeStyle={{ color: "#DAA520", borderColor: "#DAA520" }}
            >
              About
            </StyledLink>
          </li>
        </ListCont>
      </nav>
    </StyledHeader>
  );
};

export default Header;
