import './Contacts.css';
import card from '../../images/card.png';
import viber from '../../images/viber.svg';
import telegram from '../../images/telegram.svg';
import whatsapp from '../../images/whatsapp.svg';

function Contacts () {
    return (
        <main className='contacts'>
            <div className='contacts__container'>
                <div className='contacts__column'>
                <p className='contacts__paragraph'>Главная - Контакты</p>
                <h2 className='contacts__title'>Контакты</h2>
                </div>
                <div className='contacts__content'>
                    <div className='contacts__case'>
                    <ul className='contacts__list'>
                <li className='contacts__list-item'>Адрес</li>
                <li className='contacts__list-item contacts__list-item_action'>Телефон</li>
                <li className='contacts__list-item'>E-mail</li>
                <li className='contacts__list-item'>Мессенджеры</li>
            </ul>
            <ul className='contacts__list'>
                <li className='contacts__list-item'>Московская обл., Пушкинский район, село Тарасовка, ул. Центральная 52</li>
                <li className='contacts__list-item'>+7 (939) 777-70-90</li>
                <li className='contacts__list-item'>List@mail.com</li>
                <li className='contacts__list-item'>
                    <img className='contacts__connect' src={viber}/>
                    <img className='contacts__connect' src={telegram}/>
                    <img className='contacts__connect' src={whatsapp}/>
                </li>
                <li className='contacts__list-item'>
                <a href='#' className='contacts__link'>Заказать звонок</a>
                </li>
            </ul>
                    </div>
            <img className='contacts__img' src={card} />
                </div>
            </div>
        </main>
    )
}

export default Contacts;