import { Navbar, Nav } from "react-bootstrap"
import logo from '/img/logo.svg'
import { ReactSVG } from "react-svg"
import { createUseStyles } from "react-jss"
import styles from './NavigationBar-styles'

const useStyles = createUseStyles(styles)

export default function NavigationBar()
{
    const classes = useStyles()
    return (
        <Navbar expand="lg" className="w-100">
            <Navbar.Brand href="#home">
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
                <Nav className={`${classes.links}`}>
                    {/* using active prop to disable active syling by React Bootstrap */}
                    <Nav.Link href="#home" active="">Home</Nav.Link>
                    <Nav.Link href="#mission" active="">About</Nav.Link>
                    <Nav.Link href="#projects" active="">Projects</Nav.Link>
                    <Nav.Link href="#gift" active="">Reward</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}
