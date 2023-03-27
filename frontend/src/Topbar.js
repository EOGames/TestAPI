import React from "react";
import {NavLink} from 'react-router-dom';
const Topbar = function()
{
    return(
        <div className="topbarHolder">
            <div className="topBar">
                <NavLink className={'nav'} to={'/'}>Home</NavLink>
                <NavLink className={'nav'} to={'/Add'}>Add User</NavLink>
                {/* <NavLink to={'Add New'}>Home</NavLink> */}
            </div>
        </div>
    );
}
export default Topbar;