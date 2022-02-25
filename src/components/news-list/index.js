import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react';
import { useStore } from '../../store';
import { getStoryIds, getStories } from '../../utils';
import { itemsPerPage } from '../../constants';
import NewsStory from '../news-story';
import SortBar from '../sort-bar';

const NewsList = observer(({
  newsType
}) => {
  const store = useStore();
  const { storyIds, stories, sortStories } = store;
  useEffect(() => {
    getStoryIds(newsType)
    .then((data) => store.addStoryIds(data));
  }, []);
  useEffect(() => {
    if(storyIds.length > 0) {
    getStories(storyIds, itemsPerPage)
    .then((data) => {
      store.addStories(data);
    });
    }
  }, [storyIds.length]);
  return (
    <div className="list-container">
      <SortBar stories={stories} sortAction={sortStories} />
      {(stories.length > 0) ? (stories.map(story => (
        <NewsStory key={story.id} title={story.title} time={story.time} author={story.by} score={story.score} link={story.url} />
      )))
      :
        <div>empty</div>
      }
    </div>
  );
});

NewsList.propTypes = {
  newsType: PropTypes.string,
};

NewsList.defaultProps = {
  newsType: '',
};

export default NewsList;