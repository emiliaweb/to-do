import { useState } from 'react';
import classNames from 'classnames';

import './Select.scss';
import expand from './expand.svg';

function Select({data}) {
    const [isExpanded, setIsExpanded] = useState(false);

    const onClick = () => {
        setIsExpanded(state => !state);
    }

    const renderOptions = (opts) => {
        return opts.map(item => {
            return (
                <div 
                    key={item.id}
                    className="select-option" 
                    tabIndex={0}>{item.label}</div>
            )
        })
    }

    const classes = classNames('select', isExpanded ? 'select--open' : null);

    return (
        <div 
            onClick={onClick}
            className={classes} 
            tabIndex={0} 
            aria-expanded={isExpanded}>
            <div className="select-current">
                <span>{data.default}</span>
                <img src={expand} alt="Show more" />
            </div>
            <div className="select-options">
                {renderOptions(data.options)}
            </div>
        </div>
    )
}

export default Select;