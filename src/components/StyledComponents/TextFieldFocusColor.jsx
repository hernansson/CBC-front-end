import TextField from '@mui/material/TextField';
import styled from '@emotion/styled';

export const TextFieldFocus = styled(TextField, {
  shouldForwardProp: (props) =>
    props !== 'focuscolor' ||
    props !== 'labelcolor' ||
    props !== 'bordercolor' ||
    props !== 'hovercolor' ||
    props !== 'inputcolor',
})((p) => ({
  // input label when focused
  '& label.Mui-focused': {
    color: p.error ? 'red' : p.focuscolor,
  },
  // focused color for input with variant='standard'
  '& .MuiInput-underline:after': {
    borderBottomColor: p.focuscolor,
  },
  // focused color for input with variant='filled'
  '& .MuiFilledInput-underline:after': {
    borderBottomColor: p.focuscolor,
  },
  // focused color for input with variant='outlined'
  '& .MuiOutlinedInput-root': {
    '&.Mui-focused fieldset': {
      borderColor: p.error ? 'red' : p.focuscolor,
    },
    '& fieldset': {
      borderColor: p.bordercolor,
    },
    '&:hover fieldset': {
      borderColor: p.error ? 'red' : p.hovercolor,
    },
  },
  '& input': {
    color: p.inputcolor,
    paddingLeft:'8px'
  },

  '& label': {
    paddingTop:'-16px',
    
    color: p.error ? 'red' : p.labelcolor,
    paddingLeft:'8px'
  },
}));
