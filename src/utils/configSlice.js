import { createSlice } from "@reduxjs/toolkit";

const configSlice = createSlice({
    name:"config",
    initialState:{
        lang:"en",
    },
    reducers:{
        changeLanguge:(state, action)=>{
            state.lang = action.payload;
        }
    }
})

export const{changeLanguge} = configSlice.actions;
export default configSlice.reducer;