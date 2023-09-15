import PropTypes from 'prop-types';
import { FiDollarSign } from 'react-icons/fi';
import { HiOutlineBookOpen } from 'react-icons/hi2';

const Course = ({course}) => {
    return (
        <div className='bg-white rounded-xl w-full p-5 flex flex-col justify-center gap-3'>
            <img src={course.image} alt={course.course_name} className='w-full rounded-lg mb-1' />
            <h2 className='text-lg font-semibold'>{course.course_name}</h2>
            <p className='text-sm text-course-dil mb-1 leading-6'>{course.details}</p>
            <div className="flex justify-between">
                <span className='flex items-center justify-center gap-3'>
                <FiDollarSign></FiDollarSign>
                <p className='font-medium text-course-dil'>Price: {course.price}</p>
                </span>
                <span className='flex items-center justify-center gap-3'>
                <HiOutlineBookOpen></HiOutlineBookOpen>
                <p className='font-medium text-course-dil'>Credit: {course.credit}hr</p>
                </span>
            </div>
            <button className='w-full text-white rounded-lg bg-course-secondary text-lg font-semibold p-2'>Select</button>
        </div>
    );
};

Course.propTypes = {
    course: PropTypes.object.isRequired
}

export default Course;