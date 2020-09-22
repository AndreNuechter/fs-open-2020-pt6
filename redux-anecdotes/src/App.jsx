import React from 'react';
import AnecdoteList from './components/AnecdoteList.jsx';
import AnecdoteCreationForm from './components/AnecdoteCreationForm.jsx';
import Notification from './components/Notification.jsx';
import AnecdoteFilter from './components/AnecdoteFilter.jsx';
import './styles/style.css';

export default () => {
    return (
        <div >
            <h1>Anecdotes</h1>
            <Notification />
            <AnecdoteFilter />
            <AnecdoteList />
            <AnecdoteCreationForm />
        </div>
    );
};