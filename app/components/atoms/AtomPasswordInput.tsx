import React, { FC } from 'react';
import { IconButton, InputAdornment, TextField } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

type Props = {
  label: string;
  showPassword: boolean;
  handleClickShowPassword: () => void;
  handleMouseDownPassword: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const AtomPasswordInput: FC<Props> = ({
  label,
  showPassword,
  handleClickShowPassword,
  handleMouseDownPassword,
  onChange,
}) => (
  <TextField
    label={label}
    fullWidth
    variant='outlined'
    type={showPassword ? 'text' : 'password'}
    onChange={onChange}
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
