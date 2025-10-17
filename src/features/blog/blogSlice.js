import { createSlice, nanoid } from "@reduxjs/toolkit";

export const blogSlice = createSlice({
  name: "blog",
  initialState: {
    posts: [
      {
        id: '1',
        title: "First Post",
        categories: "This is the excerpt for the first post.",
        content: "This is the full content of the first post.",
      },
    ],
  },
  reducers: {
    addPost: (state, action) => {
      const blog = {
        id: nanoid(),
        title: action.payload.title,
        categories: action.payload.categories,
        content: action.payload.content,
      };
      state.posts.push(blog);
    },
    deletePost: (state, action) => {
      state.posts = state.posts.filter((post) => post.id !== action.payload.id);
    },
    editPost: (state, action) => {
      const { id, title, categories, content } = action.payload;
      const existingPost = state.posts.find((post) => post.id === id);
      if (existingPost) {
        existingPost.title = title;
        existingPost.categories = categories;
        existingPost.content = content;
      }
    },
  },
});

export const { addPost, deletePost, editPost } = blogSlice.actions;

export default blogSlice.reducer;
