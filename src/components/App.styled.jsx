import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const StyledContainer = styled.div`
  padding: 20px;
`;

export const StyledNav = styled.nav`
  padding: 20px;
  background-color: #e9eff5;
`;

export const StyledLink = styled(NavLink)`
  font-weight: 800;
  text-decoration: none;
  color: black;

  &.active {
    color: #78141b;
  }

  :hover {
    color: #78141b;
  }

  :not(:last-child){
    margin-right: 20px;
  }
`;