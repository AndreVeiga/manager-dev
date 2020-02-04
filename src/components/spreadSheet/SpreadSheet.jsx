import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import columns from './columns'
import Fab from '@material-ui/core/Fab'
import AddIcon from '@material-ui/icons/Add'
import rows from './fakeData'
import ModalTimer from './modalTime'

const TableSheet = props => {

  const [openModal, setOpenModal] = useState(false);

  const handleClickOpenModal = _ => setOpenModal(true)
  const handleCloseModal = _ => setOpenModal(false)

  const classes = useStyles()

  return (
    <>
      {openModal &&
        <ModalTimer open={openModal} handleClose={handleCloseModal} />}
      <div className='spread-sheet-button'>
        <Fab color='primary' aria-label='add' onClick={handleClickOpenModal}>
          <AddIcon />
        </Fab>
      </div>
      <Paper className={classes.root}>
        <TableContainer className={classes.container}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map(column => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map(row => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map(column => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </>
  )
}

export default TableSheet

const useStyles = makeStyles({
  root: {
    width: '100%',
    zIndex: -1
  },
  container: {
    maxHeight: 440,
  },
})