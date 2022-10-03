import './Header.css';
import logo from '../../images/logo.svg';
import lupa from '../../images/lupa.svg';
import phone from '../../images/phone.svg';
import telegram from '../../images/telegram.svg';
import viber from '../../images/viber.svg';
import whatsapp from '../../images/whatsapp.svg';
import {Link} from 'react-router-dom';

function Header () {
return (
<header className='header'>
    <Link className='header__link' to='/'>
    <img className='header__logo' src={logo}/>
    </Link>
<ul className='header__item-list'>
    <Link className='header__link' to='/production'>
    <li className='header__list'>Каталог</li>
    </Link>
    <Link className='header__link' to='/action'>
    <li className='header__list'>Акции</li>
    </Link>

<Link className='header__link' to='/cubature'>
<li className='header__list'>Кубатурник</li>
</Link>

<Link className='header__link' to='/delivery'>
<li className='header__list'>Доставка</li>
</Link>

<Link className='header__link' to='/about-us'>
<li className='header__list'>О нас</li>
</Link>

<Link className='header__link' to='/contacts'>
<li className='header__list'>Контакты</li>
</Link>

</ul>
<div className='header__search'>
<input className='header__input' />
<img className='header__input-img' src={lupa}/>
</div>
<ul className='header__container'>
<li className='header__container-list'>
<img className='header__contact' src={viber}></img>
<img className='header__contact' src={telegram}></img>
+7 (939) 777-70-90
</li>
<li className='header__container-list'>
<img className='header__contact' src={whatsapp}></img>
<img className='header__contact' src={phone}></img>
Заказать звонок
</li>
</ul>
</header>
)
}

export default Header;
