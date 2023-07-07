import Select from '../Select/Select';

import './AddTask.scss';
import icon from './add.svg';

function AddTask() {
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
                    <Select />
                </div>
            </div>
        </div>
    )
}

export default AddTask;