/* CREATED BY - SABEER */
import React, { useEffect,useState } from 'react';
import qs from 'qs'
import DialogWrapper from '../../../../common/Dialog/DialogWrapper'
import AddIcon from '@material-ui/icons/Add';
import { userServices } from '../../../../services/Services'
import EditIcon from '@material-ui/icons/Edit'
import FcTextField from '../../../../common/Form/FcTextField';
import FcSelect from '../../../../common/Form/FcSelect';

const VendorCategoryDialog = (props) => {

    const [state, setState] = useState(props.type === 'edit' ? props.category : {
        name:'',
       
    })
    

    const resetState = () => {
        if (props.type === "add") {
            setState({
                name:'',
                
            })
        }
    }

    const onPositiveClick = (setOpen, setShowProgress, setError) => {

        setShowProgress(true);
        const endpoint = `/api/v1/supplier/categories${props.type === 'edit' ? "/" + props.category.id : ""}`
        const data = qs.stringify({ name: state.name, parentId:props.parentId })
        console.log(data)

        userServices
            .postReq(data, endpoint)
            .then((val) => {
                if (val.isSuccess) {
                    setShowProgress(false);
                    setOpen(false);
                    resetState();
                    props.onChanged();
                } else {
                    setShowProgress(false);
                    setError(val.message);
                }
            })
    }

   

    const handleChange = (e) => {
        setState({...state, [e.target.name]:e.target.value})
    }

    return (
        <DialogWrapper
            dialogTitle={props.type === "add" ? "NEW CATEGORY" : "EDIT CATEGORY"}
            launchText={props.type === "add" ? "ADD CATEGORY" : null}
            launchIcon={props.type === "edit" ? <EditIcon fontSize="small" />: null}
            launchButtonStartIcon={props.type === "add" && <AddIcon fontSize="small" />}
            launchButtonColor="primary"
            onPositiveClick={onPositiveClick}
            onNegativeClick={resetState}>

            <FcTextField name="name" value={state.name} label="NAME" onChange={handleChange} />
            {/* <FcSelect style={{ marginTop: 20 }} name="formId" value={state.formId == null ? 0:state.formId} label="Category Form" options={forms} onChange={(e) => { handleChange(e); }} /> */}

        </DialogWrapper>
    )
}
export default VendorCategoryDialog