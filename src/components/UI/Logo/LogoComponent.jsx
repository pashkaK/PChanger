import React from 'react';
import cl from './LogoComponent.module.css'
const LogoComponent = () => {
    return (
        <div className={cl.wrapper}>
            <span className={cl.logo}>PChanger</span>
        </div>
    );
};

export default LogoComponent;