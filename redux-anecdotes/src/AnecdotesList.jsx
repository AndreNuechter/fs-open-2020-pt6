import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { vote } from './reducers/anecdoteReducer.js';

export default () => {
    const anecdotes = useSelector(state => state);
    const dispatch = useDispatch();

    return anecdotes.sort((a, b) => b.votes - a.votes).map(anecdote =>
        <div key={anecdote.id}>
            <div>
                {anecdote.content}
            </div>
            <div>
                has {anecdote.votes}
                <button onClick={() => dispatch(vote(anecdote.id))}>vote</button>
            </div>
        </div>
    );
};