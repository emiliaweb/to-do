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
        return request('http://localhost:3000/tasks');
    }
)

export const updateTask = createAsyncThunk(
    'tasks/updateTask',
    ({id, body}) => {
        const {request} = useHttp();
        return request(
            `http://localhost:3000/tasks/${id}`, 
            'PUT', 
            body
        );
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
            .addCase(fetchTasks.pending, state => {
                state.tasksLoadingStatus = 'loading';
            })
            .addCase(fetchTasks.fulfilled, (state, action) => {
                state.tasksLoadingStatus = 'idle';
                state.tasks = action.payload;
            })
            .addCase(fetchTasks.rejected, state => {
                state.tasksLoadingStatus = 'error'
            })
            .addCase(updateTask.pending, state => {
                state.tasksLoadingStatus = 'loading';
            })
            .addCase(updateTask.fulfilled, (state, action) => {
                console.log(action.payload)
                state.tasksLoadingStatus = 'idle';
                // state.tasks = action.payload;
            })
            .addCase(updateTask.rejected, state => {
                state.tasksLoadingStatus = 'error'
            })
    }
})

const {actions, reducer} = tasksSlice;

export default reducer;

export const {createTask} = actions;