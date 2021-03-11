import React, { useState } from 'react'
import {
    FormControl,InputLabel,Select
} from '@material-ui/core';

/*
:: S A B E E R ::
PROPS
disabled = false
name = eg. age
label = eg. Student Age
value = eg. 109
options = [{id,value}]
onChange = Function(e)
*/

const FcSelect = (props) => {

    const [value, setValue] = useState(props.value == null || props.value === '' ? 0 :props.value)

    return (
        <FormControl 
            style={props.style && props.style}
            variant="outlined"
            disabled={props.disabled == undefined ? false : props.disabled}
            fullWidth 
            size="small">
            <InputLabel htmlFor="outlined-age-native-simple">{props.label}</InputLabel>
            {props.options.length > 0 && <Select
            name={props.name}
                onChange={(e) => {
                    setValue(e.target.value);
                    props.onChange(e);
                }}
                size="small"
                native
                value={value}
                label={props.label}>
                    <option value="0">None</option>
                {props.options.map((option,i)=>{
                return <option key={`option-${option.id}`} value={option.id}>{option.name || option.value}</option>
                })}
            </Select>}
        </FormControl>
    )
}

export default FcSelect