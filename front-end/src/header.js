import "./header.css";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

function header() {
    return (
        <Navbar expand="lg" variant="light" id="bar">
            <Container>
                <Navbar.Brand href="#">Food Exchange</Navbar.Brand>
            </Container>
        </Navbar>
    );
}
export default header;
