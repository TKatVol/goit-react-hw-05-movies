import styled from "styled-components";

export const StyledContainer = styled.div`
  padding: 20px;
`;

export const SearchForm = styled.form`
    display: flex;
    align-items: center;
    width: 400px;
    background-color: #fff;
    border: 1px solid #e9eff5;
    border-radius: 3px;
    overflow: hidden;
`;
  
export const SearchFormButton = styled.button`
    display: inline-block;
    min-width: 60px;
    height: 20px;
    border: 0;
      
    cursor: pointer;
    outline: none;
`;
  
export const SearchFormInput = styled.input`
    display: inline-block;
    width: 100%;
    font: inherit;
    font-size: 16px;
    border: none;
    outline: none;
    padding-left: 4px;
    padding-right: 4px;
`;