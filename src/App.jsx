import "./App.css";
import Header from "./components/Header/Header";
import Courses from "./components/Courses/Courses";
import Cart from "./components/Cart/Cart";
import { useState } from "react";

function App() {
    const [selectedCourses, setSelectedCourses] = useState([]);
    const [remainingHour, setRemainingHour] = useState(20);
    const [totalHour, setTotalHour] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);

    const handleAddToCart = (course) => {
        const isObjectInArray = selectedCourses.some(
            (obj) => obj.course_name === course.course_name
        );
        if (!isObjectInArray && remainingHour >= course.credit) {
            const newSelectedCourses = [...selectedCourses, course];
            setSelectedCourses(newSelectedCourses);

            const newRemainingHour = remainingHour - course.credit;
            setRemainingHour(newRemainingHour);

            const newTotalHour = totalHour + course.credit;
            setTotalHour(newTotalHour);

            const newTotalPrice = totalPrice + course.price;
            setTotalPrice(newTotalPrice);
        }
        
        if (isObjectInArray){
            window.alert("This course is already added.");
        }
        if (remainingHour < course.credit){
            window.alert("You've already used up the available 20 hours for course credit.")
        }
    };
    return (
        <div className="font-inter p-14 bg-course-background">
            <Header></Header>
            <div className="grid grid-cols-4 my-8 gap-6">
                <Courses handleAddToCart={handleAddToCart}></Courses>
                <Cart
                    selectedCourses={selectedCourses}
                    remainingHour={remainingHour}
                    totalHour={totalHour}
                    totalPrice={totalPrice}
                ></Cart>
            </div>
        </div>
    );
}

export default App;
