import React,{useEffect,useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getCategories, getJokes } from '../state/reducers/JokeReducer'
import {Checkbox,FormGroup,FormControlLabel, TextField,Button} from '@material-ui/core'
import { useNavigate } from 'react-router-dom'

const HomeCom = () => {
 
  const navigate=useNavigate()
  const [category,setCategory]=useState('')
    const dispatch=useDispatch()
    useEffect(()=>{
      dispatch(getCategories())
},[dispatch])

useEffect(()=>{
if(category.length){
  dispatch(getJokes(category))
}
},[category,dispatch])

const user=useSelector((state)=>state.userReducer.userData.userStatus)

useEffect(()=>{
  if(!user){
  navigate('/')
  }
},[])

const logOutHandler=()=>{
  dispatch()
}

let categories=useSelector((state)=>state.jokeReducer.categories)
let jokes=useSelector((state)=>state.jokeReducer.jokes)
console.log(jokes,"jokes")
  return (
    <div>
      <Button onClick={()=>logOutHandler()}> Log out</Button>
         <FormGroup>
      {categories.map((element)=>
    
       <FormControlLabel control={<Checkbox />} label={element} onChange={()=>setCategory(element)} />
    
       )}
       </FormGroup>

  {jokes && <TextField value={jokes.value}/>}
    </div>
  )
}

export default HomeCom