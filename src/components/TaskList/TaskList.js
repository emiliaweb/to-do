import { useEffect } from 'react';
import { createTask, fetchTasks } from '../../slices/tasksSlice';

import Task from '../Task/Task';

import './TaskList.scss';
import { useDispatch, useSelector } from 'react-redux';

function TaskList() {
    const tasks = useSelector(state => state.tasks.tasks);
    const tasksLoadingStatus = useSelector(state => state.tasksLoadingStatus);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchTasks());
    }, [])

    const renderTasks = (tasks) => {
        if (tasks.length === 0) {
            return <div className="text">No tasks yet.</div>
        }
        return tasks.map(item => <Task key={item.id} content={item.content} priority={item.priority} />)
    }
    // console.log(tasks);

    return (
        <div className="tasks">
            {renderTasks(tasks, tasksLoadingStatus)}
        </div>
    )
}

export default TaskList;