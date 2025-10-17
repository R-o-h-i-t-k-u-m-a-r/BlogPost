import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link, useNavigate } from "react-router";
import { Button, Container } from "react-bootstrap";
import { deletePost, editPost } from "../../features/blog/blogSlice";

import { useContext } from "react";
import LikeContext from "../../context/LikeContext";

function BlogDetails() {
  // const [liked, setLiked] = useState(false);

  const [isEditable, setIsEditable] = useState(false);

  const { id } = useParams();
  const blogs = useSelector((state) => state.blog.posts);
  const blog = blogs.find((b) => b.id === id);
  const { likedPosts, toggleLike } = useContext(LikeContext);
  const isLiked = blog ? likedPosts[blog.id] || false : false;


  //console.log("liked post are ", likedPosts);
  

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const [editableBlog, setEditableBlog] = useState({ ...blog });

  const handleLike = () => {
    toggleLike(blog.id);
  };

  const handleEdit = () => {
    setIsEditable(true);
  };

  const handleSave = () => {
    dispatch(editPost(editableBlog));
    setIsEditable(false);
  };

  const handleDelete = () => {
    dispatch(deletePost({ id: blog.id }));
    navigate(-1);
  };
  if (!blog) {
    return (
      <Container
        fluid
        className="p-3 d-flex flex-column align-items-center"
        style={{
          background: "linear-gradient(135deg, #22223b 60%, #4a4e69 100%)",
          color: "#f2e9e4",
          minHeight: "100vh",
          position: "relative",
        }}
      >
        <Link
          to="/"
          style={{
            textDecoration: "none",
            color: "#007bff",
            fontWeight: "bold",
          }}
        >
          Back
        </Link>
        <h2>Blog not found</h2>
      </Container>
    );
  }

  return (
    <Container
      fluid
      className="p-3 d-flex flex-column align-items-center"
      style={{
        background: "linear-gradient(135deg, #22223b 60%, #4a4e69 100%)",
        color: "#f2e9e4",
        minHeight: "100vh",
        position: "relative",
      }}
    >
      <div style={{ position: "absolute", top: 20, left: 20 }}>
        <Link
          to={-1}
          onClick={(e) => {
            e.preventDefault();
            navigate(-1);
          }}
          style={{
            textDecoration: "none",
            color: "#9a8c98",
            fontWeight: "bold",
            cursor: "pointer",
            fontSize: "1.1rem",
            background: "#f2e9e4",
            padding: "6px 18px",
            borderRadius: "20px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
            border: "none",
            transition: "background 0.2s, color 0.2s",
          }}
        >
          ← Back
        </Link>
      </div>
      <div
        style={{
          background: "rgba(42, 45, 73, 0.95)",
          borderRadius: "18px",
          boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
          padding: "2.5rem 2.5rem 2rem 2.5rem",
          maxWidth: "600px",
          width: "100%",
          marginTop: "60px",
          position: "relative",
        }}
      >
        <div
          style={{
            top: "24px",
            right: "24px",
            display: "flex",
            gap: "10px",
            marginBottom: "12px",
          }}
        >
          {/* Like Button */}
          {!isEditable ? (
            <Button
              variant="light"
              style={{
                padding: "0.375rem 0.75rem",
                display: "flex",
                alignItems: "center",
                fontSize: "1.3rem",
                background: "none",
                border: "none",
                boxShadow: "none",
              }}
              onClick={handleLike}
              aria-label={isLiked ? "Unlike" : "Like"}
            >
              {isLiked ? (
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="#e63946"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12.1 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41 0.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54l-1.35 1.31z" />
                </svg>
              ) : (
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#e63946"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12.1 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41 0.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54l-1.35 1.31z" />
                </svg>
              )}
            </Button>
          ) : null}
          {isEditable ? (
            <>
              <Button variant="success" onClick={handleSave}>
                Save
              </Button>
              <Button variant="secondary" onClick={() => setIsEditable(false)}>
                Cancel
              </Button>
            </>
          ) : (
            <>
              <Button variant="primary" onClick={handleEdit}>
                Edit
              </Button>
              <Button
                variant="danger"
                onClick={handleDelete}
                style={{ marginLeft: "8px" }}
              >
                Delete
              </Button>{" "}
            </>
          )}
        </div>

        {isEditable ? (
          <input
            type="text"
            value={editableBlog.title}
            onChange={(e) =>
              setEditableBlog({ ...editableBlog, title: e.target.value })
            }
            className="form-control mb-3"
          />
        ) : (
          <h2
            style={{
              fontWeight: 700,
              fontSize: "2.2rem",
              marginBottom: "0.5rem",
              color: "#f2e9e4",
              letterSpacing: "1px",
            }}
          >
            {blog.title}
          </h2>
        )}

        {isEditable ? (
          <input
            type="text"
            value={editableBlog.categories}
            onChange={(e) =>
              setEditableBlog({ ...editableBlog, categories: e.target.value })
            }
            className="form-control mb-3"
          />
        ) : (
          !Array.isArray(blog.categories) && (
            <span
              style={{
                background: "#9a8c98",
                color: "#22223b",
                borderRadius: "12px",
                padding: "4px 14px",
                fontSize: "0.95rem",
                fontWeight: 500,
                letterSpacing: "0.5px",
              }}
            >
              {blog.categories}
            </span>
          )
        )}

        {isEditable ? (
          <textarea
            value={editableBlog.content}
            onChange={(e) =>
              setEditableBlog({ ...editableBlog, content: e.target.value })
            }
            className="form-control"
            rows={6}
          />
        ) : (
          <p style={{ margin: 0 }}>{blog.content}</p>
        )}
      </div>
    </Container>
  );
}

export default BlogDetails;
