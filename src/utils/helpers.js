export const checkIfNotEmpty = value => value.length !== 0;

export const checkTitleLength = value =>
  value.length <= 45 && value.length !== 0 && value.length >= 10;

export const checkDescriptionLength = value =>
  value.length <= 125 && value.length !== 0 && value.length >= 45;

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
