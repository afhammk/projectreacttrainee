import React,{useEffect,useState} from 'react';
import {Paper, TableContainer, Table, TableBody, TableCell,
    TableHead, TableRow,Typography,Container, Box} from '@material-ui/core';
import { useDispatch } from "react-redux";
import { setLoader } from "../../../redux/actions";
import {
    useParams
  } from "react-router-dom";
import { userServices } from "../../../services/Services";
import CategoryRow from './components/CategoryRow';
import CategoryDialog from './components/CategoryDialog'
import TitleWrapper from '../../../common/TitleWrapper';

const CategoriesList = (props) => {

    const pageTitle = 'Categories';

    let { id } = useParams();

    const dispatch = useDispatch();

    const [state, setState] = useState({
        items: [],
        categoryTree:[],
        pageTitle:pageTitle
    });

    const load = () => {
        const endpoint = `/api/v1/categories${ id !== undefined && id !== '' ?  '/'+id :''}?order=desc&sort=name`;
        dispatch(setLoader(true))
        userServices.getReq(endpoint).then((val) => {
            dispatch(setLoader(false))
            setState({...state,items:val.items,categoryTree:val.category.categoryTree,pageTitle:val.category.id == 0 ? pageTitle : val.category.name})
        });
    }

    useEffect(()=>{
        //Do Api Request Here
        load();
    },[])

    return(
        <div className="forms-main">
            <Container fixed>
            <TitleWrapper title={state.pageTitle} data={[...(id === 0 || id === undefined ? [] : [{'name':'Categories','url':'/categories'}]),...state.categoryTree.map((item)=> {return {'name':item.name,'url':`/categories/${item.id}`}})]}/>
                <TableContainer component={Paper}>
                    <Table aria-label="simple table" size="small">
                        <TableHead>
                            <TableRow>
                            <TableCell className="font-bold">NAME</TableCell>
                            <TableCell className="font-bold"  align="right"> <CategoryDialog type="add" parentId={id === undefined ? 0 : id} onChanged={load}/></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                        {state.items && state.items.map((item) => (
                            <CategoryRow category={item} key={`category-${item.id}`} parentId={id === undefined ? 0 : id} onChanged={load}/>
                        ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Container>
        </div>
    )
}

export default CategoriesList;