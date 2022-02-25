import React, { useContext } from 'react';
import { PropTypes } from 'prop-types';
import {
    action,
    observable,
    makeAutoObservable,
} from 'mobx';
// import { observer } from 'mobx-react';


class Store {
  storyIds = [];
  stories = [];
  addStoryIds(ids) {
    this.storyIds = ids;
  }
  addStories(stories) {
    this.stories = stories;
  }
  sortStories(stories, key, direction) {
    stories.sort((a, b) => {
      if(key !== 'score') {
        if(a[key].toString().toLowerCase() < b[key].toString().toLowerCase()) return direction === 'asc' ? -1 : 1;
        if(a[key].toString().toLowerCase() > b[key].toString().toLowerCase()) return direction === 'asc' ? 1 : -1;
        return 0
      }
      if(direction === 'asc') return a[key] - b[key];
      if(direction === 'desc') return b[key] - a[key];
    });
  }

  constructor() {
    makeAutoObservable(this, {
      storyIds: observable,
      stories: observable,
      addStoryIds: action,
      addStories: action,
      sortStories: action,
    });
  }
}

const _store = new Store();

export const StoreContext = React.createContext();
  
export const useStore = () => {
  return useContext(StoreContext);
};

// This is the elegant way of providing store HOC
// export const withStore = (WrappedComponent) => {
//   const ObserverComponent = observer(WrappedComponent);

//   return function WrapperComponent(props) {
//     const store = useStore();

//     return (
//       <ObserverComponent store={store} {...props} />
//     );
//   };
// };

export const StoreProvider = (props) => (
  <StoreContext.Provider value={_store}>
    {props.children}
  </StoreContext.Provider>
);

StoreProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.element,
    PropTypes.string,
  ]),
};

StoreProvider.defaultProps = {
  children: null,
};

export default StoreProvider;