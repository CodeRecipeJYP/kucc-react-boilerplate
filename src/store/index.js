import configureStore from './configureStore';
import rootReducer from '../reducers';

export default function store(initialState = {}) {
  const middlewares = [];

  // If needed later
  // const storeEnhancers = {};

  const newStore = configureStore(initialState, rootReducer, middlewares);

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      newStore.replaceReducer(require('../reducers')); // eslint-disable-line global-require
    });
  }

  return newStore;
}
