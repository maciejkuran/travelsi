import classes from './Welcome.module.css';
import Card from '../../UI/Card';

const Welcome = () => {
  return (
    <Card className={classes['welcome']}>
      <h2>Hello there 👋</h2>
      <p>Have a great day!</p>
    </Card>
  );
};

export default Welcome;
