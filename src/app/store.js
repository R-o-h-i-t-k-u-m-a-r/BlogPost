import { configureStore } from '@reduxjs/toolkit'
import blogReducer from '../features/blog/blogSlice'

export default configureStore({
  reducer: {
    // Add your reducers here
    blog: blogReducer, // Example reducer
  }
})