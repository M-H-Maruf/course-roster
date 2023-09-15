import "./App.css";
import Header from "./components/Header/Header";
import Courses from "./components/Courses/Courses";
import Cart from './components/Cart/Cart';

function App() {
    return (
        <div className="font-inter p-14 bg-course-background">
            <Header></Header>
            <div className="grid grid-cols-4 my-8 gap-6">
                <Courses></Courses>
                <Cart></Cart>
            </div>
        </div>
    );
}

export default App;
