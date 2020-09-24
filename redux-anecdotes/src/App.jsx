import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { init } from './reducers/anecdoteReducer.js';
import AnecdoteList from './components/AnecdoteList.jsx';
import AnecdoteCreationForm from './components/AnecdoteCreationForm.jsx';
import Notification from './components/Notification.jsx';
import AnecdoteFilter from './components/AnecdoteFilter.jsx';
import './styles/style.css';

export default () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(init());
    }, [dispatch]);

    return (
        <div >
            <h1>Anecdotes</h1>
            <Notification />
            <AnecdoteFilter />
            <AnecdoteCreationForm />
            <AnecdoteList />
        </div>
    );
};