
import React , {useContext} from 'react';
import { styled } from '@mui/material/styles';
import {Box , Typography} from '@mui/material';
import RunaLogo from './icons/runaLogo';
import { useTranslation } from 'react-i18next';

import Signin from './components/Signin'


const Login = styled(Box)(({ theme }) => ({
    display: "flex",
    alignitems: "start",
    justifyContent: 'center',
    minWidth: '100%',
    minHeight: '100vh',
    background: '#ffffff'
  }));

  const LoginContainer = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    marginTop: '-1.5em'
  }));

  const LoginWelocmeMessage = styled(Typography)(({ theme }) => ({
    marginBottom: '2.125rem',
    fontSize: '1.125rem',
    fontWeight: '900',
    textAlign: 'center',
    color: theme.palette.primary.light
  }));

  const RunaLogoContainer = styled(Box)(({ theme }) => ({
    display: 'block',
    width: '4.25rem',
    height: 'auto',
    margin: '0 auto 2.625rem auto',
    fill: theme.palette.primary.light,
  }));

  const LoginDmeo = styled(Typography)(({ theme }) => ({"display":"block","width":"100%","marginTop":"1.5rem","textAlign":"center","fontSize":"12px","fontWeight":"600"}));
  const LoginDmeoLink = styled('a')(({ theme }) => (
    {"color":theme.palette.primary.light,"cursor":"pointer","textDecoration":"none"}
  ));

export default function Home() {
    const { t } = useTranslation();
    return (
        <Login>
            <LoginContainer>
                <RunaLogoContainer>
                     <RunaLogo />
                </RunaLogoContainer>
                <LoginWelocmeMessage variant='h1'>
                ¡Te ves radiante hoy!
                </LoginWelocmeMessage>
                <Signin/>
                <LoginDmeo >
                ¿No tienes cuenta? <LoginDmeoLink>{t('request')}</LoginDmeoLink>
                </LoginDmeo>
            </LoginContainer>
        </Login>
    )
}
