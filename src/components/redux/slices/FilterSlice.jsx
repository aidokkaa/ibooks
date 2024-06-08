import {createSlice} from '@reduxjs/toolkit';

const initialState={
    trand:0
}
  export const filterSlice = createSlice({
    name:'filter',
    initialState:initialState,
    reducers:{
        setTrand(state,action){
            console.log(action);
            state.trand = action.payload
        }
        
    }

  })

  export const{setTrand} = filterSlice.actions;
  export default filterSlice.reducer