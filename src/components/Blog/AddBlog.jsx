import React, { useState } from "react";
import { Button, Container } from "react-bootstrap";
import { NavLink } from "react-router";
import {useDispatch} from 'react-redux'

function AddBlog() {

    const [title, setTitle] = useState("");
    const [categories, setCategories] = useState("");
    const [content, setContent] = useState("");
    const dispatch = useDispatch();

  const handleCancel = () => {
    window.history.back();
  };

    const insertBlog = (e) => {
        e.preventDefault();
        dispatch({
            type: 'blog/addPost',
            payload: { title, categories, content }
        });
        setTitle("");
        setCategories("");
        setContent("");
        window.history.back();
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
            <NavLink
                to="/"
                onClick={(e) => {
                    e.preventDefault();
                    window.history.back();
                }}
                style={{
                    color: "#f2e9e4",
                    textDecoration: "none",
                    fontWeight: "bold",
                    fontSize: "1.1rem",
                }}
            >
                &larr; Back to Index
            </NavLink>
        </div>
        <div
            className="w-100"
            style={{
                maxWidth: 600,
                marginTop: 80,
                border: "2px solid #f2e9e4",
                borderRadius: "12px",
                padding: "32px",
                background: "rgba(34, 34, 59, 0.85)",
            }}
        >
            <h2 className="mb-4 text-center">Add Blog</h2>
            <form onSubmit={insertBlog}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">
                        Title
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="title"
                        placeholder="Enter blog title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="categories" className="form-label">
                        Categories
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="categories"
                        placeholder="Enter categories (comma separated)"
                        value={categories}
                        onChange={(e) => setCategories(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="content" className="form-label">
                        Content
                    </label>
                    <textarea
                        className="form-control"
                        id="content"
                        rows={6}
                        placeholder="Write your blog content here..."
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        required
                    />
                </div>
                <div className="d-flex justify-content-start">
                    <Button variant="success" type="submit" className="me-2">
                        Submit
                    </Button>
                    <Button variant="secondary" onClick={handleCancel}>
                        Cancel
                    </Button>
                </div>
            </form>
        </div>
    </Container>
);
}

export default AddBlog;
