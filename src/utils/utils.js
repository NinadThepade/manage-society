/* eslint-disable no-unused-vars */
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

const APT_TYPES = ['studio', 'regular', 'loft', 'pentHouse', 'duplex', 'flex'];
const FURNISHING_TYPE = ['full', 'semi', 'unfurnished'];
const AGE_RANGE = [
  { id: 0, label: 'Less than a year' },
  { id: 1, label: '1 - 3 years' },
  { id: 2, label: '3 - 5 years' },
  { id: 3, label: '5 - 10 years' },
  { id: 4, label: 'More than 10 years' },
];
const DIRECTIONS = [
  { id: 'n', label: 'North' },
  { id: 's', label: 'South' },
  { id: 'e', label: 'East' },
  { id: 'w', label: 'West' },
  { id: 'ne', label: 'Northeast' },
  { id: 'nw', label: 'Northwest' },
  { id: 'se', label: 'Southeast' },
  { id: 'sw', label: 'Southwest' },
];
const AMENITIES_LIST = [
  { id: 'clubHouse', label: 'Clubhouse', description: 'A central gathering place for social events, meetings, and activities.' },
  { id: 'swimmingPool', label: 'Swimming Pool', description: 'A pool for recreational swimming, often accompanied by lounging areas.' },
  { id: 'fitnessCenter', label: 'Fitness Center', description: 'A gym equipped with exercise machines, weights, and fitness classes.' },
  { id: 'sportsCourts', label: 'Tennis and Sports Courts', description: 'Facilities for tennis, basketball, volleyball, and other sports.' },
  { id: 'playArea', label: 'Play Area', description: 'Outdoor play areas for children.' },
  { id: 'walkingTrails', label: 'Walking and Jogging Trails', description: 'Scenic paths for walking, running, or biking.' },
  { id: 'lawn', label: 'Landscaped Gardens and Parks', description: 'Green spaces and gardens for relaxation and outdoor activities.' },
  { id: 'petFriendly', label: 'Pet-Friendly', description: 'Pet parks, grooming areas, and pet-friendly policies.' },
  { id: 'outdoorCooking', label: 'BBQ Area', description: 'Spaces for cooking and outdoor grilling.' },
  { id: 'library', label: 'Library and Reading Rooms', description: 'Quiet areas for reading and studying.' },
  { id: 'businessCenter', label: 'Business Center', description: 'Facilities for remote work, meetings, or study.' },
  { id: 'gameRoom', label: 'Game Rooms', description: 'Common areas for games like billiards, table tennis, and board games.' },
  { id: 'partyHall', label: 'Party Hall and Event Spaces', description: 'Areas for hosting private events and parties.' },
  { id: 'guestAccommodation', label: 'Guest Accommodations', description: 'Furnished guest suites for visiting friends and family.' },
  { id: 'spa', label: 'Spa and Wellness Center', description: 'Facilities for massages, spa treatments, and wellness services.' },
  { id: 'gated', label: 'Gated or Controlled Access', description: 'Enhanced security features like gated entry or controlled access.' },
  { id: 'security', label: 'Security and Surveillance', description: 'Security personnel, surveillance cameras, and monitoring.' },
  { id: 'visitorParking', label: 'Visitor Parking', description: 'Secure parking spots for visitors' },
  { id: 'elevator', label: 'Elevator', description: 'Apartments equipped with Elevator' },
  { id: 'shoppingComplex', label: 'Shopping Complex', description: 'On-site shops for groceries and essentials.' },
  { id: 'intercom', label: 'Intercom Service', description: 'Apartments equipped with intercom' },
];

const TENANT_PREFERENCES = [
  { id: 'smoking', label: 'Smoking Friendly', description: '' },
  { id: 'drinking', label: 'Drinking Friendly', description: '' },
  { id: 'pet', label: 'Pet Friendly', description: '' },
  { id: 'nonVeg', label: 'Non Veg Allowed', description: '' },
];

export const HOME_MENU = [
  { id: 'collection', name: 'Report Collection' },
  { id: 'expense', name: 'Report Expense' },
  { id: 'settings', name: 'Society Settings' },
  { id: 'user', name: 'App Settings' },
];

export const SOCIETY_MENU = [
  { id: 'SocietyBasic', name: 'Basic' },
  { id: 'AptDetails', name: 'Apt List' },
  { id: 'ProfessionalsDetails', name: 'Professionals' },
  { id: 'SocietySettings', name: 'Settings' },
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

export const getInputLabels = function (payload) {
  return LABELS[payload];
};

export const SOCIETY_BASICS = {
  name: 'Star Residency',
  address: {
    street: '1, Main Street',
    landmark: 'Near Gold Gym',
    city: 'Mumbai',
    state: 'Maharashtra',
    postalCode: '400057',
    country: 'India',
  },
  governingBody: {
    secretary: 'John Doe',
    accounts: 'Jane Doe',
  },
  misc: {
    aptCount: 8,
    age: 2,
    amenities: [],
  },
};

export const APT_LIST = [
  {
    id: 101,
    aptDetails: {
      type: 'regular',
      furnishingType: 'full',
      noOfBedrooms: 3,
      noOfBathrooms: 2,
      floor: 1,
      balcony: true,
      noOfBalconies: 2,
      builtUpArea: 1300,
      facing: 'w',
    },
    owner: {
      firstName: 'John',
      lastName: 'Doe',
      contact: '9999999999',
    },
    parking: {
      twoWheeler: true,
      noOfTwoWheeler: 2,
      fourWheeler: true,
      noOfFourWheeler: 1,
      parkingRent: 0,
    },
    vacant: false,
    tenant: false,
    tenantDetails: {
      firstName: '',
      lastName: '',
      contact: '',
      rent: 0,
      deposit: 0,
      maintenanceIncluded: false,
      preference: [],
    },
  },
];
