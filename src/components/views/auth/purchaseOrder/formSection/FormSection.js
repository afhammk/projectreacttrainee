import React from 'react'
import { Grid , Table , TableRow , TableCell , TextField, InputLabel , Button  } from '@material-ui/core'
import FcSelectField from '../../../../common/Form/FcSelectField'
import PrintIcon from '@material-ui/icons/Print';
import FcDateField from '../../../../common/Form/FcDateField'

const FormSection = () => {
    const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };
    
    return (
        <>
        <Grid container justify="flex-end">
            <Button  variant="contained" color="primary" startIcon={<PrintIcon/>} style={{marginRight:15}}>PRINT</Button>
        </Grid>
        <Table aria-label="simple table" size="large" >
            <TableRow >
                <TableCell align="left" style={{borderBottom:"none" }}>
                    <InputLabel focused="true" style={{marginLeft:15}} >Date</InputLabel>                   
                    <TableCell style={{borderBottom:"none" }}><FcDateField /></TableCell>
                </TableCell>
                <TableCell align="left" style={{borderBottom:"none" }}>
                    <InputLabel focused="true" style={{marginLeft:15}}>Supplier</InputLabel>
                    <TableCell style={{borderBottom:"none" }}><FcSelectField /></TableCell>
                </TableCell>
                <TableCell align="left" style={{borderBottom:"none" }}>
                <InputLabel focused="true" style={{marginLeft:15}}>Recieving Warehouse</InputLabel>
                    <TableCell style={{borderBottom:"none" }}><FcSelectField /></TableCell>
                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell align="left">
                    <InputLabel focused="true" style={{marginLeft:15}}>Expected delivery Note Date</InputLabel> 
                    <TableCell style={{borderBottom:"none" }}><FcDateField /></TableCell>
                </TableCell>
                <TableCell align="left">
                <InputLabel focused="true" style={{marginLeft:15}}>Cost Centre</InputLabel>
                    <TableCell style={{borderBottom:"none" }}><FcSelectField /></TableCell>
                </TableCell>
                <TableCell align="left">
                <InputLabel focused="true" style={{marginLeft:15}}>Purchase Plan No.</InputLabel>
                    <TableCell style={{borderBottom:"none" }}><FcSelectField /></TableCell>
                </TableCell>
            </TableRow>
        </Table>
        
        </>
    )
}

export default FormSection
