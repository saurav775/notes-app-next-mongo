import styled from "styled-components";

export const NavWrp = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  background-color: rgba(21, 55, 93);
  color: #f1f2f3;
  padding: 1rem;
`;

export const NavLink = styled.a`
  text-decoration: none;
  color: inherit;
  :hover {
    text-decoration: none;
    opacity: 0.7;
  }
`;
