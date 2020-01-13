# redux-immer  [![npm version](https://img.shields.io/npm/v/redux-immer.svg?style=flat)](https://www.npmjs.org/package/redux-immer)

`redux-immer` is used to create an equivalent function of Redux combineReducers that works with `immer` state. </br>
Like `redux-immutable` but for `immer`

Installation
-----------
Using [npm](https://www.npmjs.com/):

    $ npm install --save redux-immer
   
# Features
 
* one time only produce
* standard-like reducers
* support react-router routerReducer integration (`redux-first-history` / `react-router-redux` / `connected-react-router`)

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
  }),
  // applyMiddleware...
);
```

user.js 
```javascript
const initialState = {
  id: null,
  profile: {}
};

export const user = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_USER: 
      state.id = action.id;
      state.profile = action.profile;
      return state; // or just return; (immer way)
    default:
      return state;  //important return state on default for initialState!!
  }
};
```

catalog.js 
```javascript
const initialState = [];

export const catalog = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_CATALOG:
      state = action.data;
      return state; // or just return; (immer way)
    default:
      return state;  //important return draft on default for initialState!!
  }
};
```

# Tips
You may call `combineReducers` at any level of the reducer hierarchy. It doesn't have to happen at the top. In fact you may use it again to split the child reducers that get too complicated into independent grandchildren, and so on. (exact as original redux.combineReducer https://redux.js.org/api/combinereducers)

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
