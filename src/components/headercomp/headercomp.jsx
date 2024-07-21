import { NavLink } from "react-router-dom";
import './headercomp.css'

export default function headerComp()

{
    return(
        <>
        
        <p className="head">
        <NavLink to="/"> homePage | </NavLink>
        <NavLink to="/Departments"> Departments | </NavLink>
        <NavLink to="/AboutPage">AboutPage | </NavLink>
        <NavLink to="/Events">Events | </NavLink>
        </p>
        
        
        </>
    )

}