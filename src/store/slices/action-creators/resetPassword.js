import { sendPasswordResetEmail } from 'firebase/auth';
import { firebaseAuth } from '../../../config/firebase';
import { uiActions } from '../ui-slice';

const resetPassword = email => {
  return async dispatch => {
    const reset = async () => {
      dispatch(
        uiActions.setNotification({
          status: 'loading',
          message: '⏳ in progress...',
          type: 'resetpw',
        })
      );

      await sendPasswordResetEmail(firebaseAuth, email);
    };

    try {
      await reset();

      dispatch(
        uiActions.setNotification({
          status: 'success',
          message: '📧 password reset email has been sent onto your email!',
          type: 'resetpw',
        })
      );
    } catch (err) {
      dispatch(
        uiActions.setNotification({
          status: 'error',
          message: `🚩 ${err.code}`,
          type: 'resetpw',
        })
      );
    }
  };
};

export default resetPassword;
