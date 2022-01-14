import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { createTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import SearchIcon from '@mui/icons-material/Search';
import { TextFieldFocus } from '../../StyledComponents/TextFieldFocusColor';
import {
  Paper,
  Box,
  Grid,
  TextField,
  Typography,
  FormControlLabel,
  Checkbox,
  Button,
} from '@material-ui/core';

const validationSchema = Yup.object().shape({
  accountName: Yup.string()
    .required('Account Name is required')
    .min(6, 'Account Name must be at least 6 characters')
    .max(20, 'Account Name must not exceed 20 characters'),
  accountStatus: Yup.string()
    .required('Account Status is required')
    .min(6, 'Account Status must be at least 6 characters')
    .max(20, 'Account Status must not exceed 20 characters'),
  employeeID: Yup.number().required().typeError('Employee ID must be a number'),
  employeeName: Yup.string()
    .required('Employee Name is required')
    .min(6, 'Employee Name must be at least 6 characters')
    .max(20, 'Employee Name must not exceed 20 characters'),
  employeeSSN: Yup.number()
    .required()
    .typeError('Employee SSN must be a number'),
  accountType: Yup.string()
    .required('Account Type is required')
    .min(6, 'Account Type must be at least 6 characters')
    .max(20, 'Account Type must not exceed 20 characters'),
  dataSourceAccountNumber: Yup.number()
    .required()
    .typeError('DataSource Account Number must be a number'),
  employeeBenefitGroup: Yup.string()
    .required('Employee Benefit Group is required')
    .min(6, 'Employee Benefit Group must be at least 6 characters')
    .max(20, 'Employee Benefit Group must not exceed 20 characters'),
  employeeEmail: Yup.string()
    .required('Email is required')
    .email('Email is invalid'),
  password: Yup.string()
    .required('Password is required')
    .min(6, 'Password must be at least 6 characters')
    .max(40, 'Password must not exceed 40 characters'),
  employeePhone: Yup.string().required('Employee Phone is required'),

  acceptTerms: Yup.bool().oneOf([true], 'Accept Terms is required'),
});

const accountInputs = [
  { id: 1, fieldName: 'accountName', label: 'Account Name', required: true },
  { id: 2, fieldName: 'accountType', label: 'AccountType', required: true },
  {
    id: 3,
    fieldName: 'accountStatus',
    label: 'Account Status',
    required: true,
  },
  {
    id: 4,
    fieldName: 'dataSourceAccountNumber',
    label: 'Datasource Account Number',
    required: true,
  },
];
const employeeInputs = [
  { id: 1, fieldName: 'employeeID', label: 'Employee ID', required: true },
  { id: 2, fieldName: 'employeeName', label: 'Employee Name', required: true },
  { id: 3, fieldName: 'employeeSSN', label: 'Employee SSN', required: true },

  {
    id: 4,
    fieldName: 'employeeBenefitGroup',
    label: 'Employee Benefit Group (class)',
    required: true,
  },
  {
    id: 5,
    fieldName: 'employeeEmail',
    label: 'Employee Email',
    required: true,
  },
  {
    id: 10,
    fieldName: 'employeePhone',
    label: 'Employee Phone',
    required: true,
  },
];
const booleanInputs = [
  {
    id: 1,
    fieldName: 'onlySearchWithinTheAccountAbove',
    label: 'Only Search within the account above',
  },
  {
    id: 2,
    fieldName: 'searchWithinCurrectActiveAccount',
    label: 'Search within current Active Account',
  },
  { id: 3, fieldName: 'testUsers', label: 'Test Users' },
  {
    id: 4,
    fieldName: 'employeesWithNoBenefitGroup',
    label: 'Employees with No Benefit Group',
  },
  { id: 5, fieldName: 'activeEmployees', label: 'Active Employees' },
  { id: 6, fieldName: 'inactiveEmployees', label: 'Inactive Employees' },
  { id: 7, fieldName: 'terminatedEmployees', label: 'Terminated Employees' },
  {
    id: 8,
    fieldName: 'showTerminatedAccounts',
    label: 'Show Terminated Accounts',
  },
  { id: 9, fieldName: 'accountsWithoutPlans', label: 'Accounts Without Plans' },
  {
    id: 10,
    fieldName: 'displayDuplicateRecords',
    label: 'Display Duplicate Records',
  },
];
const theme = createTheme({
  palette: {
    type: 'dark',
  },
});
export default function SearchForm() {
  const {
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
                  <Grid item xs={12} sm={6}>
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
                {employeeInputs.map((input, idx) => (
                  <Grid item xs={12} sm={6}>
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
                  <Grid item xs={12} sm={6}>
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

              <Grid item xs={12}>
                <br />
                <Typography variant='inherit' color='textSecondary'>
                  {errors.acceptTerms
                    ? '(' + errors.acceptTerms.message + ')'
                    : ''}
                </Typography>
              </Grid>
            </Grid>

            <Box mt={3}>
              <Button
                variant='contained'
                color='primary'
                onClick={handleSubmit(onSubmit)}
              >
                Register
              </Button>
            </Box>
          </Box>
        </Paper>
      </ThemeProvider>
    </div>
  );
}
