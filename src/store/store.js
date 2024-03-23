import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { counterSLice } from './slice'

const storeRoot = combineReducers({
        counter:counterSLice.reducer
})


export default configureStore({reducer:storeRoot})