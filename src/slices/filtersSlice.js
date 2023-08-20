import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    view: {
        current: 'all',
        options: [
            {
                label: 'All tasks',
                name: 'all'
            },
            {
                label: 'Completed',
                name: 'completed'
            },
            {
                label: 'Ongoing',
                name: 'ongoing'
            },
        ]
    },
    priority: {
        current: 'all',
        options: [
            {
                label: 'All priorities',
                name: 'all'
            },
            {
                label: 'No priority',
                name: 'none'
            },
            {
                label: 'High',
                name: 'high'
            },
            {
                label: 'Medium',
                name: 'medium'
            },
            {
                label: 'Low',
                name: 'low'
            },
        ]
    }
}

const filtersSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        setFilter: (state, action) => {
            const {type, value} = action.payload;
            switch (type) {
                case 'view': 
                    state.view.current = value;
                    break;
                case 'priority': 
                    state.priority.current = value;
                    break;
                default: 
                    throw new Error('Invalid filter type')
            }
        }
    }
})

export default filtersSlice.reducer;

export const {
    setFilter
} = filtersSlice.actions;