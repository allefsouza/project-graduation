import styled from 'styled-components';

export const ModalWrapper = styled.div`
display: ${({ visible }) => (visible ? 'flex' : 'none')};
position: fixed;
top: 0;
left: 50%;
transform: translate(-50%);
width: 100%;
height: 100%;
justify-content: center;
align-items: center;
`;

export const Select = styled.select `
    padding: 10px;
    margin-bottom: 10px;
    border: none;
    border-radius: 5px;
    width: 100%;
    overflow: hidden;
    -webkit-appearance: none;
    &:focus {
    outline: none;
    }
`

export const Label = styled.label`
  color: white;
`;

export const ModalContent = styled.div`
background-color: rgba(255, 0, 0, 0.7);
padding: 50px;
border-radius: 10px;
text-align: center;
max-width: 400px;
box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
`;

export const Title = styled.h2`
color: white;
`;

export const Form = styled.form`
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 20px;
width: 300px;
`;

export const Input = styled.input`
padding: 10px;
margin-bottom: 10px;
border: none;
border-radius: 5px;
width: 100%;
`;

export const ButtonConfirm = styled.button`
background-color: #008000;
  color: #ffffff;
  border: 2px solid #008000; 
  border-radius: 5px;
  padding: 10px 20px; 
  margin-top: 10px;
  cursor: pointer; 
  &:hover {
    background-color: #ffffff;
    color: #008000;
  }

  &:active {
    background-color: #008000;
    color: #ffffff;
  }
`;

export const ButtonClose = styled.button`
  background-color: #ff0000;
  color: #ffffff;
  border: 2px solid #ff0000; 
  border-radius: 5px;
  padding: 10px 20px; 
  cursor: pointer;
  &:hover {
    background-color: #ffffff;
    color: #ff0000;
  }

  &:active {
    background-color: #ff0000;
    color: #ffffff;
  }
`; 