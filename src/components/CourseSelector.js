import React from "react";

const CourseSelector = (props) => {
  const {courseNames} = props
  const {showTitle} = props
  console.log(courseNames)
  return (
    <div className="sixteen wide column">
      <select className="ui dropdown" onChange={(event)=>
        {showTitle(event.target.value)}
         // console.log(event.target.value)

       } >

         {courseNames.map((course, i) => {
          return (
            <option key={i} className="item" value={course.id}>
              {course.name}
            </option>
          );
        })} */}
      </select>
    </div>
  );
};

export default CourseSelector;
