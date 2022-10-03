import './Production.css';
import card from '../../utils/products.js';

function Production () {
    return (
        <main className='production'>
            <div className='production__container'>
                <p className='production__paragraph'>Главная - Каталог</p>
                <h2 className='production__title'>Наша продукция</h2>
                <p className='production__text'>Компания «Лиственница опт» предлагает купить пиломатериалы со склада производителя, оптом и в розницу, доску обрезную, брус, вагонку, блок-хаус, фанеру, дешево, с доставкой своим спецавтопарком по Москве и Московской области.</p>
               <div className='production__content'>
               <ul className='production-cards'>
                   {card.map((card) => (
                       <li className='production-card' key={card.id}>
                       <img className='production-card__img' src={card.img} alt={card.title}/>
                       <div className='production-card__container'>
                           <div className='production-card__content'>
                           <h3 className='production-card__title'>{card.title}</h3>
                           <p className='production-card__description'>{card.description}</p>
                           <p className='production-card__price'>{card.price}</p>
                           </div>
                           <button className='production-card__button'>Перейти</button>
                       </div>
                   </li>
                   ))}
                  
               </ul>
               <a className='production__link'>Смотреть больше</a>
               </div>
            </div>
        </main>
    )
}

export default Production;