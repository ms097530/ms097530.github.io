import { Navbar, Nav } from "react-bootstrap"

export default function NavigationBar()
{
    return (
        <Navbar expand="lg" className="w-100">
            <Navbar.Brand href="#home">MS</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#mission">About</Nav.Link>
                    <Nav.Link href="#projects">Projects</Nav.Link>
                    <Nav.Link href="#gift">Reward</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}
