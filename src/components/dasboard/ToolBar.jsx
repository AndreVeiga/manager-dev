import React from 'react'
import PropTypes from 'prop-types'
import CssBaseline from '@material-ui/core/CssBaseline'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

const ToolBar = props => (
  <>
    <CssBaseline />
    <AppBar position='absolute'>
      <Toolbar>
        <Typography component="h1" variant="h6" color="inherit" noWrap>
          {props.title}
          </Typography>
      </Toolbar>
    </AppBar>
  </>
)

export default ToolBar

ToolBar.propTypes = {
  title: PropTypes.string.isRequired
}