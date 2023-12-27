import React from 'react';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

interface CustomInputProps {
  label: string;
  value: string;
  setValue: (value: string) => void;
  error?: string;
  name: string;
  id: string;
  autoComplete?: string;
  required?: boolean;
}


const CustomInput: React.FC<CustomInputProps> = ({
    label,
    value,
    setValue,
    error,
    name,
    id,
    autoComplete,
    required = false
  }) => {
    return (
      <div>
        <Typography sx={{ color: '#352c60', margin: 0 }} component="legend">
          {label}
        </Typography>
        <TextField
          variant="outlined"
          margin="normal"
          required={required}
          fullWidth
          sx={{ margin: 0, marginBottom: 2 }}
          id={id}
          name={name}
          autoComplete={autoComplete}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          error={Boolean(error)}
          helperText={error}
        />
      </div>
    );
  }
  
  export default CustomInput;
  