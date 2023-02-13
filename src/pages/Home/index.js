import classes from './index.module.css';
import Navbar from '../../layout/Navbar';
import Card from '../../components/UI/Card/Card';
import PrimaryButton from '../../components/UI/Buttons/PrimaryButton';
import homeImg from '../../assets/img/home-1.jpg';
import homeImg2 from '../../assets/img/home-2.jpg';
import clipImg from '../../assets/img/paper-clip.png';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Home = () => {
  const { isAuthenticated } = useSelector(state => state.auth);

  return (
    <>
      <Navbar />
      <main className={classes['home']}>
        <header className={classes['home__header']}>
          <div className={classes['home__header__texts']}>
            <h1>
              Your inspiration<br></br> starts here <span></span>
            </h1>
            <p>
              Have you been inspired by a particular place ? Describe your experience and inspire
              others.
            </p>
            {!isAuthenticated && (
              <Link to="auth">
                <PrimaryButton>GET STARTED</PrimaryButton>
              </Link>
            )}
            {isAuthenticated && (
              <Link to="posts">
                <PrimaryButton>INSPIRE NOW</PrimaryButton>
              </Link>
            )}
          </div>

          <div className={classes['home__header__imgs']}>
            <Card
              className={`${classes['home__header__imgs__card']} ${classes['home__header__imgs__card--horizontal']}`}
            >
              <img
                className={classes['home__header__imgs__card__img']}
                src={homeImg2}
                alt="travelsi home"
              ></img>
              <img className={classes['home__header_imgs__card__clip-img']} src={clipImg}></img>
            </Card>
            <Card
              className={`${classes['home__header__imgs__card']} ${classes['home__header__imgs__card--vertical']}`}
            >
              <img
                className={classes['home__header__imgs__card__img']}
                src={homeImg}
                alt="travelsi home"
              ></img>
              <img className={classes['home__header_imgs__card__clip-img']} src={clipImg}></img>
            </Card>
          </div>
        </header>
      </main>
    </>
  );
};

export default Home;
