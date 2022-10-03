import './AboutCompany.css';
import company from '../../images/company.png';
import {Link} from 'react-router-dom';

function AboutCompany() {
    return (
        <section className='about-company'>
            <div className='about-company__content'>
            <h2 className='about-company__title'>О компании</h2>
        <div className='about-company__container'>
        <p className='about-company__subtitle'>Хвойные деревья семейства сосновых давно зарекомендовали себя фаворитами в строительной сфере. Купить продукцию из лиственницы стремятся многие строительные организации и частные лица. Высота этих деревьев достигает 45 метров, а диаметр прямостоящего столба более 1 метра. Востребованность этой породы обусловлена её приемлемой ценой и качественными характеристиками:</p>
        <Link to='/about-us'>
        <button className='about-company__button'>Узнать больше</button>
        </Link>
        </div>
            </div>
        <img className='about-company__img' src={company}/>
    </section>
    )
}

export default AboutCompany;