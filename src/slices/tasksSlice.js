import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useHttp } from "../hooks/http.hook";

const initialState = {
    tasksLoadingStatus: 'idle',
    tasks: [],
};

export const fetchTasks = createAsyncThunk(
    'tasks/fetchTasks',
    () => {
        const {request} = useHttp();
        // return request('https://api.sheety.co/42a4cd5d344d9878b6f8dfad0fb05e83/tasks/tasks');
        return request('https://sheet.best/api/sheets/d33d16d0-bc9d-4e87-a593-6c27bf68406f', 'GET', null, {'X-Api-Key': 'yx%tv2oz4np6umwbj$h$_JdfQZG!%dcKReBnZxF-3VXuhf9sjEA9QXV20fQD82pM'});
    }
)

const tasksSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        createTask: (state, action) => {
            state.tasks = [...state.tasks, action.payload];
        }
    },
    extraReducers: builder => {
        builder
            .addCase(fetchTasks.pending, state => {state.tasksLoadingStatus = 'loading'})
            .addCase(fetchTasks.fulfilled, (state, action) => {
                state.tasksLoadingStatus = 'idle';
                state.tasks = action.payload;
                // state.tasks = action.payload.tasks; // for sheety
            })
            .addCase(fetchTasks.rejected, state => {state.tasksLoadingStatus = 'error'});
    }
})

const {actions, reducer} = tasksSlice;

export default reducer;

export const {createTask} = actions;