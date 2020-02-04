import React from 'react'
import PropTypes from 'prop-types'
import Menu from '../../components/menu/Menu'
import ToolBar from '../../components/utils/ToolBar'

const MenuContainer = props => (
  <>
    <ToolBar title={props.title} />
    <nav className='menu-column'>
      <Menu />
    </nav>
  </>
)

export default MenuContainer

MenuContainer.propTypes = {
  title: PropTypes.string.isRequired
}