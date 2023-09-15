import "./App.css";
import Header from "./components/Header/Header";
import Courses from "./components/Courses/Courses";
import Cart from './components/Cart/Cart';
import { useState } from "react";

function App() {
    const [selectedCourses, setSelectedCourses] = useState([]);
    const [remainingHour, setRemainingHour] = useState(20);
    const [totalHour, setTotalHour] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);

    const handleAddToCart = course =>{
        const newSelectedCourses = [...selectedCourses, course];
        const newRemainingHour = remainingHour - course.credit;
        setSelectedCourses(newSelectedCourses);
        setRemainingHour(newRemainingHour);
    }
    return (
        <div className="font-inter p-14 bg-course-background">
            <Header></Header>
            <div className="grid grid-cols-4 my-8 gap-6">
                <Courses handleAddToCart={handleAddToCart}></Courses>
                <Cart selectedCourses={selectedCourses} remainingHour={remainingHour}></Cart>
            </div>
        </div>
    );
}


export default App;
