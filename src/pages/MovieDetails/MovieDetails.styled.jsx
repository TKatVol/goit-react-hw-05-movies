import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledContainer = styled.div`
  padding: 20px;
`;

export const AdditionalSection = styled.div`
  display: grid;
  padding: 20px;
  border-top: 1px solid #a28183;
  border-bottom: 1px solid #a28183;
`;

export const Title = styled.h2`
  margin: 0;
`;

export const GoBackButton = styled(Link)`
  padding: 2px;
  text-decoration: none;
  font-weight: 800;
  text-decoration: none;
  background-color: #8b747e;
  color: #78141b;

  :hover {
    color: #000000;
    background-color: #78141b;
  }
`;
