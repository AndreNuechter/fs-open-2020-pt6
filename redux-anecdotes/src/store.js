import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import anecdoteReducer from './reducers/anecdoteReducer';
import anecdoteFilterReducer from './reducers/anecdoteFilterReducer';
import notificationReducer from './reducers/notificationReducer';

export default createStore(
    combineReducers({
        anecdotes: anecdoteReducer,
        filter: anecdoteFilterReducer,
        notification: notificationReducer
    }),
    composeWithDevTools(applyMiddleware(thunk))
);