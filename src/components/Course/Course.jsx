import PropTypes from 'prop-types';

const Course = ({course}) => {
    return (
        <div>
            {course.price}
        </div>
    );
};

Course.propTypes = {
    course: PropTypes.object.isRequired
}

export default Course;