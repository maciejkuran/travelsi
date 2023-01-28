import classes from './TagButton.module.css';

const TagButton = props => {
  return (
    <button className={`${classes['tag-button']} ${props.className}`}>{props.children}</button>
  );
};

export default TagButton;
