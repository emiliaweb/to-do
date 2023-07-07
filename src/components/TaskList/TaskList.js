import Task from '../Task/Task';

import './TaskList.scss';

function TaskList() {
    return (
        <div className="tasks">
            <Task content={'Send client follow-up email'} priority={'high'} />
            <Task content={'Review project timeline and milestones'} priority={'medium'} />
            <Task content={'Prepare meeting agenda and materials'} priority={'none'} />
            <Task content={'Update social media profiles'} priority={'low'} />
        </div>
    )
}

export default TaskList;