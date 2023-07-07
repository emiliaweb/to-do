import Heading from "../Heading/Heading";
import AddTask from "../AddTask/AddTask";
import Filters from "../Filters/Filters";
import TaskList from "../TaskList/TaskList";

import '../../assets/scss/reset.scss';
import '../../assets/scss/style.scss';
import './App.scss';

function App() {
    return (
        <div className="app container">
            <Heading />
            <AddTask />
            <Filters />
            <TaskList />
        </div>
    )
}

export default App;