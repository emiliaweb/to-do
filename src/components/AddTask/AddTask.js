import Select from '../Select/Select';

import './AddTask.scss';
import icon from './add.svg';

function AddTask() {
    const priorities = {
        default: 'No priority',
        options: [
            {
                id: 'p1',
                name: 'high',
                label: 'High'
            },
            {
                id: 'p2',
                name: 'medium',
                label: 'Medium'
            },
            {
                id: 'p3',
                name: 'low',
                label: 'Low'
            }
        ]
    }
    return (
        <div className='block add'>
            <div className="block-inner">
                <div className="block-left">
                    <div className="add-icon">
                        <img src={icon} alt="Create a task" />
                    </div>
                    <input type="text" placeholder='Create a new task...' className='add-input' />
                </div>
                <div className="block-right">
                    <Select data={priorities} />
                </div>
            </div>
        </div>
    )
}

export default AddTask;