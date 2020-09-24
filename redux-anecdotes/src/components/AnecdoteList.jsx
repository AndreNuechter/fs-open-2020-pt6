import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { vote } from '../reducers/anecdoteReducer.js';

export default () => {
    const anecdotes = useSelector(({ anecdotes }) => anecdotes);
    const filter = useSelector(({ filter }) => filter);
    const dispatch = useDispatch();

    return <div className="anecdote__list">
        {anecdotes
            .filter(a => a.content.toLowerCase().includes(filter.toLowerCase()))
            .sort((a, b) => b.votes - a.votes).map(anecdote =>
                <div className="anecdote" key={anecdote.id}>
                    <p>"{anecdote.content}"</p>
                    <div>
                        <div>has {anecdote.votes} vote{anecdote.votes !== 1 && 's'}</div>
                        <button onClick={() => dispatch(vote(anecdote))}>Vote</button>
                    </div>
                </div>
            )}
    </div>;
};