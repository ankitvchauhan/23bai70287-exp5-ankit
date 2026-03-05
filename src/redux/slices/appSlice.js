import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items:[]
};

const appSlice = createSlice({

  name:"app",

  initialState,

  reducers:{

    addItem:(state,action)=>{
      state.items.push({
        id:Date.now(),
        name:action.payload,
        completed:false
      });
    },

    toggleItem:(state,action)=>{
      const item = state.items.find(i=>i.id===action.payload);
      if(item) item.completed=!item.completed;
    },

    deleteItem:(state,action)=>{
      state.items = state.items.filter(i=>i.id!==action.payload);
    }

  }

});

export const {addItem,toggleItem,deleteItem} = appSlice.actions;

export default appSlice.reducer;