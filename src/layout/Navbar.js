import classes from './Navbar.module.css';
import PrimaryButton from '../components/UI/Buttons/PrimaryButton';
import { useDispatch, useSelector } from 'react-redux';
import signOutAction from '../store/slices/action-creators/signOut';

const Navbar = () => {
  const dispatch = useDispatch();
  const { notificationStatus, notificationType, notificationMessage } = useDispatch(
    state => state.ui
  );

  const logoutHandler = () => {
    dispatch(signOutAction());
  };

  //Render conditionally logout status
  let logoutMarkupStatus = '';

  if (notificationType === 'signout' && notificationStatus === 'loading')
    logoutMarkupStatus = (
      <span className={classes['nav__logout-status']}>{notificationMessage}</span>
    );

  if (notificationType === 'signout' && notificationStatus === 'success')
    logoutMarkupStatus = (
      <span className={classes['nav__logout-status']}>{notificationMessage}</span>
    );

  if (notificationType === 'signout' && notificationStatus === 'error')
    logoutMarkupStatus = (
      <span className={classes['nav__logout-status']}>{notificationMessage}</span>
    );

  return (
    <nav className={classes['nav']}>
      <div className={classes['nav__wrapper']}>
        <div className={classes['nav__logo']}>
          <div></div>
          <h4>
            travel<span>si</span>
          </h4>
        </div>
        <div>
          <span className={classes['nav__hola']}>HOLA 👋</span>
          <PrimaryButton
            attributes={{ type: 'button', onClick: logoutHandler }}
            className={classes['nav__button--logout']}
          >
            SIGN OUT
          </PrimaryButton>
        </div>
      </div>
      {logoutMarkupStatus}
    </nav>
  );
};

export default Navbar;
