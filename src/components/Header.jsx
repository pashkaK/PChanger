import React from 'react';
import LogoComponent from "./UI/Logo/LogoComponent";
import RatesList from "./RatesList";

const Header = () => {

    return (
        <div className='header'>
            <LogoComponent />
            <RatesList />
        </div>
    );
};

export default Header;