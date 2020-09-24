import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { hide } from '../reducers/notificationReducer.js';

let timeoutId;

export default () => {
    const dispatch = useDispatch();
    const notification = useSelector(({ notification }) => notification);

    useEffect(
        () => {
            if (timeoutId) clearTimeout(timeoutId);

            timeoutId = setTimeout(() => {
                dispatch(hide());
                timeoutId = null;
            }, 5000);
        }, [notification, dispatch]
    );

    return <div className="notification">
        {notification}
    </div>;
};