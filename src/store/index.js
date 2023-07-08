import { configureStore } from "@reduxjs/toolkit";

import tasks from "../slices/tasksSlice";

const stringMiddleware = () => (dispatch) => (action) => {
    if (typeof action === 'string') {
        return dispatch({type: action});
    }
    return dispatch(action);
}

const store = configureStore({
    reducer: {tasks},
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(stringMiddleware),
    devTools: process.env.NODE_ENV != 'production'
})

export default store;