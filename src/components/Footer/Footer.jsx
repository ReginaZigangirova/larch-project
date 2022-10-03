import './Footer.css';
import phone from '../../images/phoneb.svg';
import telegram from '../../images/telegramb.svg';
import viber from '../../images/viberb.svg';
import whatsapp from '../../images/whatsappb.svg';
import lupa from '../../images/lupaf.svg';
import logo from '../../images/logo.svg';
import {Link} from 'react-router-dom';

function Footer () {
    return (
        <footer className='footer'>
            <div className='footer__content'>
            <ul className='footer__list'>
                <Link className='footer__links' to='/production'>
                <li className='footer__list-item'>Каталог</li>
                </Link>                
                <Link className='footer__links' to='/action'>
                <li className='footer__list-item'>Акции</li>
                </Link>                
                <Link className='footer__links' to='/cubature'>
                <li className='footer__list-item'>Кубатурник</li>
                </Link>    
                <Link className='footer__links' to='/delivery'>
                <li className='footer__list-item'>Доставка</li>
                </Link>  
                <Link className='footer__links' to='/about-us'>
                <li className='footer__list-item'>О нас</li>
                </Link>
                <Link className='footer__links' to='/contacts'>
                <li className='footer__list-item'>Контакты</li>
                </Link>
                
            </ul>
            <div className='footer__container'>
                <img className='footer__logo' src={logo} />
                <p className='footer__text'>Все права защищены</p>
                <a className='footer__link' href='#'>В начало</a>
            </div>
            <div className='footer__column'>
            <div className='footer__search'>
                <input className='footer__input' />
                <img className='footer__input-img' src={lupa}/>
            </div>
            <ul className='footer__contact'>
                <li className='footer__contact-list'>
                <img className='header__img' src={viber}></img>
                <img className='header__img' src={telegram}></img>
                +7 (939) 777-70-90
                </li>
                <li className='footer__contact-list'>
                <img className='header__img' src={whatsapp}></img>
                <img className='header__img' src={phone}></img>
                Заказать звонок
                </li>
            </ul>
            </div>
            </div>
            
        </footer>
    )
}

export default Footer;