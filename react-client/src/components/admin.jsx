import React from 'react'

class Signup extends React.Component {
		 constructor (props) {
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
  onChange (e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  signup () {
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
        console.log(data)
      },
      error: function (err) {
        console.log(err)
      }

    })
  }

  render () {
    return (
      <div>
        <h1>Signup Page</h1>
        <h3>Full name</h3>
        <input name='fullName' type='text' onChange={this.onChange} />
        <h3>user name</h3>
        <input name='userName' type='text' onChange={this.onChange} />
        <h3>email</h3>
        <input name='email' type='text' onChange={this.onChange} />
        <h3>password</h3>
        <input name='password' type='password' onChange={this.onChange} />

        <br />
        <br />
        <button onClick={() => this.signup()}>submit</button>
      </div>
    )
  }
}
export default Signup
