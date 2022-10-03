import './Catalog.css';

function Catalog () {
    return (
        <div className='catalog'>
            <div className='catalog__container'>
            <h2 className='catalog__title'>Каталог материалов</h2>
            <ul className='catalog__list'>
                <li className='catalog__list-item'>Брус обрезной
                <button className='catalog__button'></button></li>
                <li className='catalog__list-item'>Доска
                <button className='catalog__button'></button></li>
                <li className='catalog__list-item'>Брусок
                <button className='catalog__button'></button></li>
                <li className='catalog__list-item'>Фанера
                <button className='catalog__button'></button></li>
                <li className='catalog__list-item'>Фасадный планкен
                <button className='catalog__button'></button></li>
                <li className='catalog__list-item'>Вагонка
                <button className='catalog__button'></button></li>
                <li className='catalog__list-item'>Блок - хаус
                <button className='catalog__button'></button></li>
                <li className='catalog__list-item'>Террасная доска
                <button className='catalog__button'></button></li>
                <li className='catalog__list-item'>Палубная доска
                <button className='catalog__button'></button></li>
                <li className='catalog__list-item'>Шпунтованная доска
                <button className='catalog__button'></button></li>
                <li className='catalog__list-item'>Мебельный щит
                <button className='catalog__button'></button></li>
            </ul>
            </div>
        </div>
    )
}

export default Catalog;