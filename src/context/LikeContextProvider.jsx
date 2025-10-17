import { useState } from "react";
import LikeContext from "./LikeContext";

const LikeContextProvider = ({ children }) => {
  const [likedPosts, setLikedPosts] = useState({});

  const toggleLike = (postId) => {
    setLikedPosts((prev) => ({
      ...prev,
      [postId]: !prev[postId],
    }));
  };

  return (
    <LikeContext.Provider value={{ likedPosts, toggleLike }}>
      {children}
    </LikeContext.Provider>
  );
};

export default LikeContextProvider;