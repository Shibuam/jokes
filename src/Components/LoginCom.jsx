import React,{useEffect} from "react";
import { TextField,Card,Grid,Button } from "@material-ui/core";
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from 'react-redux'
import {userChecking}from '../state/reducers/userReducer'
import {NavigationType, useNavigate}from 'react-router-dom'

const LoginCom = () => {

  const navigate=useNavigate()
  const dispatch=useDispatch()
  const {
    register,
    handleSubmit,
    
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => 
 { console.log(data);
dispatch(userChecking(data))
navigate('/home')
}
const user=useSelector((state)=>state.userReducer.userData.userStatus)
console.log(user,"user")
useEffect(()=>{
  if(user){
  navigate('/home')
  }
},[])


  return (
    <div>
      <Grid container style={{display:'flex', content:'center'}}>
      <form onSubmit={handleSubmit(onSubmit)}>
          <Card >
        <Grid item  xs={12} sm={6} style={{alignContent:'center'}}>
            <h3>Login Here</h3>
            {user===false && <p>Invalid Credential</p>}
        <TextField id="outlined-basic" label="User Name" variant="outlined" {...register("userName",{ required: true })}/>
        <TextField id="outlined-basic" label="Password" variant="outlined" type='password' {...register("password",{ required: true, minLength: 3 })} />
        <Button variant="contained" type="submit" > Click Here</Button>
      </Grid>
        </Card>
      </form>
      </Grid>
    </div>
  );
};

export default LoginCom;
