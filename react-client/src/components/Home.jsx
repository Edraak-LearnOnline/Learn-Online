import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import { Grid, TextField } from "@material-ui/core"
import Course from "./Course.jsx"
import moment from 'moment'
import { SocialIcon } from 'react-social-icons'
import {Link } from 'react-router-dom'

//style .
const styles = {
  root: {
    flexGrow: 1,
  },
  flex: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
}

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      coursesArray: []
    }
    this.searchUpdated = this.searchUpdated.bind(this)
  }

  componentDidMount() {
    var that = this;
    $.ajax({
      url: '/courseController/retriveAll',
      type: "GET",
      success: function (data) {
        console.log(data)
        that.setState({
          coursesArray: data
        })
      },
      error: function (err) {
        console.log(err)
      }
    })
  }
  searchUpdated(event) {
    var updatedList = this.state.coursesArray;

    if (event.target.value.length === 0)
      this.componentDidMount()
    else {
      updatedList = updatedList.filter(function (item) {
        return item.courseName.toLowerCase().search(
          event.target.value.toLowerCase()) !== -1;
      });
      this.setState({ coursesArray: updatedList });
    }
  }


  render() {
    const { classes, auth } = this.props
    const { coursesArray } = this.state
    return (
      <div className={classes.root}>
        <AppBar position='static' style={{ position: 'fixed' }}>
          <Toolbar>
            <Typography variant='title' color='inherit' className={classes.flex}>
              Learn-Online
            </Typography>
            {!auth ? <div>
              <Link to='/login'>
                <Button variant='contained' color='secondary' style={{ marginRight: "7px" }}>Login</Button>
              </Link>
              <Link to='/signup'>
                <Button variant="contained" color="default">signup</Button>
              </Link>
            </div> :
              <Link to='/profile'>
                <Button variant="contained" color="default">Profile</Button>
              </Link>
            }
          </Toolbar>
        </AppBar>
        <div>
          <img src={'http://www.dreamm.co.uk/Content/Image/topbar-home.png'} style={{ width: '100%', height: '100%' }} />
        </div>
        <Grid container justify="center" alignContent="center">
        <Grid item>
        <TextField style={{
          width: 300,
          margin: "40px",
          alignSelf: "center"
        }} onChange={this.searchUpdated}
          placeholder="Search" />
          </Grid>
          </Grid>
        <Grid container direction="row" alignContent="center">
          {coursesArray.length?
            coursesArray.map(function (item) {
            return (
              <Grid item
                key={item._id}
                style={{ margin: "20px" }}
              >
                <Course
                  img={item.image}
                  title={item.courseName}
                  dis={item.description}
                  video={item.video}
                  pub={item.publisher}
                  like={item.Like}
                  date={moment(item.publishTime).calendar()}
                />
              </Grid>

            )
          }

          ):<p>Course Not Found</p>}
        </Grid>
        <div style={{ width: '100%' }}>
          <footer className="navbar-fixed-bottom footer">
            <div className="container">
              <div className="row">
                <SocialIcon url='http://twitter.com' />
                <SocialIcon url='http://facebook.com' />
                <SocialIcon url='http://slack.com' />
                <SocialIcon url='http://github.com' />
              </div>
            </div>
          </footer>
        </div>

      </div>

    )
  }
}
Home.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Home)
