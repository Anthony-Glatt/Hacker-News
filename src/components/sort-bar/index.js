import React, { useState } from "react";
import PropTypes from 'prop-types';
import './styles.scss';

const SortBar = ({stories, sortAction}) => {
  const [direction, setDirection] = useState('asc');
  const toggleDirection = () => {
    if (direction === 'asc') return setDirection('desc');
    return setDirection('asc');
  };
  return (
    <div className="sort-bar">
      <button className="_btn" onClick={() => {sortAction(stories, 'time', direction); toggleDirection(); }}>Time</button>
      <button className="_btn" onClick={() => {sortAction(stories, 'by', direction); toggleDirection(); }}>Author</button>
      <button className="_btn" onClick={() => {sortAction(stories, 'score', direction); toggleDirection(); }}>Score</button>
    </div>
  );
};

SortBar.propTypes = {
  sortAction: PropTypes.func,
};

SortBar.defaultProps = {
  sortAction: () => {},
};

export default SortBar;