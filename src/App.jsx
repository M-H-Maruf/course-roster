import "./App.css";
import Header from "./components/Header/Header";
import Courses from "./components/Courses/Courses";

function App() {
    return (
        <div className="font-inter p-14">
            <Header></Header>
            <div>
                <Courses></Courses>
            </div>
        </div>
    );
}

export default App;
