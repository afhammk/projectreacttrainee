import React from 'react'
import DeleteDialog from '../../../../common/Dialog/DeleteDialog';
import { TableCell,TableRow} from '@material-ui/core';
import CategoryDialog from '../components/CategoryDialog'

const CategoryRow = (props) => {
    return (
        <TableRow onClick={()=>{}}>
            <TableCell style={{paddingTop:0,paddingBottom:0}}><a href={`/categories/${props.category.id}`}>{props.category.name}</a></TableCell>
            <TableCell align="right" style={{paddingTop:0,paddingBottom:0,paddingRight:0}}>
            <CategoryDialog type="edit" category={props.category} parentId={props.parentId} onChanged={props.onChanged}/>
            <DeleteDialog disabled={props.category.childCount > 0} endPoint={`/api/v1/categories/${props.category.id}`} onDeleteSuccess={props.onChanged} message={`Delete ${props.category.name} ? You will not be able to undo it later.`}/>
            </TableCell>
        </TableRow>
    )
}

export default CategoryRow