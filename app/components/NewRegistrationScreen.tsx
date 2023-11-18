'use client';
import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Button, Grid } from '@mui/material';
import AtomEmailInput from '@/app/components/atoms/AtomEmailInput';
import AtomPasswordInput from '@/app/components/atoms/AtomPasswordInput';
import LoginScreen from '@/app/components/LoginScreen';
import { BUTTON_TEXT, LABEL_TEXT } from '@/app/contents';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@/app/firebase';

const NewRegistrationScreen = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword1, setShowPassword1] = useState(false);
  const [isLoginScreen, setIsLoginScreen] = useState(false);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleClickShowPassword1 = () => setShowPassword1((show) => !show);

  const handleMouseDownPassword = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
  };

  const handleLoginClick = () => {
    setIsLoginScreen(true);
  };

  const handleLogin = async () => {
    try {
      if (password !== confirmPassword) {
        alert('パスワードが一致しません');
        return;
      }
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
    } catch (error) {
      console.log(error);
    }
  };

  return isLoginScreen ? (
    <LoginScreen />
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
        <Grid
          container
          direction='column'
          justifyContent='center'
          alignItems='center'
          className={'pb-10'}
        >
          <AtomPasswordInput
            label={LABEL_TEXT.PASSWORD_FOR_CONFIRMATION}
            showPassword={showPassword1}
            handleClickShowPassword={handleClickShowPassword1}
            handleMouseDownPassword={handleMouseDownPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </Grid>

        <center>
          <Button
            type='button'
            fullWidth
            variant='outlined'
            className={'text-blue-500 border border-blue-500 text-lg py-3 px-6'}
            onClick={() => {
              handleLogin();
            }}
          >
            {BUTTON_TEXT.NEW_REGISTRATION}
          </Button>
        </center>
        <div className=' text-center p-10'>
          <p>
            アカウントをお持ちの方はこちらです。
            <span
              className='cursor-pointer font-semibold'
              onClick={handleLoginClick}
            >
              {BUTTON_TEXT.LOGIN}
            </span>
          </p>
        </div>
      </Box>
    </Container>
  );
};

export default NewRegistrationScreen;
