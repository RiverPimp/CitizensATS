import { NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledLink = styled(NavLink)`
  text-decoration: none;
  padding: 4px 16px;
  margin: 0 2px;
  transition: all 0.5s;
  font-family: SfDistantGalaxy-0l3d;
  border: 1px solid white;
  &:link,
  &:visited {
    color: white;
  }
  &:hover,
  &:active {
    color: #DAA520;
    border: 1px solid #DAA520;
  }
`;

export default StyledLink;
