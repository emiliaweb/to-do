import { useState } from 'react';
import classNames from 'classnames';

import './Select.scss';
import expand from './expand.svg';

function Select({
    data, 
    onSelect = console.log
}) {
    const [isExpanded, setIsExpanded] = useState(false);
    const current = data.options.find(item => item.name === data.current);

    const onClick = () => {
        setIsExpanded(state => !state);
    }

    const renderOptions = (opts) => {
        return opts.map(item => {
            return (
                <div 
                    onClick={() => onSelect({label: item.label, name: item.name})}
                    key={item.name}
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
                <span>{current.label}</span>
                <img src={expand} alt="Show more" />
            </div>
            <div className="select-options">
                {renderOptions(data.options)}
            </div>
        </div>
    )
}

export default Select;