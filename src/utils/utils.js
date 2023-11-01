/* eslint-disable no-unused-vars */
export const HOME_MENU = [
  { id: 'reportCollection', name: 'Report Collection' },
  { id: 'reportExpense', name: 'Report Expense' },
  { id: 'societySettings', name: 'Society Settings' },
  { id: 'appSettings', name: 'App Settings' },
];

export const SOCIETY_MENU = [
  { id: 'basicSocietyDetails', name: 'Society Details' },
  { id: 'addEditAptDetails', name: 'Apts Details' },
  { id: 'addEditProfessionalsDetails', name: 'Professionals Details' },
  { id: 'addEditSocietySettings', name: 'Settings' },
];

export const COLLECTION_OPTIONS = [
  { id: 'cManintainece', label: 'Maintenance', type: 'specific' },
  { id: 'cContribution', label: 'Contributions', type: 'general' },
  { id: 'cOther', label: 'Other', type: 'general' },
];

export const EXPENSE_OPTIONS = [
  { id: 'eWatchmanSalary', label: 'Watchman Salary', type: 'specific' },
  { id: 'eElectricityBill', label: 'Electricity Bill', type: 'specific' },
  { id: 'eWaterBill', label: 'Water Bill', type: 'specific' },
  { id: 'eElevatorMaintenance', label: 'Elevator Maintenance', type: 'specific' },
  { id: 'eWaterTankCleaning', label: 'Water Tank Cleaning', type: 'specific' },
  { id: 'eRepairs', label: 'Maintenance / Repairs', type: 'general' },
  { id: 'eOther', label: 'Other', type: 'general' },
];

const LABELS = {
  amount: {
    key: 'amount',
    label: 'Amount',
    type: 'number',
    placeHolderText: 'Please enter amount here',
  },
  specifyDetails: {
    key: 'details',
    label: 'Details',
    type: 'text',
    placeHolderText: 'Please specify details',
  },
  apt: {
    key: 'apt',
    label: 'Apt No',
  },
};

export const getInputLabels = function (payload) {
  return LABELS[payload];
};
