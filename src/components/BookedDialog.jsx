import React from 'react'
import { Button, Dialog,DialogActions,DialogTitle } from '@mui/material'
import Booked from '../lib/mutation/Event/BookedEvent'
const BookedDialog = ({handleClose,open,id}) => {
    const {mutate}=Booked(handleClose)
    console.log(id)
  return (
    <Dialog onClose={handleClose} open={open} >
        <div className=' p-5 relative w-full'>
        <DialogTitle className=' text-center text-5xl font-bold'>Actions</DialogTitle>
        <Button onClick={handleClose} className=' !absolute  top-0 right-0 w-fit'>X</Button>
        <DialogActions>
            <Button onClick={()=>mutate(id)} >Booked Event</Button>
            <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
        </div>
    </Dialog>
  )
}

export default BookedDialog