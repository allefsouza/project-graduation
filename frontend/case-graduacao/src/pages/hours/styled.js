import styled from 'styled-components' 



export const StyledContainer = styled.div`
    position: relative;
    background-color: red;
    height: 60px;
    padding: 0 20px;
`;

export const StyledContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
`;

export const StyledImage = styled.img`
    width: 30px;
    height: auto;
    padding: 3px;
    cursor: pointer;
`;

export const StyledText = styled.p`
    font-size: 18px;
    color: white;
    margin-left: 10px;
`;