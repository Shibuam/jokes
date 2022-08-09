import React,{useEffect} from "react";
import { TextField } from "@material-ui/core";
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

useEffect(()=>{
  if(user){
  navigate('/home')
  }
},[])


  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField id="outlined-basic" label="User Name" variant="outlined" {...register("userName",{ required: true })}/>
        <TextField id="outlined-basic" label="Password" variant="outlined" {...register("password",{ required: true, minLength: 3 })} />
        <input type="submit" />
      </form>
    </div>
  );
};

export default LoginCom;
