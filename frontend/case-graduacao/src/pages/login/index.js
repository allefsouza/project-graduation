import React, {useState} from 'react';
import {LoginContainer, LoginForm, LoginTitle, LoginButton, InputContainer, Input, Label, ForgotPassword} from '../../pages/login/styled'
import HeaderOthersPage from '../../components/headerOthersPage';


export default function Login() {
    const [username, setUsername] = useState('');
    const isInvalidUsername = username.length>0 && username.length <6;
 return (
    <>
    <HeaderOthersPage title='Login'/>
    <LoginContainer>
    <LoginForm>
      <LoginTitle>Login</LoginTitle>
      <InputContainer>
        <Label htmlFor="username">Username</Label>
        <Input 
        type="text" 
        id="username" 
        placeholder='Usuário'
        value={username}
        onChange={(e)=> setUsername(e.target.value)}
        isInvalidUsername={isInvalidUsername}
        />
      </InputContainer>
      <InputContainer>
        <Label htmlFor="password">Password</Label>
        <Input type="password" id="password" placeholder='Senha'/>
      </InputContainer>
      <ForgotPassword>Forgot password?</ForgotPassword>
      <LoginButton>Enter</LoginButton>
    </LoginForm>
  </LoginContainer>
  </>
 );
}