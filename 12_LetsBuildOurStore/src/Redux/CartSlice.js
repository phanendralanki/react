import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name:'cart',
    initialState: {
        items: []
    },
    reducers:{
        addItem:(state,action) => {
            //mutatiting/updating the state here
            state.items.push(action.payload);
        },
        removeItem:(state) => { //we don't need action here
            state.items.pop();
        },
        clearCart: (state) => {
            state.items.length = 0; //to make our cart empty
        }
    }
});

// structure
/* 
{
    actions:{
        addItem
    },
    reducer
}

*/

export const {addItem,removeItem,clearCart} = cartSlice.actions;
export default cartSlice.reducer;