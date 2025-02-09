import React, { useState } from 'react'
import { Button, Dialog,DialogActions,DialogTitle } from '@mui/material'
import DeleteEvent from '../lib/mutation/Event/DeleteEvent'
import EditEventFormDialog from './EditEventFormDialog'

const ActionDialog = ({handleClose,open,values}) => {
    const {mutate}=DeleteEvent(handleClose)
    const [openEdit,setEdit]=useState(false)
  return (
    <>    <Dialog onClose={handleClose} open={open} >
        <div className=' p-5 relative w-full'>
        <DialogTitle className=' text-center text-5xl font-bold'>Actions</DialogTitle>
        <Button onClick={handleClose} className=' !absolute  top-0 right-0 w-fit'>X</Button>
        <DialogActions>
            <Button onClick={()=>mutate(values?._id)} >Delete Event</Button>
            <Button onClick={()=>setEdit(true)}>Edit Event</Button>
        </DialogActions>
        </div>
    </Dialog>
    <EditEventFormDialog open={openEdit} handleClose={()=>setEdit(false)} values={values}/>
    </>

  )
}

export default ActionDialog