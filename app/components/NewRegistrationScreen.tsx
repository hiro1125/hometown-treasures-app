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
import AtomEmailInput from '@/app/components/atoms/AtomEmailInput';
import AtomPasswordInput from '@/app/components/atoms/AtomPasswordInput';

const NewRegistrationScreen = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword1, setShowPassword1] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleClickShowPassword1 = () => setShowPassword1((show) => !show);

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
        <Grid
          container
          direction='column'
          justifyContent='center'
          alignItems='center'
          className={'pb-10'}
        >
          <AtomPasswordInput
            showPassword={showPassword1}
            handleClickShowPassword={handleClickShowPassword1}
            handleMouseDownPassword={handleMouseDownPassword}
          />
        </Grid>

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

export default NewRegistrationScreen;
