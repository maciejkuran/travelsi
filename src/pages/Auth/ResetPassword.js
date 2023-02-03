import classes from './ResetPassword.module.css';
import Input from '../../components/UI/Form/Input';
import Card from '../../components/UI/Card/Card';
import PrimaryButton from '../../components/UI/Buttons/PrimaryButton';
import CloseButton from '../../components/UI/Buttons/CloseButton';
import Overlay from '../../components/UI/Overlay/Overlay';
import { validateEmail } from '../../utils/helpers';
import { createPortal } from 'react-dom';
import { Fragment, useState } from 'react';
import useInput from '../../hooks/useInput';
import resetPassword from '../../store/slices/action-creators/resetPassword';
import { useDispatch, useSelector } from 'react-redux';
import { uiActions } from '../../store/slices/ui-slice';

const ResetPassword = () => {
  const dispatch = useDispatch();
  const [markupInvalidForm, setMarkupInvalidForm] = useState('');
  const [requestSent, setRequestSent] = useState(false);

  const { notificationStatus, notificationType, notificationMessage } = useSelector(
    state => state.ui
  );

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

    if (!formIsValid) {
      setMarkupInvalidForm('👉 cannot submit your request');
      return;
    }
    setMarkupInvalidForm('');
    dispatch(resetPassword(emailInputValue));
    setRequestSent(true);
  };

  const closeResetHandler = () => {
    dispatch(uiActions.hideResettingPassword());
  };

  //rendering conditionally status notification of 'resetting' markup when form submitted
  let statusNotificationMarkup = '';

  if (notificationType === 'resetpw' && notificationStatus === 'loading')
    statusNotificationMarkup = <span className="notification">{notificationMessage}</span>;

  if (notificationType === 'resetpw' && notificationStatus === 'success')
    statusNotificationMarkup = <span className="notification">{notificationMessage}</span>;

  if (notificationType === 'resetpw' && notificationStatus === 'error')
    statusNotificationMarkup = <span className="notification">{notificationMessage}</span>;

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
            attributes={{ type: 'submit', disabled: requestSent }}
            className={classes['reset-password__button']}
          >
            RESET
          </PrimaryButton>
          {statusNotificationMarkup}
          <span className="notification">{markupInvalidForm}</span>
        </form>
        <CloseButton attributes={{ onClick: closeResetHandler }} />
      </Card>
      <Overlay attributes={{ onClick: closeResetHandler }} />
    </Fragment>
  );

  return createPortal(markup, document.getElementById('modals'));
};

export default ResetPassword;
