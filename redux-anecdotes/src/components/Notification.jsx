import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { hide } from '../reducers/notificationReducer.js';

export default () => {
    const [timeoutId, setTimeoutId] = useState(null);
    const dispatch = useDispatch();
    const notification = useSelector(({ notification }) => notification);
    const style = {
        padding: 10,
        position: 'absolute',
        top: 0,
        left: 0,
        background: 'white',
        width: '100%'
    };

    useEffect(
        () => {
            if (timeoutId) clearTimeout(timeoutId);

            setTimeoutId(setTimeout(() => {
                dispatch(hide());
                setTimeoutId(null);
            }, 5000));
            // eslint-disable-next-line
        }, [notification]
    );

    return <div style={style}>
        {notification}
    </div>;
};