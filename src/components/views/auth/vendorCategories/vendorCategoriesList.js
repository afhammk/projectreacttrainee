import React,{useEffect,useState} from 'react';
import {Paper, TableContainer, Table, TableBody, TableCell,
    TableHead, TableRow,Typography,Container, Box} from '@material-ui/core';
import { useDispatch } from "react-redux";
import { setLoader } from "../../../redux/actions";
import {
    useParams
  } from "react-router-dom";
import { userServices } from "../../../services/Services";
import VendorCategoryRow from './components/VendorCategoryRow';
import VendorCategoryDialog from './components/VendorCategoryDialog'
import TitleWrapper from '../../../common/TitleWrapper';

const VendorCategoriesList = (props) => {

    const pageTitle = 'Categories';

    let { id } = useParams();

    const dispatch = useDispatch();

    const [state, setState] = useState({
        items: [],
        
        pageTitle:pageTitle
    });

    const load = () => {
        const endpoint = `/api/v1/supplier/categories?order=desc&sort=name`;
        dispatch(setLoader(true))
        userServices.getReq(endpoint).then((val) => {
            dispatch(setLoader(false))
            setState({...state,items:val.items,pageTitle:"Vendor Categories"})
        });
    }

    useEffect(()=>{
        //Do Api Request Here
        load();
    },[])

    return(
        <div className="forms-main">
            <Container fixed>
            <TitleWrapper title={state.pageTitle} data={[...(id === 0 || id === undefined ? [] : [{'name':'VendorCategories','url':'/vendorCategories'}])]}/>
                <TableContainer component={Paper}>
                    <Table aria-label="simple table" size="small">
                        <TableHead>
                            <TableRow>
                            <TableCell className="font-bold">NAME</TableCell>
                            <TableCell className="font-bold"  align="right"> <VendorCategoryDialog type="add" parentId={id === undefined ? 0 : 0} onChanged={load}/></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                        {state.items && state.items.map((item) => (
                            <VendorCategoryRow category={item} key={`category-${item.id}`} parentId={id === undefined ? 0 : id} onChanged={load}/>
                        ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Container>
        </div>
    )
}

export default VendorCategoriesList;