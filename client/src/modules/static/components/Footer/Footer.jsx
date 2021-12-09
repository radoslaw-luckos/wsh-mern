import React from 'react';
import './Footer.scss';
import logoZHP from '../../../../assets/img/zhp-logo.svg';
import logoWW from '../../../../assets/img/hufiec-logo.svg';


const Footer = () => {
    return (
        <footer className='footer'>
            <a href='http://wroclawwschod.zhp.pl/' target='_blank' className="footer__hufiec" rel="noreferrer">
                <img src={logoWW} alt="logo hufca" />
            </a>
            <p className='footer__address'> HOW "Stanica" <br></br> ul.Kożuchowska 13 <br></br> 51-631, Wrocław </p>
            <a href='https://zhp.pl/' target='_blank' className="footer__logo" rel="noreferrer">
                <img src={logoZHP} alt="logo zhp" />
            </a>
            <p className='footer__copywrights'>Projekt i wykonanie - Radosław Łuckoś  2021 @ Wszelkie prawa zastrzeżone.</p>
        </footer>
    )
}

export default Footer
