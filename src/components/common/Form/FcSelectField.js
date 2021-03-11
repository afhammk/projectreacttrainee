import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';



const FcSelectField = (props) => {
    console.log(props)
    const [state, setState] = React.useState({
        age: '',
        name: 'hai',
    });

    const handleChange = (event) => {
        const name = event.target.name;
        setState({
        ...state,
        [name]: event.target.value,
        });
    };
    
    return (
        <>
         
            <FormControl required style={{width:130 , fontSize:10}} >
                <InputLabel htmlFor="age-native-required">{props.val}</InputLabel>
                <Select
                native
                value={state.age}
                onChange={handleChange}
                name="age"
                inputProps={{
                    id: 'age-native-required',
                }}
                >
                <option aria-label="None" value="" />
                <option value={10}>Ten</option>
                <option value={20}>Twenty</option>
                <option value={30}>Thirty</option>
                </Select>
                <FormHelperText>Required</FormHelperText>
            </FormControl>
        </>
    )
}

export default FcSelectField
