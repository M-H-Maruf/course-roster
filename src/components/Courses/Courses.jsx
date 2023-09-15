import { useEffect } from "react";
import { useState } from "react";
import Course from './../Course/Course';


const Courses = () => {
    const [courses, setCourses] = useState([]);

    useEffect( () =>{
        fetch('courses.json')
        .then(res => res.json())
        .then(data => setCourses(data))
    }, [])

    return (
        <div className="col-span-3 grid grid-cols-3">
            courses{courses.length}
            {
                courses.map((course, idx) => <Course key={idx} course={course}></Course>)
            }
        </div>
    );
};

export default Courses;