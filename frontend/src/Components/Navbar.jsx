import React from 'react';
import {Navbar} from 'reactstrap';

import SquizLogo from '../squiz logo.png';

export default Navbar = () => {
    return(
        <Navbar color="light" light expand="md">
            <img src={SquizLogo} alt="Squiz"/>
        </Navbar>
    )
}