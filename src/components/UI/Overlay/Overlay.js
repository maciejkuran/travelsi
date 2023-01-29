import classes from './Overlay.module.css';

const Overlay = props => {
  return <div {...props.attributes} className={classes.overlay}></div>;
};

export default Overlay;
