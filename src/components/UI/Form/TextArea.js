import classes from './TextArea.module.css';

const TextArea = props => {
  return (
    <textarea
      className={`${classes['textarea']} ${props.className}`}
      {...props.attributes}
    ></textarea>
  );
};

export default TextArea;
