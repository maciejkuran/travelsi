import { useState } from 'react';

//*validation function will always return true or false;
const useInput = (validationFunction, additionalInput = null) => {
  const [inputValue, setInputValue] = useState('');
  const [isTouched, setIsTouched] = useState(false);

  const inputIsValid = validationFunction(inputValue, additionalInput) && isTouched;

  const hasError = !inputIsValid && isTouched;

  const getInputHandler = e => {
    const input = e.target.value.trim();
    setInputValue(input);
  };

  const onBlurInputHandler = () => {
    setIsTouched(true);
  };

  return {
    getInputHandler,
    onBlurInputHandler,
    inputValue,
    isTouched,
    inputIsValid,
    hasError,
  };
};

export default useInput;
