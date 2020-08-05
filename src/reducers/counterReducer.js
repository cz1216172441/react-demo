import { createReducer } from '@reduxjs/toolkit'
import { TOTAL_NUMBER_DECREASE, TOTAL_NUMBER_INCREASE, TOTAL_NUMBER_RESET } from './../constants/ActionTypes'

const initialStatus = { sum: 0 }

export default createReducer(initialStatus, {
  [TOTAL_NUMBER_INCREASE]: (state) => ({ sum: state.sum + 1 }),
  [TOTAL_NUMBER_DECREASE]: (state) => ({ sum: state.sum - 1 }),
  [TOTAL_NUMBER_RESET]: (state, action) => ({ sum: state.sum - action.payload.number })
})