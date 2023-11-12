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

const LoginScreen = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoginScreen, setIsLoginScreen] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
  };

  const handleRegistrationClick = () => {
    setIsLoginScreen(true);
  };

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
          <AtomEmailInput />
        </Grid>
        <Grid
          container
          direction='column'
          justifyContent='center'
          alignItems='center'
          className={'pb-10'}
        >
          <AtomPasswordInput
            showPassword={showPassword}
            handleClickShowPassword={handleClickShowPassword}
            handleMouseDownPassword={handleMouseDownPassword}
          />
        </Grid>
        <AtomLoginButton />
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
            新規登録
          </Button>
        </center>
      </Box>
    </Container>
  );
};

export default LoginScreen;
