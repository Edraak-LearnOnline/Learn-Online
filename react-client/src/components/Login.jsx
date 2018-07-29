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
    this.loginAdmin = this.loginAdmin.bind(this)
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
      // that.setState({
      //   auth: true
      // })
        console.log(data)
      },
      error: function (err) {
        alert('not here ')
      }
    })
  }

  //   componentDidMount(){
  //   var that = this
  //   $.ajax({
  //     url:'/adminController/isLogin',
  //     type:'GET',
  //     success:function(data){
  //     console.log(data )
  //     console.log('data' )
  //     },
  //     error:function(err){
  //       console.log('err',err);
  //     }
  //   });
  // }

  render () {
    return (
      <div>
        <h1>Login Page</h1>
        <h3>username</h3>
        <input name='userName' type='text' onChange={this.onChange} />
        <h3>password</h3>
        <input name='password' type='password' onChange={this.onChange} />

        <br />
        <br />
        <button onClick={() => this.loginAdmin()}>submit</button>
      </div>
    )
  }
}
export default Signup
