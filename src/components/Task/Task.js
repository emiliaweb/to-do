import './Task.scss';

function Task({content, priority}) {
    return (
        <div className='block task'>
            <div className="block-inner">
                <div className="block-left">
                    <div className="task-checkbox" tabIndex={0}></div>
                    <div className="task-content">{content}</div>
                </div>
                <div className="block-right">
                    <div className="task-priority" data-priority={priority}></div>
                </div>
            </div>
        </div>
    )
}

export default Task;