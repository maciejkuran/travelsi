export const checkIfNotEmpty = value => value.length !== 0;

export const checkTitleLength = value => value.length <= 45 && value.length !== 0;

export const checkDescriptionLength = value => value.length <= 125 && value.length !== 0;

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
