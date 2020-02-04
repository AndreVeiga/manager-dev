import React from 'react'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import PropTypes from 'prop-types'
import FormTimer from './FormSpreadSheet'

const ModalTimer = props => {
  return (
    <div>
      <Dialog
        open={props.open}
        onClose={props.handleClose}
        aria-labelledby='alert-dialog-title'
        aria-describedby='alert-dialog-description'
      >
        <DialogTitle id='alert-dialog-title'>
          {'Registro na planilha de horas'}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id='alert-dialog-description'>
            <FormTimer />
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={props.handleClose} color='primary'>
            Cancela
          </Button>
          <Button onClick={props.handleClose} color='primary' autoFocus>
            Salvar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default ModalTimer

ModalTimer.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired
}