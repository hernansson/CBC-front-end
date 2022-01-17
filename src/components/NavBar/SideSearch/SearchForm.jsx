import { useForm, Controller } from 'react-hook-form';
import { useState } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { createTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import SearchIcon from '@mui/icons-material/Search';
import { TextFieldFocus } from '../../StyledComponents/TextFieldFocusColor';
import { validationSchema } from './validationSchemas';
import { accountInputs, booleanInputs, employeeInputs } from './inputsQuery';
import {
  Paper,
  Box,
  Grid,
  Typography,
  FormControlLabel,
  Checkbox,
  Button,
  FormControl,
  MenuItem,
  InputLabel,
} from '@material-ui/core';
import { SelectCustom } from '../../StyledComponents/SelectCustom';

const theme = createTheme({
  palette: {
    type: 'dark',
  },
});
export default function SearchForm({ handleClose }) {
  const [selected, setSelected] = useState({
    accountType: 'all',
    accountStatus: 'all',
  });

  const handleChange = (event) => {
    const { value, name } = event.target;
    setSelected({ ...selected, [name]: value });
    setValue(name, value);
  };
  const {
    setValue,
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });
  const onSubmit = (data) => {
    console.log(JSON.stringify(data, null, 2));
  };

  return (
    <div>
      <ThemeProvider theme={theme}>
        <Paper style={{ backgroundColor: 'rgba(0,0,0,.80)' }}>
          <Box px={3} py={2}>
            <Typography
              variant='h6'
              align='left'
              margin='dense'
              style={{ paddingBottom: '20px' }}
            >
              Global Search <SearchIcon />
            </Typography>

            <Grid container spacing={1}>
              <Grid
                item
                xs={12}
                sm={12}
                container
                direction='row'
                alignContent='center'
                alignItems='center'
                wrap='wrap'
                spacing={1}
              >
                {accountInputs.map((input, idx) => (
                  <Grid item xs={12} sm={6} style={{ textAlign: 'left' }}>
                    {input.options ? (
                      <Box style={{ paddingTop: '4px' }}>
                        <FormControl
                          name={input.fieldName}
                          fullWidth
                          {...register(input.fieldName)}
                        >
                          <InputLabel variant='outlined'>
                            {input.label}
                          </InputLabel>
                          <SelectCustom
                            inputColor='white'
                            hoverColor='white'
                            borderColor='white'
                            labelColor='white'
                            focusColor='white'
                            name={input.fieldName}
                            value={selected[input.fieldName]}
                            label={input.label}
                            onChange={handleChange}
                            variant='outlined'
                          >
                            {input.options.map((option, idx) => (
                              <MenuItem value={option.value}>
                                {option.label}
                              </MenuItem>
                            ))}
                          </SelectCustom>
                        </FormControl>
                      </Box>
                    ) : (
                      <>
                        <TextFieldFocus
                          inputColor='white'
                          hoverColor='white'
                          borderColor='white'
                          labelColor='white'
                          focusColor='white'
                          id={input.fieldName}
                          name={input.fieldName}
                          label={input.label}
                          required={input.required}
                          fullWidth
                          margin='dense'
                          autoComplete='off'
                          {...register(input.fieldName)}
                          error={errors[input.fieldName] ? true : false}
                        />
                        <Typography
                          variant='inherit'
                          color='error'
                          style={{ textAlign: 'left' }}
                        >
                          {errors[input.fieldName]?.message}
                        </Typography>
                      </>
                    )}
                  </Grid>
                ))}
                {employeeInputs.map((input, idx) => (
                  <Grid item xs={12} sm={6} style={{ textAlign: 'left' }}>
                    <TextFieldFocus
                      inputColor='white'
                      hoverColor='white'
                      borderColor='white'
                      labelColor='white'
                      focusColor='white'
                      id={input.fieldName}
                      name={input.fieldName}
                      label={input.label}
                      required={input.required}
                      fullWidth
                      margin='dense'
                      autoComplete='off'
                      {...register(input.fieldName)}
                      error={errors[input.fieldName] ? true : false}
                    />
                    <Typography
                      variant='inherit'
                      color='error'
                      style={{ textAlign: 'left' }}
                    >
                      {errors[input.fieldName]?.message}
                    </Typography>
                  </Grid>
                ))}

                {booleanInputs.map((input) => (
                  <Grid
                    item
                    xs={12}
                    sm={6}
                    style={{ textAlign: 'left', padding: '0px' }}
                  >
                    <FormControlLabel
                      control={
                        <Controller
                          control={control}
                          name={input.fieldName}
                          defaultValue='false'
                          inputRef={register()}
                          render={({ field: { onChange } }) => (
                            <Checkbox
                              color='primary'
                              iconStyle={{ fill: 'white' }}
                              labelStyle={{ color: 'white' }}
                              onChange={(e) => onChange(e.target.checked)}
                            />
                          )}
                        />
                      }
                      label={
                        <Typography
                          color={errors.acceptTerms ? 'error' : 'inherit'}
                        >
                          {input.label}
                        </Typography>
                      }
                    />
                  </Grid>
                ))}
              </Grid>
            </Grid>

            <Box
              mt={3}
              style={{ display: 'flex', justifyContent: 'space-around' }}
            >
              <Button
                variant='contained'
                color='primary'
                onClick={handleSubmit(onSubmit)}
              >
                Register
              </Button>
              <Button
                variant='contained'
                color='secondary'
                onClick={handleClose}
              >
                Close
              </Button>
            </Box>
          </Box>
        </Paper>
      </ThemeProvider>
    </div>
  );
}
