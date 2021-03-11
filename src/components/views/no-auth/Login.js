import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { FormControlLabel, Grid, Collapse, TextField, Paper, FormGroup, Button, Divider } from '@material-ui/core';
import {Link} from 'react-router-dom'
import LoginBg from '../../assets/images/bg-img.jpg'
import { useSelector, useDispatch } from 'react-redux'
import { login } from '../../redux/actions'
import {userServices} from '../../services/Services';
import {withRouter} from 'react-router-dom';
import Alert from '../../common/Alert'

const useStyles = makeStyles((theme) => ({
    LoginBg:{
        background: `linear-gradient(to bottom,rgba(1,24,71,0.8) 0%,rgba(1,24,71,0.8) 100%),url(${LoginBg})`,
        backgroundPosition:"center",
        height:"100vh",
        backgroundSize:"cover",
        backgroundRepeat:"no-repeat",
        '& .MuiGrid-container':{
            justifyContent:"flex-end"
        },
    },
    Paper: {
      padding:"40px 30px",
      height:"100vh",
      borderRadius:0,
      textAlign:"center",
      '& .MuiTextField-root':{
          marginTop:30,
      },
      '& .MuiButton-containedPrimary':{
        float:"center",
        marginTop:"20px",
       '& .MuiInputBase-formControl':{
           width:'100%'
       },
    }
    },
  }));

 function Login(props) {
    const dispatch = useDispatch()
    const classes = useStyles();
    const [state, setstate] = React.useState({
        email: "",
        password: "",
        emailError:false,
        passwordError: false,
        error:false,
        message:""
      });
      // Check email validate
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    // on submit 
    const submit = ()=> {
      const endpoint = "/api/v1/login";
      const data = {
        email:state.email,
        password:state.password
      }
      userServices.services(data,endpoint)
      .then(res =>{ if(res.status === "success"){
       return localStorage.setItem("token", res.user.token),props.history.push("/")
      }
      else{
        setstate({...state,error:true,message:res.message})
        setTimeout(() => {
          setstate({...state,error:false,message:""})
        }, 2000);
      }
    }
        
        
        
        )
    }
    React.useEffect(() => {
      if(localStorage.getItem("token")){
        props.history.push('/')
       }
       
    }, [])
    return (
        
        <div className={classes.LoginBg}>
          <Collapse in={state.error}>
            <Alert message={state.message}/>
          </Collapse>
            <Grid container>
                <Grid item lg={4}>
                    <Paper className={classes.Paper}>
                        <div>
                        <img className="logo-img mx-auto mt-10" src="https://techgater.com/images/logo.png" width="50%" alt="Logo" />
                        </div> 
                        <TextField fullWidth variant="outlined"
                        label="Email"
                        type="email"
                        helperText = {state.emailError && !re.test(state.email) && 'Email is not valid'}
                        error = {state.emailError && !re.test(state.email)}
                        onChange = {e => setstate({...state,email:e.target.value})}
                        autoComplete="email"
                        onFocus={()=>setstate({...state,emailError:true})}
                        />
                        <TextField fullWidth 
                        variant="outlined" 
                        label="Password" 
                        type="password"
                        onChange={(e) => setstate({ ...state, password:e.target.value })}
                        value={state.password}
                        autoComplete="password"
                        onFocus={()=> setstate({...state,passwordError:true})}
                        helperText = {state.passwordError && state.password.length < 5  && 'Password must be 5 chars'}
                        error = {state.passwordError && state.password.length < 5}
                        />
                            
                        <Button disabled={!state.email || !state.password} onClick={submit} size="large" className="rounded" variant="contained" color="primary">Login</Button>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    )
};
export default withRouter(Login);
