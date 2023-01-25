import classes from './Navbar.module.css';
import PrimaryButton from '../UI/PrimaryButton';
import Card from '../UI/Card';

const Navbar = () => {
  return (
    <nav className={classes['nav']}>
      <div className={classes['nav__wrapper']}>
        <div className={classes['nav__logo']}>
          <div></div>
          <h4>
            travel<span>si</span>
          </h4>
        </div>
        <PrimaryButton className={classes['nav__button--logout']}>LOG OUT</PrimaryButton>
      </div>
    </nav>
  );
};

export default Navbar;
