'use client';
import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Button, Grid } from '@mui/material';
import AtomPasswordInput from '@/app/components/atoms/AtomPasswordInput';
import AtomLoginButton from '@/app/components/atoms/AtomLoginButton';
import AtomEmailInput from '@/app/components/atoms/AtomEmailInput';
import NewRegistrationScreen from '@/app/components/NewRegistrationScreen';
import { BUTTON_TEXT, LABEL_TEXT } from '@/app/contents';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@/app/firebase';

const LoginScreen = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoginScreen, setIsLoginScreen] = useState(false);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
  };

  const handleRegistrationClick = () => {
    setIsLoginScreen(true);
  };

  const handleLogin = async () => {
    try {
      if (email && password) {
        const userCredential = await signInWithEmailAndPassword(
          auth,
          email,
          password
        );
        const user = userCredential.user;
      } else {
        console.log('ログインできました。');
      }
    } catch (error) {
      console.log(error);
    }
  };

  const isLoginDisabled = !(email && password);

  return isLoginScreen ? (
    <NewRegistrationScreen />
  ) : (
    <Container maxWidth='sm' className={'mt-28 p-6'}>
      <Typography variant='h4' gutterBottom className={' text-center'}>
        ふるさと納税記録帳
      </Typography>
      <Box component='form'>
        <Grid
          container
          direction='column'
          justifyContent='center'
          alignItems='center'
          className={'pt-10 pb-10'}
        >
          <AtomEmailInput onChange={(e) => setEmail(e.target.value)} />
        </Grid>
        <Grid
          container
          direction='column'
          justifyContent='center'
          alignItems='center'
          className={'pb-10'}
        >
          <AtomPasswordInput
            label={LABEL_TEXT.PASSWORD}
            showPassword={showPassword}
            handleClickShowPassword={handleClickShowPassword}
            handleMouseDownPassword={handleMouseDownPassword}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Grid>
        <AtomLoginButton
          onClick={() => {
            handleLogin();
          }}
          disabled={isLoginDisabled}
        />
        <div className={'flex items-center space-x-1 m-10'}>
          <div className={'flex-1 border-b border-gray-500'}></div>
          <span className={'text-gray-500 px-3'}>もしくは</span>
          <div className={'flex-1 border-b border-gray-500'}></div>
        </div>
        <center>
          <Button
            type='button'
            fullWidth
            variant='outlined'
            className={'text-blue-500 border border-blue-500 text-lg py-3 px-6'}
            onClick={handleRegistrationClick}
          >
            {BUTTON_TEXT.NEW_REGISTRATION}
          </Button>
        </center>
      </Box>
    </Container>
  );
};

export default LoginScreen;
