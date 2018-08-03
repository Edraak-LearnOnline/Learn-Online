import React from 'react'
import { Card, Grid, TextField, Button } from '@material-ui/core';
import { GoogleLogin } from 'react-google-login';



const responseGoogle = (response) => {
  response.El?
  window.location.href = '/profile':
  window.location.href = "/login"  
}



class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      userName: '',
      fullName: '',
      email: '',
      password: ''
    }
    this.onChange = this.onChange.bind(this)
    this.loginAdmin = this.loginAdmin.bind(this)
  }
  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  loginAdmin() {
    var obj = {
      userName: this.state.userName,
      password: this.state.password
    }
    $.ajax({
      url: '/adminController/login',
      type: 'POST',
      data: obj,
      success: function (data) {
      
        window.location.href = '/profile'
      },
      error: function (err) {
        alert('not here', err)
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
          <Grid container justify="space-around" alignContent="center" direction="column" style={{textAlign:"center"}}>
            <GoogleLogin
              clientId="113021884886-314ovegh53pf00d99jn8moc2bj1la6sq.apps.googleusercontent.com"
              buttonText= "Login using Google"
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
              style={{
                width: "91%",
                height: "50px",
                backgroundColor: "orange",
                color: "white",
                borderRadius: 5,
                outline: "none",
                marginBottom: "10px",
                fontSize: "15px",
                marginLeft:"10px"
              }}
            />

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
                onClick={this.loginAdmin}>
                LOGIN</Button>
            </Grid>
          </Grid>
        </Card>
      </div>
    )
  }
}




export default Login
