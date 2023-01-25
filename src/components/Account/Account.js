import classes from './Account.module.css';
import Welcome from './Welcome/Welcome';

const Account = () => {
  return (
    <section className={classes['account']}>
      <div className={classes['account__wrapper']}>
        <Welcome />
      </div>
    </section>
  );
};

export default Account;
