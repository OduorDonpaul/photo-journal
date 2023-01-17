import NavList from "./NavList";
import NavItem from "./NavItem";
import NavLink from "./NavLink";
import MainNav from "./MainNav";
import Button from "./Button";

function NavBar(){
    return(
        <MainNav>
            <h2 style={{float:"left"}}>logo</h2>
            <NavList>
                <NavItem>
                    <NavLink href="#">Members</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="#">My blog</NavLink>
                </NavItem><NavItem>
                    <NavLink href="#">Photos</NavLink>
                </NavItem>
                <NavItem>
                    <Button><NavLink href="#">Login</NavLink></Button>
                </NavItem>
                <NavItem>
                    <Button><NavLink href="#">Sign Up</NavLink></Button>
                </NavItem>
            </NavList>
        </MainNav>

    )  
};

export default NavBar;