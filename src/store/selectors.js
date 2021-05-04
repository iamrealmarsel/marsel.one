export const getValues = (workList, prop) => {
  const values = workList.map((workItem) => workItem[prop]);

  return values;
};

export const getTags = (workList) => {
  const tagArrays = workList.map((workItem) => workItem.tags);
  const tags = tagArrays.toString().split(',');
  const uniqueTagsSet = new Set(tags);

  return [...uniqueTagsSet];
};

export const getWorkByTags = (workList, currentTags) => {
  if (currentTags.lenght === 0) return workList;

  const workByTag = workList.filter((workItem) =>
    currentTags.every((currentTag) => workItem.tags.includes(currentTag))
  );

  return workByTag;
};
