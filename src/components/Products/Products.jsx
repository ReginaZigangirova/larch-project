import './Products.css';
import larch from '../../images/larch.png';

function Products () {
    return (
        <section className='products'>
            <div className='products__links'>
            <h2 className='products__title'>лиственница <span className='products__object'>премиального качества</span></h2>
            <ul className='products__list'>
                <li className='products__item-list'>
                    <a className='products__link' href='#'>Брус обрезной
                        <span className='products__span'>↗</span>
                    </a>
                </li>
                <li className='products__item-list'>
                    <a className='products__link' href='#'>Доска
                        <span className='products__span'>↗</span>
                    </a>
                </li>
                <li className='products__item-list'>
                    <a className='products__link' href='#'>Брусок
                        <span className='products__span'>↗</span>
                    </a>
                </li>
                <li className='products__item-list'>
                    <a className='products__link' href='#'>Фанера
                        <span className='products__span'>↗</span>
                    </a>
                </li>
                <li className='products__item-list'>
                    <a className='products__link' href='#'>Фасадный планкен
                        <span className='products__span'>↗</span>
                    </a>
                </li>
                <li className='products__item-list'>
                    <a className='products__link' href='#'>Вагонка
                        <span className='products__span'>↗</span>
                    </a>
                </li>
                <li className='products__item-list'>
                    <a className='products__link' href='#'>Блок - хаус
                        <span className='products__span'>↗</span>
                    </a>
                </li>
                <li className='products__item-list'>
                    <a className='products__link' href='#'>Террасная доска
                        <span className='products__span'>↗</span>
                    </a>
                </li>
                <li className='products__item-list'>
                    <a className='products__link' href='#'>Палубная доска
                        <span className='products__span'>↗</span>
                    </a>
                </li>
                <li className='products__item-list'>
                    <a className='products__link' href='#'>Шпунтованная доска
                        <span className='products__span'>↗</span>
                    </a>
                </li>
                <li className='products__item-list'>
                    <a className='products__link' href='#'>Мебельный щит
                        <span className='products__span'>↗</span>
                    </a>
                </li>
            </ul>
            </div>
            <div className='products__column'>
                <img className='products__img'  src={larch}/>
                <p className='products__text'>Это традиционное напольное покрытие для открытых помещений (терраса, веранда) или помещений с высокой влажностью. Главным отличием является особенный рельеф на лицевой стороне. Такая обработка исключает скольжение при любых погодных условиях.</p>
                <button className='products__button'>Перейти</button>
            </div>
        </section>
    )
}

export default Products;