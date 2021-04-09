import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Navbar, Nav } from 'react-bootstrap'
import { SocialIcon } from 'react-social-icons'


const styles = {
    imageStyle: {
        borderRadius: "50px"
    }
}

const Navigation = () => {
    const location = useLocation();

    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand as={Link} to="/" exact><img  style={styles.imageStyle} src="../assets/images/profilebw.jpeg" alt="brand icon" width="80" height="80"/>{" "}
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link
                        as={Link}
                        to="/"
                        className={
                            location.pathname === "/"
                                ? "nav-link active mx-auto"
                                : "nav-link mx-auto"
                        }
                    >
                        Home
                    </Nav.Link>
                    <Nav.Link
                        as={Link}
                        to="/about"
                        className={
                            location.pathname === "/about"
                                ? "nav-link active mx-auto"
                                : "nav-link mx-auto"
                        }
                    >
                        About Me!
                    </Nav.Link>
                    <Nav.Link
                        as={Link}
                        to="/projects"
                        className={
                            location.pathname === "/projects"
                                ? "nav-link active mx-auto"
                                : "nav-link mx-auto"
                        }
                    >
                        Project Page
                    </Nav.Link>
                    <Nav.Link
                        as={Link}
                        to="/contact"
                        className={
                            location.pathname === "/contact"
                                ? "nav-link active mx-auto"
                                : "nav-link mx-auto"
                        }
                    >
                        Contact
                    </Nav.Link>
                </Nav>    
            </Navbar.Collapse>
            <div>
                <SocialIcon url="https://twitter.com/kristins07" className="mr-4" target="_blank" fgColor="#fff" style={{ height: 35, width:35}} />
                <SocialIcon url="https://github.com/kmsaunders7" className="mr-4" target="_blank" fgColor="#fff" style={{ height: 35, width:35}} />
                <SocialIcon url="https://www.linkedin.com/in/kristin-saunders-/" className="mr-4" target="_blank" fgColor="#fff" style={{ height: 35, width:35}} />
            </div>
        </Navbar>
    )
}

export default Navigation
