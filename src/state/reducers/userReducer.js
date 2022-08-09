import { createSlice } from "@reduxjs/toolkit";
const userDataFromStorage=localStorage.getItem("userInfo ")? JSON.parse(localStorage.getItem("userInfo")):{userName:'',userStatus:false}
const initialState = {
  
  error:'',

  userData:userDataFromStorage
  
};
const userDetails = {
  userName: "user",
  password: "password",
};
const userSlice = createSlice({
  name: "User",
  initialState,
  reducers: {
    userChecking: (state, action) => {
      console.log(action.payload, "action payload");
      const { userName, password } = action.payload;
      if(userName===userDetails.userName && password===userDetails.password){
       localStorage.setItem("userInfo", JSON.stringify({userName:userName,userStatus:true}))
   state.userData={userName:userName,userStatus:true}
    
      }
      else{
        state.error="invalid credentials"
      }
    },
    logOut:(state,action)=>{

      state.userData={};
      localStorage.removeItem('userInfo')
    }
    
  },
});

export const { userChecking,logOut } = userSlice.actions;

export default userSlice.reducer;
