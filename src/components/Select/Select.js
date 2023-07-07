import { useState } from 'react';
import classNames from 'classnames';

import './Select.scss';
import expand from './expand.svg';

function Select() {
    const [isExpanded, setIsExpanded] = useState(false);

    const onClick = () => {
        setIsExpanded(state => !state);
    }

    const classes = classNames('select', isExpanded ? 'select--open' : null);

    return (
        <div 
            onClick={onClick}
            className={classes} 
            tabIndex={0} 
            aria-expanded={isExpanded}>
            <div className="select-current">
                <span>No priority</span>
                <img src={expand} alt="Show more" />
            </div>
            <div className="select-options">
                <div className="select-option" tabIndex={0}>High</div>
                <div className="select-option" tabIndex={0}>Medium</div>
                <div className="select-option" tabIndex={0}>Low</div>
            </div>
        </div>
    )
}

export default Select;