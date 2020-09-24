import dbService from '../services/db.js';

export default () => {
    return async dispatch => {
        const data = await dbService.getAll();
        dispatch({
            type: 'INIT',
            data
        });
    };
};