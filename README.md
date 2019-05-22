# redux-immer

`redux-immer` is used to create an equivalent function of Redux combineReducers that works with `immer` state.

Installation
-----------
Using [npm](https://www.npmjs.com/):

    $ npm install --save redux-immer

Or [yarn](https://yarnpkg.com/):

    $ yarn add redux-immer
Usage
-----

store.js

```javascript
import { createStore, applyMiddleware } from 'redux';
import { combineReducers } from 'redux-immer';
import produce from 'immer';

// Reducers
import { user } from './user';
import { catalog } from './catalog';

export const store = createStore(
  combineReducers(produce, {
     user,
     catalog,
     // ...
     // [key]: reducerFunction  (change reducer name)
  }),
  composeWithDevTools(
    applyMiddleware(sagaMiddleware),
    applyMiddleware(thunk),
    applyMiddleware(routerMiddleware),
  ),
);
```

user.js 
```javascript
const initialState = {
  id: null,
  profile: {}
};

export const user = (draft = initialState, action) => {
  switch (action.type) {
    case types.LOAD_USER: 
      draft.id = action.id;
      draft.profile = action.profile;
      return draft; // or just return;
    default:
      return draft;  //important return draft on default for initialState!!
  }
};
```

catalog.js 
```javascript
const initialState = [];

export const user = (draft = initialState, action) => {
  switch (action.type) {
    case types.LOAD_CATALOG:
      draft = action.data;
      return draft; // or just return;
    default:
      return draft;  //important return draft on default for initialState!!
  }
};
```

# Feedback

Let me know what do you think! <br>
*Enjoy it? Star this project!* :D

any idea? let me know and contribute!

Contributors
------------
See [Contributors](https://github.com/salvoravida/redux-immer/graphs/contributors).

License
-------
[MIT License](https://github.com/salvoravida/redux-immer/blob/master/LICENSE.md).
