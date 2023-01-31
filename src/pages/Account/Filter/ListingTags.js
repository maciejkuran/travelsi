import TagButton from '../../../components/UI/Buttons/TagButton';

import { useDispatch } from 'react-redux';
import { uiActions } from '../../../store/slices/ui-slice';

const ListingTags = () => {
  const dispatch = useDispatch();

  const openCountriesFilterWindowHandler = () => {
    dispatch(uiActions.setCountriesFilterWindowActive());
  };

  return (
    <div>
      <TagButton>All</TagButton>
      <TagButton attributes={{ onClick: openCountriesFilterWindowHandler }}>country 🗺️</TagButton>
      <TagButton>sighseeing 🏛️</TagButton>
      <TagButton>sport ⚽</TagButton>
      <TagButton>food 🥘</TagButton>
      <TagButton>party 🎉</TagButton>
    </div>
  );
};

export default ListingTags;
