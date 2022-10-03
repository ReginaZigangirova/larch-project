import './Services.css';
import antiseptic from '../../images/antiseptic.png';
import fire from '../../images/fire.png';
import manufacturing from '../../images/manufacturing.png';
import delivery from '../../images/delivery.png';

function Services () {
    return (
        <section className='services'>
            <h2 className='services__title'>Услуги</h2>
            <div className='services__card'>
                <img className='services__img' src={antiseptic} />
                <h3 className='services__head'>Антисептирование</h3>
            </div>
            <div className='services__card'>
                <img className='services__img' src={fire} />
                <h3 className='services__head'>Огнезащитная обработка</h3>
            </div>
            <div className='services__card'>
                <img className='services__img' src={manufacturing} />
                <h3 className='services__head'>Изготовление по размерам заказчика</h3>
            </div>
            <div className='services__card'>
                <img className='services__img' src={delivery} />
                <h3 className='services__head'>Доставка</h3>
            </div>
        </section>
    )
}

export default Services;