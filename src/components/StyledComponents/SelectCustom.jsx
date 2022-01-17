import { Select } from '@material-ui/core';
import styled from '@emotion/styled';

export const SelectCustom = styled(Select, {
  shouldForwardProp: (props) =>
    props !== 'focusColor' ||
    props !== 'labelColor' ||
    props !== 'borderColor' ||
    props !== 'hoverColor' ||
    props !== 'inputColor',
})((p) => ({
  // input label when focused
  '&.MuiOutlinedInput-root': {
    '&.Mui-focused fieldset': {
      borderColor: p.error ? 'red' : p.focusColor,
    },
  },
  '& .MuiOutlinedInput-notchedOutline': {
    borderColor: p.error ? 'red' : p.focusColor,
  },
  '& label.Mui-focused': {
    color: p.error ? 'red' : p.focusColor,
  },
  '& input': {
    color: p.inputColor,
  },
}));
