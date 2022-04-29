import { useReducer,createContext } from "react";
const Store = createContext()


const initialCart = {
    cart: {
        cartItems: localStorage.getItem('cartItem') ? JSON.parse(localStorage.getItem('cartItem')) : []
    }
}

function cartReducer(state,action){
    switch(action.type){
        case 'ADD_CART_ITEMS':
            const newItems = action.payload
            const existingItems = state.cart.cartItems.find((item)=>item._id === newItems._id)

            const cartItems = existingItems ? state.cart.cartItems.map((item)=>item._id === existingItems._id ? newItems: item): [...state.cart.cartItems, newItems]

            localStorage.setItem('cartItem', JSON.stringify(cartItems))
            return {...state, cart:{...state.cart, cartItems}}

        case 'CLEAR_CART_ITEMS':
            {
                return {...state, cart:{...state.cart, cartItems:[]}}
            }
            
        case 'REMOVE_CART_ITEMS':
            {
                const cartItems = state.cart.cartItems.filter((item)=>item._id !== action.payload._id)
                localStorage.setItem('cartItem', JSON.stringify(cartItems))
                return {...state, cart:{...state.cart, cartItems}}
            }
               
        default: 
            return state
            
    }
}

// =======================================================

const initialPayment = {
    paymentMethod : localStorage.getItem('paymentMethod') ? JSON.parse(localStorage.getItem('paymentMethod')) : ''
}

function paymentReducer(state,action){
    switch(action.type){
        case 'PAYMENT_METHOD':
            return {...state, paymentMethod: action.payload}
        default:
            return state
    }
}

const StoreProvider = (props)=>{
    const [state, dispatch] = useReducer(cartReducer, initialCart)
    const [paymentState, paymentDispatch] = useReducer(paymentReducer, initialPayment)

    const value = {state, dispatch,paymentState, paymentDispatch}
    return(
        <Store.Provider value={value}>
            {props.children}
        </Store.Provider>
    )
}

export {Store,StoreProvider}