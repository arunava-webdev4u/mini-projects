import React from 'react'
import BBlogo from '../Images/breaking-bad-logo.png';

const Header = () => {
    return (
        <div className='header-container'>
            <div className='img-container'>
                <img src={BBlogo} className='logo' />
            </div>
        </div>
    )
}

export default Header
