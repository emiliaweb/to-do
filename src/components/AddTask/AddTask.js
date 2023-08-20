import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Select from '../Select/Select';
import { useHttp } from '../../hooks/http.hook';
import { createTask } from '../../slices/tasksSlice';

import './AddTask.scss';
import icon from './add.svg';

function AddTask() {
    const options = useSelector(state => {
        const priority = state.filters.priority
        return {
            current: 'none',
            options: priority.options.filter(item => item.name !== 'all')
        }
    });
    const [select, setSelect] = useState(options);
    const [formData, setFormData] = useState({
        content: '',
        priority: 'none',
        completed: false,
        id: Math.random().toString(36).substring(2, 9)
    });
    const {request} = useHttp();
    const dispatch = useDispatch();

    const onSelect = (data) => {
        setSelect(state => ({...state, current: data.name}));
        setFormData(state => ({...state, priority: data.name}));
    }

    const onInput = (e) => {
        const target = e.target;
        setFormData(state => ({...state, content: target.value}));
    }

    const onSubmit = (e) => {
        e.preventDefault();
        request(
            'http://localhost:3000/tasks', 
            'POST', 
            JSON.stringify(formData)
        )
        .then(data => {
            dispatch(createTask(data));
            setFormData(state => ({
                content: '',
                priority: 'none',
                completed: false,
                id: Math.random().toString(36).substring(2, 9)
            }))
        })
        .catch(console.log)
    }

    return (
        <div className='block add'>
            <form className="block-inner" onSubmit={onSubmit}>
                <div className="block-left">
                    <button type='submit' className="add-button">
                        <div className="add-icon">
                            <img src={icon} alt="Create a task" />
                        </div>
                    </button>
                    <input onInput={onInput} value={formData.content} type="text" placeholder='Create a new task...' className='add-input' />
                </div>
                <div className="block-right">
                    <Select data={select} onSelect={onSelect} />
                </div>
            </form>
        </div>
    )
}

export default AddTask;