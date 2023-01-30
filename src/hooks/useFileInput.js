import { useState } from 'react';

//*validationFunction always returns boolean value;
const useFileInput = validationFunction => {
  const [fileInputValue, setFileInputValue] = useState('');
  const [inputIsTouched, setInputIsTouched] = useState(false);

  const fileInputIsValid = validationFunction(fileInputValue) && inputIsTouched;

  const fileInputHasError = !fileInputIsValid && inputIsTouched;

  const getInputFileHandler = e => {
    setInputIsTouched(true);
    const reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);

    reader.addEventListener('load', () => {
      setFileInputValue(reader.result);
    });
  };

  const isTouchedOnClickHandler = () => {
    setInputIsTouched(true);
  };

  return {
    getInputFileHandler,
    isTouchedOnClickHandler,
    fileInputValue,
    fileInputIsValid,
    fileInputHasError,
  };
};

export default useFileInput;
