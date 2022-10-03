import './Stock.css';
import board from '../../images/board.png';
import {Link} from 'react-router-dom';

function Stock () {
    return (
        <section className='stock'>
            <div className='stock__container'>
                <h2 className='stock__title'>Акции</h2>
                <Link to='/action'>
                <a href='#' className='stock__ref'>Смотреть все</a>
                </Link>
                </div>
                <div className='stock__cards'>

                    <div className='stock__card'>
                        <img className='stock__img' src={board} />
                        <h3 className='stock__head'>Доска обрезная</h3>
                        <p className='stock__description'>Лиственница</p>
                        <p className='stock__price'>От 9000 ₽/м3</p>
                        <div className='stock__row'>
                            <button className='stock__button'>Перейти</button>
                            <p className='stock__discount'>-20%</p>
                        </div>
                    </div>
                    <div className='stock__card'>
                        <img className='stock__img' src={board} />
                        <h3 className='stock__head'>Доска обрезная</h3>
                        <p className='stock__description'>Лиственница</p>
                        <p className='stock__price'>От 9000 ₽/м3</p>
                        <div className='stock__row'>
                            <button className='stock__button'>Перейти</button>
                            <p className='stock__discount'>-20%</p>
                        </div>
                    </div>
                    <div className='stock__card'>
                        <img className='stock__img' src={board} />
                        <h3 className='stock__head'>Доска обрезная</h3>
                        <p className='stock__description'>Лиственница</p>
                        <p className='stock__price'>От 9000 ₽/м3</p>
                        <div className='stock__row'>
                            <button className='stock__button'>Перейти</button>
                            <p className='stock__discount'>-20%</p>
                        </div>
                    </div>
                    <div className='stock__card'>
                        <img className='stock__img' src={board} />
                        <h3 className='stock__head'>Доска обрезная</h3>
                        <p className='stock__description'>Лиственница</p>
                        <p className='stock__price'>От 9000 ₽/м3</p>
                        <div className='stock__row'>
                            <button className='stock__button'>Перейти</button>
                            <p className='stock__discount'>-20%</p>
                        </div>
                    </div>
                </div>
            
        </section>
    )
}

export default Stock;