import * as types from '../constants/ActionTypes'
import { createAction } from '@reduxjs/toolkit'

export const increaseTotalNumber = createAction(types.TOTAL_NUMBER_INCREASE);
export const decreaseTotalNumber = createAction(types.TOTAL_NUMBER_DECREASE);
export const resetTotalNumber = createAction(types.TOTAL_NUMBER_RESET, (number) => ({ payload: number }));
