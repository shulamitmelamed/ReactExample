import { Link } from 'react-router-dom';
import * as React from 'react';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import '../css/navbar.css';

function Navbar() {

    return (
        <div id="nav" >
            <Box sx={{ width: '100%' }} >
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }} >
                    <Link to='/login' className="link"><Tab label="Login" /></Link>
                    <Link to='/itemList' className="link"><Tab label="Our Gifts" className="link" /></Link>
                    <Link to='/donationForm' className="link"><Tab label="Donate" className="link" /></Link>
                </Box>
            </Box>
            <img  src={require(`../images/6144.jpg`)} width="60px"height='60px'/>
        </div>
    )
}
export default Navbar;