export const checkIfNotEmpty = value => value.length !== 0;

export const checkTitleLength = value =>
  value.length <= 45 && value.length !== 0 && value.length >= 10;

export const checkDescriptionLength = value =>
  value.length <= 125 && value.length !== 0 && value.length >= 45;

export const validateEmail = value =>
  value.length >= 5 && value.includes('.') && value.includes('@');

export const validatePassword = value => value.length >= 8;

export const validatePasswordMatch = (value, prevValue) => prevValue === value;

export const readDate = () => {
  const date = new Date();

  const options = {
    hour: 'numeric',
    minute: 'numeric',
    day: 'numeric',
    month: 'numeric',
    year: 'numeric',
  };

  return new Intl.DateTimeFormat('en-US', options).format(date);
};

export const capitalizeInput = value => {
  const string = value
    .toLowerCase()
    .split(' ')
    .map(word => word[0].toUpperCase() + word.slice(1))
    .join(' ');

  return string;
};

export const removeEmojiFromString = string => {
  const str = string.trim();
  const spaceIndex = str.indexOf(' ');
  const output = str.slice(0, spaceIndex).trim();

  return output;
};
