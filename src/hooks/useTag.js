import { useState } from 'react';
import { removeEmojiFromString } from '../utils/helpers';

const useTag = () => {
  const [tagTextContent, setTagTextContent] = useState('');
  const [tagClicked, setTagClicked] = useState(false);

  const getTagTextContentHandler = e => {
    e.preventDefault();

    const tagContent = removeEmojiFromString(e.target.textContent);

    setTagTextContent(tagContent);
    setTagClicked(true);
  };

  return {
    getTagTextContentHandler,
    tagTextContent,
    tagClicked,
  };
};

export default useTag;
