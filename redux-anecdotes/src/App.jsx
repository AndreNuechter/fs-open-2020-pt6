import React from 'react';
import AnecdoteList from './AnecdotesList.jsx';
import AnecdoteCreationForm from './AnecdoteCreationForm.jsx';

export default () => {
    return (
        <div>
            <h2>Anecdotes</h2>
            <AnecdoteList />
            <AnecdoteCreationForm />
        </div>
    );
};