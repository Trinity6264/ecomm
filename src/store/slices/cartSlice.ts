
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type CartState = {
    items: string[]
}

const initialState: CartState = {
    items: [],
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem: (state, action: PayloadAction<string>) => {
            state.items.push(action.payload)
        },
        clearCart: (state) => {
            state.items = []
        },
    },
})

export const { addItem, clearCart } = cartSlice.actions
export default cartSlice.reducer
