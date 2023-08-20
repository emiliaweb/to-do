import { configureStore } from "@reduxjs/toolkit";

import tasks from "../slices/tasksSlice";
import filters from "../slices/filtersSlice";

const stringMiddleware = () => (dispatch) => (action) => {
    if (typeof action === 'string') {
        return dispatch({type: action});
    }
    return dispatch(action);
}

const store = configureStore({
    reducer: {tasks, filters},
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(stringMiddleware),
    devTools: process.env.NODE_ENV != 'production'
})

export default store;