import "./App.css";
import Header from "./components/Header/Header";
import Courses from "./components/Courses/Courses";
import Cart from './components/Cart/Cart';

function App() {
    return (
        <div className="font-inter p-14">
            <Header></Header>
            <div className="grid grid-cols-4 my-8">
                <Courses></Courses>
                <Cart></Cart>
            </div>
        </div>
    );
}

export default App;
