import styled from "styled-components";

export const StyledButton = styled("button")<any>`
  background: ${(p) => p.color || "#2e186a"};
  color: ${(p) => (p.color ? "#fff" : "#fff")};
  font-size: 1rem;
  font-weight: 500;
  width: 100%;
  border: 1px solid #356fa4;
  border-radius: 4px;
  padding: 12px 0;
  cursor: pointer;
  margin-top: 0rem;
  max-width: 300px;
  transition: all 0.3s ease-in-out;
  box-shadow: 0 16px 30px rgb(23 31 114 / 20%);

  &:hover,
  &:active,
  &:focus {
    color: #356fa4;
    border: 1px solid rgb(255, 255, 255);
    background-color: rgb(255,255,255);
  }
`;
