import React from 'react'
import { TableRow , TableCell } from '@material-ui/core'
import FcSelectField from '../../../../../common/Form/FcSelectField'
import FcDateField from '../../../../../common/Form/FcDateField'
const TableSectionRow = () => {
    const TableHeadings = ["SL.NO" ,"CATEGORY", "BRAND" , "ITEM", "ARTICLE NUMBER" , "UNIT" , "COLOR","SIZE","QUANTITY","RATE","MRP","AMOUNT","EXPECTED DEL. DATE"]
    return (
        <>
        <TableRow>
           <TableCell >1</TableCell>
           <TableCell ><FcSelectField val={TableHeadings[1]}/></TableCell>
           <TableCell ><FcSelectField val={TableHeadings[2]}/></TableCell>
           <TableCell ><FcSelectField val={TableHeadings[3]}/></TableCell>
           <TableCell ><FcSelectField val="ARTICLE"/></TableCell>
           <TableCell ><FcSelectField val={TableHeadings[5]}/></TableCell>
           <TableCell ><FcSelectField val={TableHeadings[6]}/></TableCell>
           <TableCell ><FcSelectField val={TableHeadings[7]}/></TableCell>
           <TableCell ><FcSelectField val="QTY"/></TableCell>
           <TableCell ><FcSelectField val={TableHeadings[10]}/></TableCell>
           <TableCell ><FcSelectField val="DISC%"/></TableCell>
           <TableCell ><FcSelectField val={TableHeadings[12]}/></TableCell>
           <TableCell ><FcDateField val="DATE"/></TableCell>     
        </TableRow>
             
        </>
    )
}

export default TableSectionRow
