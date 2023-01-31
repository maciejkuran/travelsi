import TagButton from '../../../components/UI/Buttons/TagButton';
import classes from './ListingTags.module.css';

import { useDispatch, useSelector } from 'react-redux';
import { uiActions } from '../../../store/slices/ui-slice';
import { removeEmojiFromString } from '../../../utils/helpers';
import { postsActions } from '../../../store/slices/posts-slice';
import { useState } from 'react';

const ListingTags = () => {
  const [activeTag, setActiveTag] = useState('6');
  const dispatch = useDispatch();
  const tags = useSelector(state => state.posts.tags);

  const openCountriesFilterWindowHandler = e => {
    dispatch(uiActions.setCountriesFilterWindowActive());
    setActiveTag(e.target.id);
  };

  const renderPostsByTagHandler = e => {
    const tagContent = removeEmojiFromString(e.target.textContent);
    console.log(e.target);
    setActiveTag(e.target.id);
    dispatch(postsActions.filterPostsByTag({ tag: tagContent }));
  };

  const renderAllPostsHandler = e => {
    setActiveTag(e.target.id);
    dispatch(postsActions.renderAllPosts());
  };

  return (
    <div>
      <TagButton
        className={`${activeTag === '6' ? classes.active : ''}`}
        attributes={{ onClick: renderAllPostsHandler, id: '6' }}
      >
        All
      </TagButton>
      <TagButton
        className={`${activeTag === '5' ? classes.active : ''}`}
        attributes={{ onClick: openCountriesFilterWindowHandler, id: '5' }}
      >
        country 🗺️
      </TagButton>

      {tags.map(tag => (
        <TagButton
          className={`${activeTag === tag.id ? classes.active : ''}`}
          key={tag.id}
          attributes={{ onClick: renderPostsByTagHandler, id: tag.id }}
        >
          {tag.name}
        </TagButton>
      ))}
    </div>
  );
};

export default ListingTags;
