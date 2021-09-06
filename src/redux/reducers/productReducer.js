import { ADD_TO_CART } from '../actions/actionTypes'
import initialState from './initialState'

export default function productReducer(state = initialState.cartCount, action) {
  switch (action.type) {
    case ADD_TO_CART:
      return state + 1
    default:
      return state
  }
}
