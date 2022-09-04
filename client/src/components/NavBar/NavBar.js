import React from 'react';
import './NavBar.css'
import { Nav } from 'react-bootstrap';

function NavBar({currentPage, handlePageChange}){
    return(
        <ul className= 'nav nav-tabs bg-dark '>
            <li className='nav-item'>
                <a href='/'
                onClick={()=> handlePageChange('Home')}
                className={currentPage === 'Home' ? 'nav-link active': 'nav-link'}
                >
                Home
                </a>
            </li>
            <li classname='nav-item'>
                <a href='#dashboard'
                onClick={()=> handlePageChange('Dashboard')}
                className={currentPage === 'Dashboard'? 'nav-link active': 'nav-link'}
                >
                Dashboard
                </a>

            </li>
            <li className='nav nav-tabs'>
            <a
            href='#blog'
            onClick ={()=>handlePageChange('Blog')}
            className ={currentPage === 'Blog'?'nav-link active':'nav-link'}
            >
                Blog
            </a>
            </li>
            <li className='nav nav-tabs'>
                <a href='/signup'
                onClick={()=> handlePageChange('SignUp')}
                className={currentPage ==='SignUp'?'nav-link active':'nav-link'}
                >
                    Sign Up
                </a>
            </li>
            <li className='nav nav-tabs'>
                <a
                href='/login'
                onClick={()=> handlePageChange('LogIn')}
                className={currentPage === 'LogIn'? 'nav-link active':'nav-link'}
                >
                    Log In
                </a>
            </li>
        </ul>
    )
};

export default NavBar;