import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'

const styles = {
  root: {
    flexGrow: 1
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
  constructor (props) {
    super(props)
    this.state = {
      userName: '',
      password: '',
      auth: false
    }
    this.loginAdmin = this.loginAdmin.bind(this)
    this.onChange = this.onChange.bind(this)
  }

  onChange (e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  loginAdmin () {
    var that = this
    var obj = {
      userName: this.state.userName,
      password: this.state.password
    }
    $.ajax({
      url: '/adminController/login',
      type: 'POST',
      data: obj,
      success: function (data) {
        that.setState({
          auth: true
        })
      },
      error: function (err) {
        console.log(err)
      }
    })
  }

  //   componentDidMount(){
  //   var that = this
  //   $.ajax({
  //     url:'/adminController/isLogin',
  //     type:'GET',
  //     success:function(data){
  //       that.setState({
  //         auth: true
  //       })
  //     },
  //     error:function(err){
  //       console.log(err);
  //     }
  //   });
  // }

  render () {
    const { classes } = this.props
    const {auth} = this.state
    return (
      <div className={classes.root}>
        <AppBar position='static'>
          <Toolbar>
            <IconButton className={classes.menuButton} color='inherit' aria-label='Menu'>
              <MenuIcon />
            </IconButton>
            <Typography variant='title' color='inherit' className={classes.flex}>
              Learn-Online
            </Typography>
            {auth && (
              <div>
                <Button variant='raised' color='secondary' onClick={this.loginAdmin}>Login</Button>
              </div>
            )}

          </Toolbar>
        </AppBar>
        <a href='/login'> <Button variant='raised' color='secondary' >Real Login</Button></a>
        <a href='/signup'><Button >signup</Button></a>
      </div>
    )
  }
}
Home.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Home)
