import classes from './Navbar.module.css';
import PrimaryButton from '../components/UI/Buttons/PrimaryButton';
import { useDispatch } from 'react-redux';
import { authSliceActions } from '../store/slices/auth-slice';

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
        <div>
          <span className={classes['nav__hola']}>HOLA 👋</span>
          <PrimaryButton
            attributes={{ type: 'button', onClick: logoutHandler }}
            className={classes['nav__button--logout']}
          >
            LOG OUT
          </PrimaryButton>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
