import { Navbar, Nav } from "react-bootstrap"
import logo from '/img/logo.svg'
import { ReactSVG } from "react-svg"

export default function NavigationBar()
{
    // console.log(logo)
    return (
        <Navbar expand="lg" className="w-100">
            <Navbar.Brand href="#home">
                {/* <svg xmlns={logo} width={60} height={60}></svg> */}
                <div style={{ width: '60px', height: '60px' }}>
                    <ReactSVG
                        src={logo}
                        beforeInjection={(svg) =>
                        {
                            svg.setAttribute('style', 'width: 100%; height: 100%;')
                        }} />
                </div>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav">
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
