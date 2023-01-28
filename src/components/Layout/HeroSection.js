import classes from './HeroSection.module.css';
import Card from '../UI/Card/Card';
import PrimaryButton from '../UI/Buttons/PrimaryButton';

const HeroSection = () => {
  return (
    <section className={classes['hero-section']}>
      <Card className={classes['hero-section__wrapper']}>
        <div>
          <h1>
            Share your <span>experience</span>
          </h1>
          <p>
            Have you been <span>inspired</span> by a particular place? Describe your experience and
            inspire others.
          </p>
        </div>
        <PrimaryButton className={classes['hero-section__button--share']}>SHARE</PrimaryButton>
      </Card>
    </section>
  );
};

export default HeroSection;
