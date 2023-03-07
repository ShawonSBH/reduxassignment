import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const itemsSlice = createSlice({
  name: "items",
  initialState: [
    {
      id: uuidv4(),
      name: "Bread",
    },
    {
      id: uuidv4(),
      name: "Milk",
    },
    {
      id: uuidv4(),
      name: "Eggs",
    },
  ],
  reducers: {
    addItem: (state, action) => {
        state.push(action.payload);
    },
    deleteItem: (state, action) => {
        return state.filter(item => item.id !== action.payload);
    }
  }
});

export const {addItem, deleteItem} = itemsSlice.actions;

export default itemsSlice.reducer;