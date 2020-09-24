import React from 'react';
import { useDispatch } from 'react-redux';
import { update } from '../reducers/anecdoteFilterReducer.js';

export default () => {
    const dispatch = useDispatch();
    const filterAnecdote = ({ target: { value } }) => {
        dispatch(update(value));
    };

    return <label className="anecdote__filter">
        <span>Filter:</span>
        <input onChange={filterAnecdote} />
    </label>;
};