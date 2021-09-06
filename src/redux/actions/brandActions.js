import { SET_BRANDS, RESET_FILTERS } from './actionTypes'

export function setBrands(brands) {
  return { type: SET_BRANDS, brands }
}

export function resetBrands() {
  return { type: RESET_FILTERS }
}
