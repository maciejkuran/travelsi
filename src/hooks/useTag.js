import { useState } from 'react';

const useTag = () => {
  const [tagTextContent, setTagTextContent] = useState('');
  const [tagClicked, setTagClicked] = useState(false);

  const getTagTextContentHandler = e => {
    e.preventDefault();
    const tagContent = e.target.textContent.trim();

    //each tag contains emoji, I want to remove it
    const spaceIndex = tagContent.indexOf(' ');
    const convertedTagContent = tagContent.slice(0, spaceIndex).trim();

    setTagTextContent(convertedTagContent);
    setTagClicked(true);
  };

  return {
    getTagTextContentHandler,
    tagTextContent,
    tagClicked,
  };
};

export default useTag;
