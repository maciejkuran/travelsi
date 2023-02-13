import classes from './Navbar.module.css';
import PrimaryButton from '../components/UI/Buttons/PrimaryButton';
import { useDispatch, useSelector } from 'react-redux';
import signOutAction from '../store/slices/action-creators/signOut';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const dispatch = useDispatch();
  const { notificationStatus, notificationType, notificationMessage } = useSelector(
    state => state.ui
  );
  const { isAuthenticated } = useSelector(state => state.auth);

  const { email } = useSelector(state => state.auth.userData);

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
        <Link to="/">
          <div className={classes['nav__logo']}>
            <div></div>
            <h4>
              travel<span>si</span>
            </h4>
          </div>
        </Link>
        {isAuthenticated && (
          <div className={classes['nav__wrapper--internal']}>
            <div>
              <span className={classes['nav__hola']}>HOLA 👋</span>
              <span>{email}</span>
            </div>

            <PrimaryButton
              attributes={{ type: 'button', onClick: logoutHandler }}
              className={classes['nav__button']}
            >
              SIGN OUT
            </PrimaryButton>
          </div>
        )}
        {!isAuthenticated && (
          <div className={classes['nav__wrapper--internal']}>
            <Link to="auth">
              <PrimaryButton className={classes['nav__button']} attributes={{ type: 'button' }}>
                SIGN IN
              </PrimaryButton>
            </Link>
          </div>
        )}
      </div>
      {logoutMarkupStatus}
    </nav>
  );
};

export default Navbar;
