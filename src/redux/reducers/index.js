import { combineReducers } from 'redux'
import colors from './colorsReducer'
import brands from './brandsReducer'
import prices from './priceReducer'
import product from './productReducer'

const rootReducer = combineReducers({
  prices,
  brands,
  colors,
  product,
})

export default rootReducer
