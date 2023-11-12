import React, { FC } from 'react';
import { IconButton, InputAdornment, TextField } from '@mui/material';
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
  <TextField
    id='outlined-adornment-password-2'
    label='パスワード'
    multiline
    fullWidth
    variant='outlined'
    type={showPassword ? 'text' : 'password'}
    InputProps={{
      endAdornment: (
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
      ),
    }}
  />
);

export default AtomPasswordInput;
