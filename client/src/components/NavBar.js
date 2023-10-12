import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import "./CSS/navbar.css";

function NavBar({ user, onLogout }) {
  if (!user) {
    return (
      <>
        <Navbar bg="dark" data-bs-theme="dark">
          <Container>
            <Navbar.Brand>
              <img
                alt=""
                src="/game-favicon.png"
                width="30"
                height="30"
                className="d-inline-block align-top"
              />{" "}
              Game_Reviews
            </Navbar.Brand>
            <Nav className="me-auto">
              <Link className="Link" to="/">
                Home
              </Link>
              <Link className="Link" to="/login">
                Login
              </Link>
              <Link className="Link" to="/signup">
                Signup
              </Link>
            </Nav>
          </Container>
        </Navbar>
      </>
    );
  } else {
    return (
      <>
        <Navbar bg="dark" data-bs-theme="dark">
          <Container>
            <Navbar.Brand>
              <img
                alt=""
                src="/game-favicon.png"
                width="30"
                height="30"
                className="d-inline-block align-top"
              />{" "}
              Game_Reviews
            </Navbar.Brand>
            <Nav className="me-auto">
              <Link className="Link" to="/">
                Home
              </Link>
              <Link className="Link" to="/games">
                Games
              </Link>
              <Link className="Link" to="/reviews">
                All Reviews
              </Link>
              <Link className="Link" to={`/review/user/${user.id}`}>
                My Reviews
              </Link>
              <Link className="Link" to="/publishers">
                Publishers
              </Link>
              <Navbar.Text className="user_name">
                Welcome: {user.first_name} {user.last_name}
              </Navbar.Text>
              <Button
                variant="outline-danger"
                className="button"
                onClick={onLogout}
              >
                Logout
              </Button>{" "}
            </Nav>
          </Container>
        </Navbar>
      </>
    );
  }
}

export default NavBar;
