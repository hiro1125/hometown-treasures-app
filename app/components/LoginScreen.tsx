'use client';
import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import {
  Button,
  FormControl,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
} from '@mui/material';
import { AccountCircle, Visibility, VisibilityOff } from '@mui/icons-material';

const LoginScreen = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
  };

  return (
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
          <TextField
            label='メールアドレス'
            variant='outlined'
            fullWidth
            InputProps={{
              startAdornment: (
                <AccountCircle style={{ color: 'gray' }} className='mr-4' />
              ),
            }}
          />
        </Grid>
        <Grid
          container
          direction='column'
          justifyContent='center'
          alignItems='center'
          className={'pb-10'}
        >
          <FormControl variant='outlined' fullWidth>
            <InputLabel htmlFor='outlined-adornment-password'>
              パスワード
            </InputLabel>
            <OutlinedInput
              type={showPassword ? 'text' : 'password'}
              endAdornment={
                <InputAdornment position='end'>
                  <IconButton
                    aria-label='toggle password visibility'
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge='end'
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label='Password'
            />
          </FormControl>
        </Grid>
        <center>
          <Button
            type='button'
            variant='contained'
            fullWidth
            className={
              'bg-blue-500 hover:bg-blue-600 text-white text-lg py-3 px-6'
            }
          >
            ログイン
          </Button>
        </center>

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
          >
            新規登録
          </Button>
        </center>
      </Box>
    </Container>
  );
};

export default LoginScreen;
