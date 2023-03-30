import { Navbar, Nav } from "react-bootstrap"

export default function NavigationBar()
{
    return (
        <Navbar expand="lg" className="w-100">
            <Navbar.Brand href="#home">MS</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav">
                {/* <span> */}
                <svg href="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%280, 0, 0, 0.55%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e"></svg>
                {/* </span> */}
            </Navbar.Toggle>
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
