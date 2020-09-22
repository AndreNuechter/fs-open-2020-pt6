import React from 'react';
import { useDispatch } from 'react-redux';
import { update } from '../reducers/anecdoteFilterReducer.js';

export default () => {
    const dispatch = useDispatch();
    const filterAnecdote = ({ target: { value } }) => {
        dispatch(update(value));
    };
    const style = {
        display: 'block',
        borderBottom: '1px dashed grey',
        paddingBottom: '8px',
        marginBottom: '8px',
        textAlign: 'center'
    };

    return <label style={style}>
        <span>Filter:</span>
        <input onChange={filterAnecdote} />
    </label>;
};