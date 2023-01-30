import TagButton from '../../../components/UI/Buttons/TagButton';

const PostFormTags = props => {
  return (
    <div>
      <TagButton attributes={{ onClick: props.getTagTextContentHandler }}>sighseeing 🏛️</TagButton>
      <TagButton attributes={{ onClick: props.getTagTextContentHandler }}>sport ⚽</TagButton>
      <TagButton attributes={{ onClick: props.getTagTextContentHandler }}>food 🥘</TagButton>
      <TagButton attributes={{ onClick: props.getTagTextContentHandler }}>party 🎉</TagButton>
    </div>
  );
};

export default PostFormTags;
