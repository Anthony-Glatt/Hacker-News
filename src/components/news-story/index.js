import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';



const NewsStory = ({id, title, time, author, score, link}) => {
  return (
    <div key={id} className="story" onClick={() => window.open(link, '_blank')}>
      <div className="_content">
        <div className="_title">{title}</div>
        <div className="_time">{time}</div>
        <div className="_author">{author}</div>
        <div className="_score">{score}</div>
      </div>
    </div>
  )
};

NewsStory.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
};

NewsStory.defaultProps = {
  title: '',
  author: '',
};

export default NewsStory;
