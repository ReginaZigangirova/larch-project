import './Promo.css';
import forest from '../../images/forest.png';

function Promo () {
    return (
        <section className='promo'>
            <div className='promo__container'>
                <div className='promo__content'>
                <h2 className='promo__title'>Лиственница <span className='promo__span'>опт</span></h2>
                <p className='promo__text'>Москва и Московская область</p>
                </div>
                <p className='promo__subtitle'>Погонажные изделия из Сибирской лиственницы оптом</p>
            </div>
            <img className='promo-img' src={forest}></img>
        </section>
    )
}

export default Promo;