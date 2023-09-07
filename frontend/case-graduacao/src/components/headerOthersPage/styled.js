import styled from 'styled-components' 



export const StyledContainer = styled.div`
    position: relative;
    background-color: red;
    height: 60px;
    padding: 0 20px;
    display: flex;
    align-items: center;
`;

export const StyledContent = styled.div`
  display: flex;
  align-items: center;
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

export const CartProps = styled.div`
    display: flex;
    right: 0;
    position: absolute;
    button{
        font-size: 1.8rem;
        display: flex;
        align-items: center;
        justify-content: center;
        border: none;
        padding: 5px;
        background: none;
        cursor: pointer;
        position: relative;
        margin-left: 20px;
        color: white;
        span{
            background-color: #d9a602;
            width: 15px;
            height: 15px;
            position: absolute;
            top: 0;
            left: 0;
            color: white;
            font-size: 11px;
            font-weight: 600;
            border-radius: 15px;
            display: flex;
            align-items: center;
            justify-content: center;
            }
        }
`
