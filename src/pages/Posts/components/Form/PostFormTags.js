import classes from './PostFormTags.module.css';

import TagButton from '../../../../components/UI/Buttons/TagButton';
import { useState } from 'react';
import { useSelector } from 'react-redux';

const PostFormTags = props => {
  const [activeTag, setActiveTag] = useState('');

  const tags = useSelector(state => state.posts.tags);

  const onClickHandler = e => {
    props.getTagTextContentHandler(e);
    setActiveTag(e.target.id);
  };

  return (
    <div>
      {tags.map(tag => {
        return (
          <TagButton
            key={tag.id}
            className={`${activeTag === tag.id ? classes.active : ''}`}
            attributes={{ onClick: onClickHandler, id: tag.id }}
          >
            {tag.name}
          </TagButton>
        );
      })}
    </div>
  );
};

export default PostFormTags;
