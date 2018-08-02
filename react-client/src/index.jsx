import React from 'react'
import ReactDOM from 'react-dom'
import $ from 'jquery'
import {browserHistory, Route, BrowserRouter as Router} from 'react-router-dom'
import Home from './components/Home.jsx'
import Signup from './components/Signup.jsx'
import Login from './components/Login.jsx'
import Profile from './components/Profile.jsx'

class App extends React.Component {
  constructor (props) {
    super(props)
  }
  componentDidMount () {
  }
  render () {
    return (
      <Router history={browserHistory}>
        <div className='container-fluid'>
          <Route exact path='/' component={Home} />
          <Route exact path='/home' component={Home} />
          <Route path='/signup' component={Signup} />
          <Route path='/login' component={Login} />
          <Route path='/profile' component={Profile} />

        </div>
      </Router>
    )
  }
}
ReactDOM.render(<App />, document.getElementById('app'))
