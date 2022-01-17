export const accountInputs = [
  { id: 1, fieldName: 'accountName', label: 'Account Name', required: true },
  {
    id: 2,
    fieldName: 'dataSourceAccountNumber',
    label: 'Datasource Account Number',
    required: true,
  },
  {
    id: 3,
    fieldName: 'accountType',
    label: 'Account Type',
    required: true,
    options: [
      { label: 'All', value: 'all' },
      { label: 'Small Groups', value: 'smallgroup' },
      { label: 'Large Groups', value: 'largeGroup' },
      { label: 'Individuals', value: 'individuals' },
    ],
  },
  {
    id: 4,
    fieldName: 'accountStatus',
    label: 'Account Status',
    required: true,
    options: [
      { label: 'All', value: 'all' },
      { label: 'Active', value: 'active' },
      { label: 'Terminated', value: 'terminated' },
    ],
  },
];
export const employeeInputs = [
  {
    id: 1,
    fieldName: 'employeeID',
    label: 'Employee ID',
    required: true,
  },
  {
    id: 2,
    fieldName: 'employeeName',
    label: 'Employee Name',
    required: true,
  },
  {
    id: 3,
    fieldName: 'employeeSSN',
    label: 'Employee SSN',
    required: true,
  },

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
export const booleanInputs = [
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
