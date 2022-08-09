import axios from 'axios'
import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
const initialState = {
  categories:[],
  jokes:{},
  error:'',


  
};
export const getCategories=createAsyncThunk(
"joke/categories/get",async(_,{rejectWithValue})=>{
    try{
const {data}=await axios.get('https://api.chucknorris.io/jokes/categories');
console.log(data)
return data
    }
    catch(err){
        console.log(err);

    }
}
)
export const getJokes=createAsyncThunk('jokese/get',async(category,{rejectWithValue})=>{
    console.log("getjokes")
    try{
        const {data}=await axios.get(`https://api.chucknorris.io/jokes/random?category=${category}`);
        console.log(data)
        return data
            }
            catch(err){
                console.log(err);
        //return rejectWithValue(err.response.data)
            }
})

const jokeSlice = createSlice({
  name: "joke",
  initialState,
  extraReducers: {
    [getCategories.fulfilled]:(state,action)=>{
        state.categories=action.payload

    },
    [getCategories.rejected]:(state,action)=>{
state.error=action.payload
    },
    [getJokes.fulfilled]:(state,action)=>{
        state.jokes=action.payload

    },
    [getJokes.rejected]:(state,action)=>{
        state.error=action.payload

    },
 
  }
});



export default jokeSlice.reducer;
