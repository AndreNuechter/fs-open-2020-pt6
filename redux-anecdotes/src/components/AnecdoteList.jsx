import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { vote } from '../reducers/anecdoteReducer.js';

export default () => {
    const anecdotes = useSelector(({ anecdotes }) => anecdotes);
    const filter = useSelector(({ filter }) => filter);
    const dispatch = useDispatch();

    return anecdotes
        .filter(a => a.content.toLowerCase().includes(filter.toLowerCase()))
        .sort((a, b) => b.votes - a.votes).map(anecdote =>
            <div className="anecdote" key={anecdote.id}>
                <div>"{anecdote.content}"</div>
                <div>
                    <div>has {anecdote.votes} vote{anecdote.votes !== 1 && 's'}</div>
                    <button onClick={() => dispatch(vote(anecdote.id, anecdote.content))}>Vote</button>
                </div>
            </div>
        );
};