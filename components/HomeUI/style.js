import styled, { css } from "styled-components";

const buttonCommonStyle = css`
  border-radius: 3px;
  color: #fff;
  padding: 0.8rem;
  width: 100%;
  outline: none;
  border: none;
  :hover {
    opacity: 0.75;
    cursor: pointer;
  }
`;

export const HomeWrp = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 2rem;
`;
export const CardWrp = styled.div`
  display: flex;
  border-radius: 4px;
  background-color: #f3f3f3;
  color: black;
  flex-direction: column;
  min-width: 20rem;
  margin-right: 2rem;
  margin-bottom: 2rem;
  padding: 2rem;
`;
export const CardTitle = styled.h3`
  color: black;
  margin-bottom: 0.8rem;
  font-size: 1.2rem;
`;
export const CardDescription = styled.p`
  color: black;
  font-size: 0.85rem;
  margin-bottom: 1.5rem;
`;
export const ButtonWrp = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const EditButton = styled.a`
  ${buttonCommonStyle};
  background-color: rgb(21, 55, 93);
  margin-right: 1rem;
  text-align: center;
`;
export const DeleteButton = styled.button`
  ${buttonCommonStyle};
  background-color: rgb(204, 0, 0);
`;
