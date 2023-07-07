import Heading from "../Heading/Heading";
import AddTask from "../AddTask/AddTask";

import '../../assets/scss/reset.scss';
import '../../assets/scss/style.scss';
import './App.scss';

function App() {
    return (
        <div className="app container">
            <Heading />
            <AddTask />
        </div>
    )
}

export default App;