import React, { useState } from 'react'
import {
    TextField
} from '@material-ui/core';

/*
:: S A B E E R ::
PROPS
disabled = false
name = eg. age
label = eg. Student Age
value = eg. 109
onChange = Function(e)
*/

const FcTextField = (props) => {

    const [value, setValue] = useState(props.value == null ? "" : props.value)

    return (
        <TextField 
            disabled={props.disabled === undefined ? false : props.disabled}
            name={props.name} 
            label={props.label} 
            value={value}
            variant="outlined" 
            fullWidth 
            onChange={(e) => {
                setValue(e.target.value)
                props.onChange(e);
            }}
        />
    )
}

export default FcTextField