import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

export default function Form() {

  const classes = useStyles()

  const fullDate = _ => {
    const dt = new Date()
    return `${dt.getDate()} / ${dt.getMonth()} / ${dt.getFullYear()}`
  }

  return (
    <form className={classes.container} noValidate>

      <TextField
        disabled id='standard-disabled'
        label='Data'
        defaultValue={fullDate()}
      />

      <TextField
        id='time'
        label='Hora entrada'
        type='time'
        defaultValue='08:00'
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
      />

      <TextField
        id='time'
        label='Hora saída'
        type='time'
        defaultValue='18:00'
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
      />
    </form>
  );
}

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 100,
  },
}))
