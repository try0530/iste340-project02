import { useState, useEffect } from "react";
import getData from "../../utils/getData";
import {
  AccordionTitle,
  AccordionContent,
  Accordion,
  Icon,
} from "semantic-ui-react";
import DialogCourse from "../Dialog/DialogCourse";

const AccordionMinors = ({
  inputIndex,
  title,
  description,
  note,
  courses,
  activeIndex,
  handleClick,
  name,
}) => {
  // whether the single course be clicked.
  const [clickCourse, setClickCourse] = useState("");
  const [courseDetails, setCourseDetails] = useState("");

  // change the course data when click the specific course
  useEffect(() => {
    setCourseDetails("");
    getData(`course/courseID=${clickCourse}`).then((json) =>
      setCourseDetails(json)
    );
  }, [clickCourse]);

  function handleClickCourse(course) {
    if (clickCourse === course) {
      setClickCourse("");
    } else {
      setClickCourse(course);
    }
  }
  return (
    <Accordion styled fluid>
      <AccordionTitle
        active={activeIndex === inputIndex}
        index={inputIndex}
        onClick={() => {
          handleClick(inputIndex);
        }}
      >
        {title}
        <Icon name="dropdown" />
      </AccordionTitle>
      <AccordionContent active={activeIndex === inputIndex}>
        {description ? <p>{description}</p> : null}
        {note ? <span>{note}</span> : null}
        {courses ? (
          <div className="minor-courses">
            <h5>Courses</h5>
            <ul>
              {courses.map((course, i) => (
                <li
                  key={`${name}-course-${i}`}
                  onClick={() => handleClickCourse(course)}
                  className="minor-course"
                >
                  {course}
                  {clickCourse === course && (
                    <div className="course-details">
                      <DialogCourse
                        course={course}
                        title={courseDetails.title}
                        description={courseDetails.description}
                        setClickCourse={setClickCourse}
                      />
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </AccordionContent>
    </Accordion>
  );
};

export default AccordionMinors;
