import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { BiMenuAltLeft, BiX } from 'react-icons/bi';
import './Nav.scss';

const Nav = () => {

    const [MenuOpened, setMenuOpened] = useState(false);
    const toggleMenu = () => {
        const listEl = document.getElementById('menu');
        listEl.classList.toggle('active');
        setMenuOpened(!MenuOpened);
    }

    return (
        <nav className='menu'>
            <h1 className='menu__title'>32. WSH <span>Per Aspera Ad Astra</span></h1>
            {!MenuOpened ? <BiMenuAltLeft className='menu__icon' onClick={() => toggleMenu()} /> : <BiX className='menu__icon' onClick={() => toggleMenu()} />}
            <ul className='menu__list' id='menu'>
                <li>
                    <Link to='/' onClick={() => toggleMenu()}>
                        Aktualności
                    </Link>
                </li>

                <li>
                    <Link to={`/o-nas`} onClick={() => toggleMenu()}>
                        O szczepie
                    </Link>
                </li>
                <li>
                    <Link to={`/dla-rodzicow`} onClick={() => toggleMenu()}>
                        Dla rodziców
                    </Link>
                </li>
                <li>
                    <Link to='/galeria' onClick={() => toggleMenu()}>
                        Galeria
                    </Link>
                </li>
                <li>
                    <Link to={`/kontakt`} onClick={() => toggleMenu()}>
                        Kontakt
                    </Link>
                </li>
            </ul>
        </nav >
    )
}

export default Nav
