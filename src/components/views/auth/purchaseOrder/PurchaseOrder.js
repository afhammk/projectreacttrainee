import React,{useEffect,useState} from 'react';
import {Paper, TableContainer, Table, TableBody, TableCell,
    TableHead, TableRow,Typography,Container, Box , Button } from '@material-ui/core';

import TitleWrapper from '../../../common/TitleWrapper';
import FormSection from './formSection/FormSection'
import TableSection from './tableSection/TableSection'

const PurchaseOrder = () => {
    const pageTitle = 'New Purchase Order';

    // const dispatch = useDispatch();

    const [state, setState] = useState({
        items: [],
        pageTitle:pageTitle
    });


    return (
        <div >
            
            <Container >
                <TitleWrapper title={state.pageTitle}/>
                <FormSection />
                <TableSection/>     
            </Container>
            
        </div>
    )
}

export default PurchaseOrder
