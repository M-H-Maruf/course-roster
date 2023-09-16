import { useEffect } from "react";
import { useState } from "react";
import Course from "./../Course/Course";
import PropTypes from "prop-types";

// dynamically manage course data using useState
const Courses = ({ handleAddToCart }) => {
    const [courses, setCourses] = useState([]);

    // fetch course data
    useEffect(() => {
        fetch("courses.json")
            .then((res) => res.json())
            .then((data) => setCourses(data));
    }, []);

    // return from Courses component
    return (
        <div className="col-span-3 grid grid-cols-3 gap-6 justify-between items-center">
            {courses.map((course, idx) => (
                <Course
                    key={idx}
                    course={course}
                    handleAddToCart={handleAddToCart}
                ></Course>
            ))}
        </div>
    );
};

Courses.propTypes = {
    handleAddToCart: PropTypes.func,
};

export default Courses;
