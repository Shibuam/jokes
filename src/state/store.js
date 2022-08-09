import { configureStore } from '@reduxjs/toolkit'
import userReducer from './reducers/userReducer'
import JokeReducer from './reducers/JokeReducer'
export const store = configureStore({
  reducer: {
    userReducer,
    jokeReducer:JokeReducer
  },
})