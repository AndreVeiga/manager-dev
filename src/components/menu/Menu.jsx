import React from 'react'
import EventRoundedIcon from '@material-ui/icons/EventRounded'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import FormatListNumberedIcon from '@material-ui/icons/FormatListNumbered'
import HomeIcon from '@material-ui/icons/Home'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'

export default props => {

	const classes = useStyles()

	return (
		<ul className='nav flex-column flex-nowrap overflow-hidden'>

			<li className='nav-item menu-item menu-first' key={1}>
				<Button className={classes.button}>
					<EventRoundedIcon className={classes.icon} />
					Planilha
			</Button>
			</li>

			<li className='nav-item menu-item' key={2}>
				<Button className={classes.button}>
					<FormatListNumberedIcon className={classes.icon} />
					Tarefas
				</Button>
			</li>

			<li className='nav-item menu-item' key={3}>
				<Button className={classes.button}>
					<AccountCircleIcon className={classes.icon} />
					Profile
				</Button>
			</li>

			<li className='nav-item menu-item' key={4}>
				<Button className={classes.button}>
					<HomeIcon className={classes.icon} />
					Home
				</Button>
			</li>
		</ul>
	)
}

const useStyles = makeStyles(theme => ({
	button: {
		margin: theme.spacing(1),
		color: '#FFF'
	},
	icon: {
		marginRight: 12
	}
}))