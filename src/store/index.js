/*
Store

In the previous sections, we defined the actions that represent the facts about “what happened” 
and the reducers that update the state according to those actions.

The Store is the object that brings them together. The store has the following responsibilities:

    1. Holds application state;
    2. Allows access to state via getState();
    3. Allows state to be updated via dispatch(action);
    4. Registers listeners via subscribe(listener);
    5. Handles unregistering of listeners via the function returned by subscribe(listener).
It's important to note that you'll only have a single store in a Redux application. When you want t
o split your data handling logic, you'll use reducer composition instead of many stores.

It's easy to create a store if you have a reducer. In the previous section, we used combineReducers() 
to combine several reducers into one. We will now import it, and pass it to createStore().
*/

import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import reducer from './reducers';
import apiMiddleware from './../actions/api'

const loggerMiddleware = createLogger()

const store = createStore(
    reducer,
    applyMiddleware(thunk, loggerMiddleware,apiMiddleware))

export default store;