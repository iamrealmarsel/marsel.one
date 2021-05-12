import React from 'react';
import PropTypes from 'prop-types';
import cn from './Tags.scss';

function Tags({ tags, currentTags, onTagClick }) {
  return (
    // <div className={cn.container}>
    <div className={cn.tags}>
      {tags.map((tag) => (
        <button
          className={`${cn.tag} ${currentTags.includes(tag) ? cn.active : ''} `}
          type='button'
          onClick={() => onTagClick(tag)}
          key={tag}
        >
          {tag}
        </button>
      ))}
    </div>
    // </div>
  );
}

Tags.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  currentTags: PropTypes.arrayOf(PropTypes.string).isRequired,
  onTagClick: PropTypes.func.isRequired,
};

export default Tags;
