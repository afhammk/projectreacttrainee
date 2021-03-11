/* eslint-disable no-use-before-define */
import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { useLocation } from "react-router-dom";



export default function ComboBox({data,type,onChange,data2,editable}) {  

  const location = useLocation();
  return (
    <>
    {location.pathname === "/subcategories" ? 
    <Autocomplete
      id="combo-box-demo"
      inputValue={data2 && data2.name}
      disabled = {type ==='category' && data2}
      options={data ? data : []}
      onChange={onChange(type)}
      getOptionLabel={(option) => option.name}  
      renderInput={(params) => <TextField {...params} placeholder= {location.pathname === "/items" ? 'Brands':'Category' }   variant="outlined" fullWidth />}
    /> :
    <Autocomplete
      id="combo-box-demo"
      options={data ? data : []}
      onChange={onChange(type)}
      getOptionLabel={(option) => option.name}  
      renderInput={(params) => <TextField {...params} placeholder= {location.pathname === "/items" ? 'Brands':'Category' }   variant="outlined" fullWidth />}
    />
  }
  </>
  );
}
