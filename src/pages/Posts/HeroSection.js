import classes from './HeroSection.module.css';
import Card from '../../components/UI/Card/Card';
import PrimaryButton from '../../components/UI/Buttons/PrimaryButton';

import { useDispatch } from 'react-redux';
import { uiActions } from '../../store/slices/ui-slice';

const HeroSection = () => {
  const dispatch = useDispatch();

  const showPostFormHandler = () => {
    dispatch(uiActions.setPostFormActive());
  };

  return (
    <section className={classes['hero-section']}>
      <Card className={classes['hero-section__wrapper']}>
        <div>
          <h1 className={classes['hero-section__h1']}>
            Share your <span>experience</span>
          </h1>
          <p>
            Have you been <span>inspired</span> by a particular place? Describe your experience and
            inspire others.
          </p>
        </div>
        <PrimaryButton
          attributes={{ type: 'button', onClick: showPostFormHandler }}
          className={classes['hero-section__button--share']}
        >
          SHARE
        </PrimaryButton>
      </Card>
    </section>
  );
};

export default HeroSection;
