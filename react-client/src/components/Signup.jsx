import React from 'react'
import { Grid, TextField, Button, Card } from "@material-ui/core"

class Signup extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      userName: '',
      fullName: '',
      email: '',
      password: ''
    }
    this.onChange = this.onChange.bind(this)
    this.signup = this.signup.bind(this)
  }
  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  signup() {
    var that = this
    var obj = {
      userName: this.state.userName,
      fullName: this.state.fullName,
      email: this.state.email,
      password: this.state.password
    }

    $.ajax({
      url: '/adminController/signup',
      type: 'POST',
      data: obj,
      success: function (data) {
        window.location.href = '/profile'
      },
      error: function (err) {
        console.log(err)
      }

    })
  }

  render() {
    return (
      <div>
        <Card style={{
          width: 300, textAlign: "center",
          padding: 20,
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          position: 'absolute',

        }}>
          <Grid container justify="space-around" alignContent="center" direction="column">
            <Grid item style={{ marginTop: "10px", marginBottom: "10px" }}>
              <TextField style={{ width: "100%", textAlign: "center" }}
                onChange={this.onChange}
                name='fullName'
                required
                label="Full Name"
                placeholder="Full Name" />
            </Grid>
            <Grid item style={{ marginTop: "10px", marginBottom: "10px" }}>
              <TextField style={{ width: "100%", textAlign: "center" }}
                onChange={this.onChange}
                name='userName'
                required
                label="User Name"
                placeholder="User Name" />
            </Grid>
            <Grid item style={{ marginTop: "10px", marginBottom: "10px" }}>
              <TextField style={{ width: "100%", textAlign: "center" }}
                onChange={this.onChange}
                name='email'
                required
                label="Email"
                placeholder="Email" />
            </Grid>
            <Grid item style={{ marginTop: "10px", marginBottom: "10px" }}>
              <TextField style={{ width: "100%", textAlign: "center" }}
                onChange={this.onChange}
                name='password'
                required
                type='password'
                label="Password"
                placeholder="Password" />
            </Grid>
            <Grid item style={{ marginTop: "10px", marginBottom: "10px" }}>
              <Button
                variant="contained"
                color="primary"
                onClick={this.signup}>
                SIGN UP</Button>
            </Grid>
          </Grid>
        </Card>
      </div>

    )
  }
}
export default Signup
