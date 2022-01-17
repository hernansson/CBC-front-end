import * as Yup from 'yup';
export const validationSchema = Yup.object().shape({
  employeeID: Yup.number().required().typeError('Employee ID must be a number'),
  employeeName: Yup.string()
    .required('Employee Name is required')
    .min(6, 'Employee Name must be at least 6 characters')
    .max(20, 'Employee Name must not exceed 20 characters'),
  employeeSSN: Yup.number()
    .required()
    .typeError('Employee SSN must be a number'),
  employeeBenefitGroup: Yup.string()
    .required('Employee Benefit Group is required')
    .min(6, 'Employee Benefit Group must be at least 6 characters')
    .max(20, 'Employee Benefit Group must not exceed 20 characters'),
  employeeEmail: Yup.string()
    .required('Email is required')
    .email('Email is invalid'),
  employeePhone: Yup.string().required('Employee Phone is required'),

  accountName: Yup.string()
    .required('Account Name is required')
    .min(6, 'Account Name must be at least 6 characters')
    .max(20, 'Account Name must not exceed 20 characters'),
  // accountStatus: Yup.string()
  //   .required('Account Status is required')
  //.min(6, 'Account Status must be at least 6 characters')
  //.max(20, 'Account Status must not exceed 20 characters'),

  // accountType: Yup.string()
  //   .required('Account Type is required')
  //   .min(6, 'Account Type must be at least 6 characters')
  //   .max(20, 'Account Type must not exceed 20 characters'),
  dataSourceAccountNumber: Yup.number()
    .required()
    .typeError('DataSource Account Number must be a number'),

  //acceptTerms: Yup.bool().oneOf([true], 'Accept Terms is required'),
});
