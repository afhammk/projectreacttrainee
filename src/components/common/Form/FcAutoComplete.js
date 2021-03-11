import React, { useState } from 'react'
import {
    TextField
} from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete'

/*
:: S A B E E R ::
PROPS
name = eg. colors
label = eg. Color
value = eg. 109
options = [{id,value}]
onChange = Function(e)
*/

const FcAutoComplete = (props) => {

    return (
        <Autocomplete
                style={{ marginTop: 20 }}
                name={props.name}
                multiple
                freeSolo
                id={"id-"+props.name}
                options={[]}
                getOptionLabel={(option) => option}
                defaultValue={props.values ? props.values : []}

                onChange={(e, values) => {
                    //console.log('onChange', values);
                    if(props.onChange){
                        props.onChange(props.name,values);
                    }
                }}

                onInputChange={(e, v) => {
                    //console.log('onInputChange', v);
                }}

                renderInput={(params) => (
                    <TextField {...params} variant="outlined" label={props.label} placeholder={props.label} />
                )}
            />
    )
}


export default FcAutoComplete