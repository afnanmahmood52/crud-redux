import React from 'react'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import {connect} from 'react-redux'
import { updateTodo } from './actions/actionCreator'

import UpdateIcon from '@material-ui/icons/Update';


function UpdateTodo(props) {
    const [open, setOpen] = React.useState(false);

    const [title, settitle] = React.useState(props.title)
    
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleUpdate = () =>{
        // Check if the transaction amount or the transaction value field
        // is empty We should return in that case
    
        if(!title)
        {
          alert("No of Times can't be empty!!!")
          return        
        }

        props.dispatch(
          updateTodo(
            props.id, title
          )
        )

        //console.log(title)
        // console.log(props.id)
        handleClose()
    }

    const titleChange =(event)=>{
        event.preventDefault()
        settitle(event.target.value)
    }

    





    return (
        <div>
      <Button className="delete_btn" variant="contained" color="primary" startIcon={<UpdateIcon />} onClick={handleClickOpen}>UPDATE</Button>

      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Update the Todo</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please enter the details which you need to update.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="title"
            label="TodoName"
            
            fullWidth
            defaultValue={title}
            onChange={titleChange}
          />
          
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary" variant="contained">
            Cancel
          </Button>
          <Button onClick={handleUpdate} color="primary" variant="contained">
            Update
          </Button>
        </DialogActions>
      </Dialog>
            
        </div>
    )
}

const mapStateToProps = (state)=>{
  return {
    todos : state.todos
  }
}

export default connect(mapStateToProps)(UpdateTodo);