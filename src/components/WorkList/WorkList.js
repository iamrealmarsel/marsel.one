import React from 'react';
import PropTypes from 'prop-types';
import WorkItem from '@components/WorkItem';
import cn from './WorkList.scss';

function WorkList({ workList }) {
  return (
    <div className={cn.container}>
      <div className={cn.workList}>
        {workList.map((workItem) => (
          <WorkItem
            url={workItem.url}
            key={workItem.url}
            srcPreview={workItem.srcPreview}
            urlGithub={workItem.urlGithub}
            tags={workItem.tags}
          />
        ))}
      </div>
    </div>
  );
}

WorkList.propTypes = {
  workList: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default WorkList;
