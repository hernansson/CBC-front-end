import TextField from '@mui/material/TextField';
import styled from '@emotion/styled';

export const TextFieldFocus = styled(TextField, {
  shouldForwardProp: (props) =>
    props !== 'focusColor' ||
    props !== 'labelColor' ||
    props !== 'borderColor' ||
    props !== 'hoverColor' ||
    props !== 'inputColor',
})((p) => ({
  // input label when focused
  '& label.Mui-focused': {
    color: p.error ? 'red' : p.focusColor,
  },
  // focused color for input with variant='standard'
  '& .MuiInput-underline:after': {
    borderBottomColor: p.focusColor,
  },
  // focused color for input with variant='filled'
  '& .MuiFilledInput-underline:after': {
    borderBottomColor: p.focusColor,
  },
  // focused color for input with variant='outlined'
  '& .MuiOutlinedInput-root': {
    '&.Mui-focused fieldset': {
      borderColor: p.error ? 'red' : p.focusColor,
    },
    '& fieldset': {
      borderColor: p.borderColor,
    },
    '&:hover fieldset': {
      borderColor: p.error ? 'red' : p.hoverColor,
    },
  },
  '& input': {
    color: p.inputColor,
  },

  '& label': {
    color: p.error ? 'red' : p.labelColor,
  },
}));
