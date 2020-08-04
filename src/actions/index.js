import * as types from '../constants/ActionTypes'

export const increaseTotalNumber = () => ({ type: types.TOTAL_NUMBER_INCREASE });
export const decreaseTotalNumber = () => ({ type: types.TOTAL_NUMBER_DECREASE });
export const resetTotalNumber = () => ({ type: types.TOTAL_NUMBER_RESET });
