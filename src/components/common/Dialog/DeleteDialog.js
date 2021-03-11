import React from 'react';
import DialogWrapper from './DialogWrapper'
import DeleteIcon from '@material-ui/icons/Delete';
import {userServices} from '../../services/Services'
import {DialogContentText} from '@material-ui/core'

/*
    :: S A B E E R ::
    endPoint = /url-path-to-delete
    message (Optional) = message to show
    launchIcon (Optional) = Default = Trash Icon
*/
const DeleteDialog = (props) => {

    const onPositiveClick = (setOpen, setShowProgress) => {

        setShowProgress(true);
        userServices
        .deleteReq(props.endPoint)
        .then((val) => {
            setShowProgress(false);
            setOpen(false);
            props.onDeleteSuccess();
        })
    }

    return(
        <DialogWrapper 
            disabled={props.disabled}
            dialogTitle="Confirm Delete"
            launchIcon={props.launchIcon == undefined ? <DeleteIcon fontSize="small" /> : props.launchIcon}
            launchButtonColor="primary"
            positiveText="DELETE"
            onPositiveClick={onPositiveClick}>
        <DialogContentText id="alert-dialog-description">
            {props.message != null ? props.message : 'Are you sure deleting the item. You will not able to get back it later'}
          </DialogContentText>

        </DialogWrapper>
    )
}
export default DeleteDialog