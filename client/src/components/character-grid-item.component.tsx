import React from "react";
import { NavLink } from "react-router-dom";

import { Character } from "../common/interfaces/characters.interface";
import CardTitle from "./styles/cards/card-title.style.component";
import StyledText from "./styles/cards/card-text.style.component";
import StyledLink from "./styles/header/header-navlink.style";

const CharGridItem: React.FC<{ character: Character }> = ({
  character,
}: {
  character: Character;
}) => {
  return (
    <div>
      <CardTitle>{character.name}</CardTitle>
      
      <StyledText>{character.gender}</StyledText>
      <NavLink to={`/info/${character.name}`}>
      <nav>

            <StyledLink
              to={`/info/${character.name}`}
              activeStyle={{ color: "#DAA520", borderColor: "#DAA520" }}
            >
              Info
            </StyledLink>

      </nav>

      </NavLink>
    </div>
  );
};

export default CharGridItem;
