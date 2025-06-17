
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface Item { 
    id: string,
    imagePath: string,
    title: string,
    amount: number,
    price: number,
    quantity: number,
}


type CartState = {
    items: Item[]
}

const initialState: CartState = {
    items: [],
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem: (state, action: PayloadAction<Item>) => {
            state.items.push(action.payload)
        },
        clearCart: (state) => {
            state.items = []
        },
    },
})

export const { addItem, clearCart } = cartSlice.actions
export default cartSlice.reducer
