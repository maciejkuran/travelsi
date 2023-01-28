import classes from './EmojiButton.module.css';

const EmojiButton = props => {
  return (
    <button {...props.attributes} className={`${classes['emoji-button']} ${props.className}`}>
      {props.children}
    </button>
  );
};

export default EmojiButton;
