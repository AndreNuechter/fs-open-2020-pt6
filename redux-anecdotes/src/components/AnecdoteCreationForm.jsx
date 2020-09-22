import React from 'react';
import { useDispatch } from 'react-redux';
import { create } from '../reducers/anecdoteReducer.js';

export default () => {
    const dispatch = useDispatch();
    const createAnecdote = (event) => {
        const input = event.target.anecdote;
        const anecdote = input.value;

        input.value = '';
        dispatch(create(anecdote));
        event.preventDefault();
    };

    return <form onSubmit={createAnecdote}>
        <h2>Add a new anecdote</h2>
        <div><input name="anecdote" /></div>
        <button>Add</button>
    </form>;
};