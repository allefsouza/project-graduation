import styled, {keyframes} from 'styled-components'

export const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f0f0f0;
`;

export const LoginForm = styled.div`
  width: 400px;
  padding: 80px;
  background-color: red;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
`;

export const LoginTitle = styled.div`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
  color: white;
  text-align: center;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`;

export const Label = styled.label`
  margin-bottom: 5px;
  color: white;
`;

export const Input = styled.input`
  width: 100%;
  padding: 12px;
  margin-bottom: 10px;
  border: 1px solid ${({ isInvalid }) => (isInvalid ? 'red' : '#ccc')};
  border-radius: 4px;
  outline: none;
  transition: border-color 0.2s ease-in-out;

  &:focus {
    border-color: red;
  }
`;

export const ForgotPassword = styled.div`
  padding: 10px;
  margin-top: 5px;
  font-size: 14px;
  color: white;
  text-align: right;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;
export const swingAnimation = keyframes`
  0%, 100% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(5px);
  }
`
export const LoginButton = styled.button`
  width: 100%;
  padding: 10px;
  background-color: transparent;
  border: none;
  border-radius: 4px;
  color: white;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.3s;
  animation:none;

  &:hover {
    background-color: #d9a602;
    animation: ${swingAnimation} 0.5s 3;
  }
`;