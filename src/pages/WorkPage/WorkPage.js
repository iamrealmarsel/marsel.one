import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { work, getTags, getWorkByTags } from '@store';
import Tags from '@components/Tags';
import WorkList from '@components/WorkList';
import Header from '@components/Header';
import Footer from '@components/Footer';
import cn from '@styles/general.scss';

function WorkPage({ location }) {
  const [currentTags, setTags] = useState([]);
  const tags = getTags(work);
  const workList = getWorkByTags(work, currentTags);

  function handleTagClick(tag) {
    const index = currentTags.indexOf(tag);
    if (index === -1) {
      setTags([...currentTags, tag]);
    } else {
      setTags([...currentTags.slice(0, index), ...currentTags.slice(index + 1)]);
    }
  }

  return (
    <div className={cn.page}>
      <Header pathname={location.pathname} />
      <Tags tags={tags} currentTags={currentTags} onTagClick={handleTagClick} />
      <WorkList workList={workList} />
      <Footer pathname={location.pathname} />
    </div>
  );
}

WorkPage.propTypes = {
  location: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default WorkPage;
