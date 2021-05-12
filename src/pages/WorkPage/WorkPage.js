import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { work, getTags, getWorkByTags } from '@store';
import Tags from '@components/Tags';
import WorkList from '@components/WorkList';
import MainLayout from '@layouts/MainLayout';
import cn from './WorkPage.scss';

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
    <MainLayout location={location} container>
      <p className={cn.text}>These are not my designs. Just the code.</p>
      <Tags tags={tags} currentTags={currentTags} onTagClick={handleTagClick} />
      <WorkList workList={workList} />
    </MainLayout>
  );
}

WorkPage.propTypes = {
  location: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default WorkPage;
