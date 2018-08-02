import React from 'react'
import Course from "./Course.jsx"
import { Grid } from "@material-ui/core"
import AddModal from './AddModal.jsx';
class Profile extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      courseName: '',
      description: '',
      video: '',
      myCourses: []
    }
    this.onChange = this.onChange.bind(this);
    this.deleteCourse = this.deleteCourse.bind(this);
    this.updateCourse = this.updateCourse.bind(this);
  }
  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }


  deleteCourse(id) {
    var that = this;
    $.ajax({
      url: '/courseController/Delete',
      type: 'POST',
      data: { id: id },
      success: function (data) {
        console.log(data)
        window.location.reload()

      },
      error: function (err) {
        console.log(err)
      }
    })
  }

  updateCourse(id) {
    var that = this;
    var obj = {
      courseName: this.state.courseName,
      description: this.state.description,
      video: this.state.video,
      id: id
    }
    $.ajax({
      url: '/courseController/update',
      type: 'PUT',
      data: obj,
      success: function (data) {
        that.componentDidMount()
      },
      error: function (err) {
        console.log(err)
      }
    })
  }

  componentDidMount() {
    var that = this;
    $.ajax({
      type: 'GET',
      dataType: "json",
      url: '/courseController/retrieve',
      success: function (data) {
        console.log(data)
        that.setState({
          myCourses: data
        })
      },
      error: function (err) {
        console.log(err)
      }
    });
  }

  render() {
    var that = this

    return (
      <div>
        <AddModal />
        <Grid container direction="row">
          {this.state.myCourses.map(function (item) {
            return (
              <Grid item key={item._id}>
                <Course admin delete={() => that.deleteCourse(item._id)}
                  img={item.image}
                  cId={item._id}
                  video={item.video}
                  pub={item.publisher}
                  updete={() => that.updateCourse(item._id)}
                  title={item.courseName}
                  dis={item.description}
                  like={item.Like} />
              </Grid>
            )
          })
          }
        </Grid>
      </div>
    )
  }
}
export default Profile
