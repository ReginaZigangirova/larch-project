import './AboutUs.css'; 
import Catalog from '../Catalog/Catalog';
import company from '../../images/company.png';
import ex from '../../images/ex.png';
import les from '../../images/les.png';
import les1 from '../../images/les1.png';

function AboutUs () {
    return (
        <main className='about-us'>
            <div className='about-us__container'>
            <div className='about-us__block'>
                <p className='about-us__paragraph'>Главная - О нас</p>
            <Catalog />
            </div>
            <div className='about-us__block'>
            <div className='about-us__content'>
                
                <div className='about-us__row'>
                <h2 className='about-us__title'>о нас</h2>
                <p className='about-us__text about-us__text_row'>Создатели суперкомпьютера Setonix сообщили, что при генерации изображения использовалась только половина возможной мощности машины. В будущем планируется подключить дополнительные вычислительные модули, чтобы астрономы могли обрабатывать таймлапсы не только отдельных звезд, но и целых галактик.</p>
                </div>
                <img className='about-us__img_row' src={company}/>
            </div>
            <div className='about-us__case'>
                <img className='about-us__img_case' src={ex}/>
                <div className='about-us__content'>
                <p className='about-us__text about-us__text_case'>Создатели суперкомпьютера Setonix сообщили, что при генерации изображения использовалась только половина возможной мощности машины. В будущем планируется подключить дополнительные вычислительные модули.</p>
                <p className='about-us__text about-us__text_case'>Финансовые приложения пользуются повышенным интересом в республиках Северного Кавказа. На эту категорию приходится более 81% от всех скачиваний в Ингушетии, около 72% в Чечне и 63% в Дагестане. </p>
                </div>
            </div>
            <div className='about-us__content'>
            <h2 className='about-us__title'>Название</h2>
            <div className='about-us__columns'>
                <div className='about-us__column'> 
                    <p className='about-us__text about-us__text_column'>Наиболее играющими регионами стали Республика Алтай и республика Хакасия, 14% и 11% от общего количества загрузок соответственно, следом расположились Ивановская область, Костромская область и Ненецкий автономный округ. </p>
                    <img className='about-us__img_column' src={les}/>
             </div>
                <div className='about-us__column'>
                    <p className='about-us__text about-us__text_column'>В данный момент RuStore работает в формате бета-тестирования, предоставляя возможности по скачиванию и размещению сервисов пользователям и разработчикам. В магазине представлены приложения технологических компаний, банков.</p>
                    <img className='about-us__img_column' src={les1}/>
                </div>
            </div>
            </div>
            </div>
            </div>
            
        </main>
    )
}

export default AboutUs;