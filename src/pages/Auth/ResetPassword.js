import classes from './ResetPassword.module.css';
import Input from '../../components/UI/Form/Input';
import Card from '../../components/UI/Card/Card';
import PrimaryButton from '../../components/UI/Buttons/PrimaryButton';
import CloseButton from '../../components/UI/Buttons/CloseButton';
import Overlay from '../../components/UI/Overlay/Overlay';
import { validateEmail } from '../../utils/helpers';
import { createPortal } from 'react-dom';
import { Fragment } from 'react';
import useInput from '../../hooks/useInput';

const ResetPassword = () => {
  const {
    getInputHandler: getEmailInputHandler,
    onBlurInputHandler: onBlurEmailInputHandler,
    inputValue: emailInputValue,
    inputIsValid: emailInputIsValid,
    hasError: emailHasError,
  } = useInput(validateEmail);

  let formIsValid = emailInputIsValid;

  const resetPasswordHandler = e => {
    e.preventDefault();
  };

  const markup = (
    <Fragment>
      <Card className={classes['reset-password']}>
        <h5>Reset Password</h5>
        <form onSubmit={resetPasswordHandler}>
          <div>
            <Input
              className={classes['reset-password__input']}
              attributes={{
                type: 'email',
                placeholder: 'Email address',
                onChange: getEmailInputHandler,
                onBlur: onBlurEmailInputHandler,
              }}
            ></Input>
            {emailHasError && (
              <span className="notification">👉 Provide correct email address</span>
            )}
          </div>

          <PrimaryButton
            attributes={{ type: 'submit' }}
            className={classes['reset-password__button']}
          >
            RESET
          </PrimaryButton>
        </form>
        <CloseButton />
      </Card>
      <Overlay />
    </Fragment>
  );

  return createPortal(markup, document.getElementById('modals'));
};

export default ResetPassword;
