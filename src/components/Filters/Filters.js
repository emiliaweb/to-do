import Select from "../Select/Select"

import './Filters.scss';

function Filters() {
    const tasks = {
        default: 'All tasks',
        options: [
            {
                id: 'o1',
                name: 'completed',
                label: 'Completed'
            },
            {
                id: 'o2',
                name: 'ongoing',
                label: 'Ongoing'
            }
        ]
    }
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
        <div className="filters">
            <Select data={tasks} />
            <Select data={priorities} />
        </div>
    )
}

export default Filters;