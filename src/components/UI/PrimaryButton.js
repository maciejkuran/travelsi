import classes from './PrimaryButton.module.css';

const PrimaryButton = props => {
  return (
    <button className={`${classes['button']} ${props.className}`} {...props.attributes}>
      {props.children}
    </button>
  );
};

export default PrimaryButton;
