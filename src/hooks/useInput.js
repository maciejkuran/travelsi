import { useState } from 'react';

//*validation function will always return true or false;
const useInput = validationFunction => {
  const [inputValue, setInputValue] = useState('');
  const [isTouched, setIsTouched] = useState(false);

  const inputIsValid = validationFunction(inputValue) && isTouched;

  const hasError = !inputIsValid && isTouched;

  const getInputHandler = e => {
    const input = e.target.value.trim();
    setInputValue(input);
    setIsTouched(true);
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
