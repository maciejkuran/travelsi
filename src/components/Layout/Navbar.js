import classes from './Navbar.module.css';
import PrimaryButton from '../UI/PrimaryButton';
import { useDispatch } from 'react-redux';
import { authSliceActions } from '../../store/auth-slice';

const Navbar = () => {
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(authSliceActions.setNotAuthenticated());
  };

  return (
    <nav className={classes['nav']}>
      <div className={classes['nav__wrapper']}>
        <div className={classes['nav__logo']}>
          <div></div>
          <h4>
            travel<span>si</span>
          </h4>
        </div>
        <PrimaryButton
          attributes={{ type: 'button', onClick: logoutHandler }}
          className={classes['nav__button--logout']}
        >
          LOG OUT
        </PrimaryButton>
      </div>
    </nav>
  );
};

export default Navbar;
