import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as appAction from './actions/appActions'
import Login from './components/login/Login'


class App extends Component {

  render() {
    return(
      <Login />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    value: state.field.value
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({ appAction }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(App)

export { App }
