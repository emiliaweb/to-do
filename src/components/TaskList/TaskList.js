import { useEffect } from 'react';
import { fetchTasks, updateTask } from '../../slices/tasksSlice';

import Task from '../Task/Task';

import './TaskList.scss';
import { useDispatch, useSelector } from 'react-redux';

function TaskList() {
    const tasks = useSelector(state => state.tasks.tasks);
    const tasksLoadingStatus = useSelector(state => state.tasksLoadingStatus);
    const filters = useSelector(state => state.filters);

    const filterByPriority = (tasks, filter) => {
        return tasks.filter(task => {
            if (filter === 'all') {
                return task;
            }
            return task.priority === filter
        })
    }

    const filterByStatus = (tasks, filter) => {
        return tasks.filter(task => {
            switch (filter) {
                case 'all':
                    return task;
                case 'ongoing': 
                    return !task.completed;
                case 'completed': 
                    return task.completed;
                default: 
                    throw new Error('Invalid status filter')
            } 
        })
    }

    const visibleTasks = filterByStatus(filterByPriority(tasks, filters.priority.current), filters.view.current);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchTasks());
    }, [])

    const onCheckboxClick = (item) => {
        const body = JSON.stringify({...item, completed: !item.completed});
        dispatch(updateTask({id: item.id, body}))
            .unwrap()
            .then(() => {
                dispatch(fetchTasks())
            })
    }

    const renderTasks = (tasks) => {
        if (tasks.length === 0) {
            return <div className="text">No tasks yet.</div>
        }
        return tasks.map(item => 
            <Task 
                onCheckboxClick={() => onCheckboxClick(item)}
                key={item.id} 
                content={item.content} 
                priority={item.priority} 
                isCompleted={item.completed} />
        )
    }

    return (
        <div className="tasks">
            {renderTasks(visibleTasks, tasksLoadingStatus)}
        </div>
    )
}

export default TaskList;