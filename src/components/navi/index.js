import React from 'react';
import { PropTypes } from 'prop-types';
import {
  NavLink,
} from 'react-router-dom';

import './styles.scss';

export const Navi = ({ routes }) => (
  <nav className="navi">
    <ul className="navi__list">
      {routes.map((route) => {
        return (
          <li className="navi__item" key={route.label}>
            <NavLink to={route.path} className="navi__link" exact activeClassName="is-active">
              {route.label}
            </NavLink>
          </li>
        );
      })}
    </ul>
  </nav>
);

Navi.propTypes = {
  routes: PropTypes.arrayOf(PropTypes.shape({
    path: PropTypes.string,
    label: PropTypes.string,
  })),
};

Navi.defaultProps = {
  routes: [],
};

export default Navi;