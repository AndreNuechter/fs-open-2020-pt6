import React from 'react';
import { useDispatch } from 'react-redux';
import { create } from './reducers/anecdoteReducer.js';

export default () => {
    const dispatch = useDispatch();
    const createAnecdote = (event) => {
        const input = event.target.anecdote;
        const anecdote = input.value;

        input.value = '';
        dispatch(create(anecdote));
        event.preventDefault();
    };

    return <>
        <h2>create new</h2>
        <form onSubmit={createAnecdote}>
            <div><input name="anecdote" /></div>
            <button>create</button>
        </form>
    </>;
};