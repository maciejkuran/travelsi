import { authSliceActions } from '../auth-slice';
import { signOut } from 'firebase/auth';
import { firebaseAuth } from '../../../config/firebase';
import { uiActions } from '../ui-slice';

const signOutAction = () => {
  return async dispatch => {
    const signOutUser = async () => {
      dispatch(
        uiActions.setNotification({
          status: 'loading',
          message: '🦢 signing out...',
          type: 'signout',
        })
      );

      await signOut(firebaseAuth);
      dispatch(authSliceActions.isNotAuthenticated());
    };

    try {
      await signOutUser();

      dispatch(
        uiActions.setNotification({
          status: 'success',
          message: '🐼 signed out!',
          type: 'signout',
        })
      );
    } catch (err) {
      dispatch(
        uiActions.setNotification({
          status: 'error',
          message: `🚩 ${err.message}. Try again!`,
          type: 'signout',
        })
      );
    }
  };
};

export default signOutAction;
