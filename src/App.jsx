import { Button, Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import LikeContextProvider from "./context/LikeContextProvider";

function App() {
  const blogs = useSelector((state) => state.blog.posts);

  const navigate = useNavigate();

  return (
   
      <Container
        fluid
        className="p-3 d-flex flex-column align-items-center"
        style={{
          background: "linear-gradient(135deg, #22223b 60%, #4a4e69 100%)",
          color: "#f2e9e4",
          minHeight: "100vh",
        }}
      >
        <div
          className="d-flex flex-column align-items-center"
          style={{
            width: "70%",
            maxWidth: "800px",
            marginTop: "2rem",
            marginBottom: "2rem",
            border: "2px solid #c9ada7",
            borderRadius: "18px",
            boxShadow: "0 2px 16px rgba(74, 78, 105, 0.15)",
            background: "rgba(34, 34, 59, 0.15)",
          }}
        >
          <header
            className="text-center mt-0"
            style={{
              fontFamily: "'Montserrat', 'Segoe UI', Arial, sans-serif",
              fontWeight: 800,
              fontSize: "3rem",
              letterSpacing: "2px",
              textShadow: "2px 4px 12px #4a4e69, 0 1px 0 #fff",
              background: "linear-gradient(90deg, #f2e9e4 60%, #c9ada7 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              paddingBottom: "1rem",
              width: "100%",
            }}
          >
            Blog Post
          </header>

          <div
            className="w-100 d-flex justify-content-end mt-3"
            style={{
              borderTop: "1.5px solid #c9ada7",
              paddingTop: "1rem",
            }}
          >
            <Button
              style={{
                background: "linear-gradient(90deg, #9a8c98 60%, #c9ada7 100%)",
                color: "#22223b",
                fontWeight: 700,
                border: "none",
                borderRadius: "30px",
                boxShadow: "0 4px 16px rgba(74, 78, 105, 0.2)",
                padding: "0.75rem 2rem",
                fontSize: "1.1rem",
                letterSpacing: "1px",
                transition: "transform 0.1s, box-shadow 0.1s",
              }}
              onMouseOver={(e) => {
                e.target.style.transform = "scale(1.05)";
                e.target.style.boxShadow = "0 6px 24px rgba(74, 78, 105, 0.3)";
              }}
              onMouseOut={(e) => {
                e.target.style.transform = "scale(1)";
                e.target.style.boxShadow = "0 4px 16px rgba(74, 78, 105, 0.2)";
              }}
              onClick={() => navigate(`/add-blog`)}
            >
              New Post
            </Button>
          </div>
          <div className="w-100 mt-4">
            {blogs.map((post) => (
              <div
                key={post.id}
                className="mb-4 p-3"
                style={{
                  background: "rgba(242, 233, 228, 0.07)",
                  cursor: "pointer",
                  borderRadius: "10px",
                  transition: "background 0.2s",
                }}
                onClick={() => navigate(`/blog-info/${post.id}`)}
                onMouseOver={(e) =>
                  (e.currentTarget.style.background =
                    "rgba(242, 233, 228, 0.15)")
                }
                onMouseOut={(e) =>
                  (e.currentTarget.style.background =
                    "rgba(242, 233, 228, 0.07)")
                }
                tabIndex={0}
                role="button"
                aria-label={`View details for ${post.title}`}
              >
                <h3
                  style={{
                    fontFamily: "'Montserrat', Arial, sans-serif",
                    fontWeight: 700,
                    color: "#f2e9e4",
                    marginBottom: "0.5rem",
                  }}
                >
                  {post.title}
                </h3>
                <p style={{ color: "#c9ada7", marginBottom: 0 }}>
                  {post.categories}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
   
  );
}

export default App;
