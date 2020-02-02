import React, { Component } from 'react'
import Toolbar from '../../components/dasboard/ToolBar'
import Menu from '../menu/Menu'


class Dashboard extends Component {

	render() {
		return (
			<div>
				<Toolbar title='Dashboard' />
				<Menu />
				<h1>Teste</h1>
			</div>
		)
	}
}

export default Dashboard