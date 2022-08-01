import {
    Navbar, Nav,
    NavLink,
    NavbarBrand,
    NavbarToggler,
    NavItem,
    NavbarText,
    Collapse
}
    from 'reactstrap';
    
const Header = () => {
    const userData = JSON.parse(localStorage.getItem('userData'));
    return (
        <div>
            
            <Navbar
                color="light"
                expand="md"
                light
            >
              
                <NavbarBrand href="/">
                    Home
                </NavbarBrand>
                <NavbarToggler onClick={function noRefCheck() { }} />
                <Collapse navbar>
                    <Nav
                        className="me-auto"
                        navbar
                    >
                        <NavItem>
                            <NavLink href="/aboutus">
                                About Us
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/Contact">
                                contact
                            </NavLink>
                        </NavItem>
                    </Nav>
                    <Nav>
                        <NavItem>
                            <NavLink href="/signupus">
                                signup
                            </NavLink>
                        </NavItem>
                    </Nav>

                </Collapse>
            </Navbar>
        </div>
    )
}
export default Header