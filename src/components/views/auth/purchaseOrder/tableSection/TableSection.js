import React from 'react'
import { Grid ,TableCell , TableBody ,TableHead , Table , TableRow , Typography , Paper , TableContainer , Button ,TextField } from '@material-ui/core'
import TableSectionRow from './tableSectionRow/TableSectionRow'
import SaveIcon from '@material-ui/icons/Save';
const TableSection = () => {
    const TableHeadings = ["SL.NO" ,"CATEGORY", "BRAND" , "ITEM", "ARTICLE NUMBER" , "UNIT" , "COLOR","SIZE","QUANTITY","RATE","MRP","AMOUNT","EXPECTED DEL. DATE"]
    return (
        <>
        <TableContainer component={Paper}  >
            <Table >
                <TableHead >
                    <TableRow>
                        {TableHeadings.map((heads)=>(
                            <TableCell className="font-bold">{heads}</TableCell>
                        ))
                        }
                    </TableRow>   
                </TableHead>
                <TableBody >
                     <TableSectionRow/>  
                </TableBody>
            </Table>  
        </TableContainer>
        <Grid container justify="space-between" alignItems="center" style={{paddingTop:40}}>
                <Grid item>
                <TextField
                    id="outlined-multiline-static"
                    label="Enter Description"
                    multiline
                    rows={4}
                    defaultValue="Enter Description"
                    variant="outlined"
                    fullWidth
                />
                </Grid>
                <Grid item >
                    <Button variant="contained" color="secondary" style={{marginRight:20}}>CANCEL</Button>
                    <Button variant="contained" color="primary" startIcon={<SaveIcon/>} style={{marginRight:20}}>SAVE</Button>
                </Grid >
        </Grid>
        </>
    )
}

export default TableSection
