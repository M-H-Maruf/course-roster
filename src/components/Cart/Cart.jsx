import PropTypes from "prop-types";

const Cart = ({ selectedCourses, remainingHour }) => {
    return (
        <div className="col-span-1 p-6 bg-white rounded-xl">
            {/* remaining credit hours */}
            <h2 className="text-lg font-bold leading-8 text-course-secondary border-b-2 border-course-border pb-4">Credit Hour Remaining {remainingHour} hr</h2>

            {/* selected courses */}
            <h2 className="text-xl font-bold mt-4">Course Name</h2>
            <div className="my-6">
            {
                selectedCourses.map((selectedCourse, idx) => <h2 key={idx} className="leading-8 text-course-dil">{idx+1} {selectedCourse.course_name}</h2>)
            }
            </div>
            <h2 className="font-medium py-4 border-y-2 border-course-border text-course-diluted">Total Credit Hour : 13</h2>
            <h2 className="font-semibold py-4 text-course-diluted">Total Price : 48000 USD</h2>
        </div>
    );
};

Cart.propTypes = {
    selectedCourses: PropTypes.array,
};

export default Cart;
