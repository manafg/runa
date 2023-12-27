// SignIn.js
import React, { useState } from 'react';
import {
  Button,
  Typography,
  Link,
  Box
} from '@mui/material';
import { styled } from '@mui/material/styles';
import CustomInput from '../components/Input/CustomInput.tsx'
import { useTranslation } from 'react-i18next';

const FormStyled = styled(Box)(({ theme }) => (
  {"width":"322px","background":"#fcfcfc","boxShadow":"0 2px 4px 0 rgba(53, 44, 96, 0.33)","borderRadius":"6px","padding":"2rem"}
));


function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');

  const navigateToCreateRecipe = () => {
   
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!validateEmail(email)) {
      setEmailError('Please enter a valid email address');
      return;
    } 

    setEmailError('');
    navigateToCreateRecipe();
  };

  const { t } = useTranslation();


  return (
    <FormStyled component="main" maxWidth="xs" >
      <Typography sx={{
        color: '#352c60',
        textAlign: 'center',
        marginBottom: '20px'
      }} component="legend" >
       Por favor, ingresa tus datos
      </Typography>
      <form sx={{
         width: '100%',
         marginTop: '1rem',
      }}  noValidate onSubmit={handleSubmit}>
        
        <CustomInput
          variant="outlined"
          margin="normal"
          required
          fullWidth
          sx={{ margin: 0 , marginBottom:2 , height: 1}}
          id="email"
          name="email"
          autoComplete="email"
          value={email}
          setValue={setEmail}
          error={Boolean(emailError)}
          helperText={emailError}
          label='Email'
        />
       
        <CustomInput
          variant="outlined"
          margin="normal"
          label='Password'
          required
          fullWidth
          name="password"
          type="password"
          id="password"
          autoComplete="current-password"
          value={password}
          setValue={setPassword}
        />
        <Button
          sx={{
            margin: '1rem 0',
            color:"#fff"
          }}
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
        >
         Ingresar
        </Button>
      </form>
      <Link href="#" sx={{
        textAlign: 'center',
        color: '#352c60',
      }} variant="body2">
       ¿Olvidaste tu contraseña?
      </Link>
    </FormStyled>
  );
}

export default SignIn;
