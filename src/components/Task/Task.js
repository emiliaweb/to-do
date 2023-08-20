import classNames from 'classnames';
import './Task.scss';

function Task({
    content, 
    priority,
    isCompleted,
    onCheckboxClick = console.log
}) {
    const classes = classNames('block', 'task', isCompleted ? 'task--completed' : '')

    return (
        <div className={classes}>
            <div className="block-inner">
                <div className="block-left">
                    <div 
                        onClick={onCheckboxClick}
                        className="task-checkbox" 
                        tabIndex={0}></div>
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