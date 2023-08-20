import Select from "../Select/Select";
import { useSelector, useDispatch } from "react-redux";
import { setFilter } from "../../slices/filtersSlice";

import './Filters.scss';

function Filters() {
    const {view, priority} = useSelector(state => state.filters)
    const dispatch = useDispatch()

    const onSelect = (type, value) => {
        dispatch(setFilter({type, value}));
    }

    return (
        <div className="filters">
            <Select data={view} onSelect={(value) => {
                onSelect('view', value.name);
            }}/>
            <Select data={priority} onSelect={(value) => {
                onSelect('priority', value.name);
            }}/>
        </div>
    )
}

export default Filters;