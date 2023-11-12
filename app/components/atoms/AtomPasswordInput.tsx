import React, { FC } from 'react';
import {
  FormControl,
  InputLabel,
  OutlinedInput,
  IconButton,
  InputAdornment,
} from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

type Props = {
  showPassword: boolean;
  handleClickShowPassword: () => void;
  handleMouseDownPassword: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

const AtomPasswordInput: FC<Props> = ({
  showPassword,
  handleClickShowPassword,
  handleMouseDownPassword,
}) => (
  <FormControl variant='outlined' fullWidth>
    <InputLabel htmlFor='outlined-adornment-password'>パスワード</InputLabel>
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
);

export default AtomPasswordInput;
