import React, { Component } from "react"
import CourseSelector from "./CourseSelector"
import EditStudent from "./EditStudent"
import StudentsList from "./StudentsList"

class CourseContainer extends Component {
  state = {
    students: [],
    currentCourse: {},
    currentStudent: {},
    courses: []
  }

componentDidMount(){
fetch('https://bayside-high.herokuapp.com/api/v1/users/139/courses').then(res => res.json()).then(courses =>
  this.setState({courses})
)}

showTitle = (data) =>{
let x = document.getElementById(data)
console.log(x)
}


  render() {
console.log(this.state.courses)
    return (
      <div className="ui grid container">
        <div className="ui center aligned header sixteen wide column">
          {this.showTitle}
          Course Title
        </div>

        <CourseSelector courseNames={this.state.courses} showTitle={this.showTitle}/>

        <EditStudent />

        <StudentsList />
      </div>
    )
  }
}

export default CourseContainer
