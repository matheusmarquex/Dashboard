import React from 'react'
import './Navbar.css'
import avatar from '../../assets/avatar.jpg'



const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar__left">
                <a href="#">Produtos</a>
                <a href="#">Usuários</a>
                <a href="#" className="active_link">Admin</a>
            </div>

            <div className="navbar__right">
                <a href="#">
                    <i className="fa fa-search"></i>
                </a>

                <a href="#">
                    <i className="fa fa-clock-o"></i>
                </a>

                <a href="#">
                    <img width="30" src={avatar} alt="avatar" />
                </a>

            </div>
        </nav>
    )
}

export default Navbar