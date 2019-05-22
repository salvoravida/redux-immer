export const combineReducers = (produce, reducers = {}) => {
  const keys = Object.keys(reducers);
  const initialState = keys.reduce((a, k) => {
    a[k] = reducers[k](undefined, {});
    return a;
  }, {});

  return produce((draft, action) => {
    for (let i = 0; i < keys.length; i += 1) {
      const key = keys[i];
      draft[key] = reducers[key](draft[key], action);
    }
    return draft;
  }, initialState);
};
