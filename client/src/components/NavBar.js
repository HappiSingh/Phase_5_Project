import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import "./navbar.css";

function NavBar({ user, onLogout }) {
  if (!user) {
    return (
      <>
        <Navbar bg="dark" data-bs-theme="dark">
          <Container>
            <Navbar.Brand>Game_Reviews</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/login">Login</Nav.Link>
              <Nav.Link href="/signup">Signup</Nav.Link>
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
            <Navbar.Brand>Games_Review</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/games">Games</Nav.Link>
              <Nav.Link href="/review/game/:id">Review for Game</Nav.Link>
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
