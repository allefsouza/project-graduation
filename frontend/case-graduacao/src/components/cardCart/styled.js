import styled from "styled-components";

export const SectionCart = styled.section`
  display: flex;
  align-items: flex-start;
  box-shadow: 0 3px 3px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(10.5px);
  -webkit-backdrop-filter: blur(12.5px);
  border: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: 10px;
  padding: 20px;
  cursor: pointer;
  &:hover {
    box-shadow: 0 0 11px rgba(33, 33, 33, 0.2);
  }
  p {
    color: #b7b4b4;
  }
`;

export const RemoveItem = styled.button`
  font-size: 1.4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  padding: 5px;
  background: none;
  cursor: pointer;
  position: relative;
  color: red;
`;
