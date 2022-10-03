import './Properties.css';

function Properties () {
    return (
        <section className='properties'>
            <h2 className='properties__title'>Удивительные свойства <span className='properties__span'>лиственницы</span></h2>
            <div className='properties__container'>
                <div className='properties__card'>
                    <h3 className='properties__head'>Прочность древесины</h3>
                    <p className='properties__text properties__text_first'>Лиственница имеет уникальную прочность и твёрдость, возрастающую со временем.</p>
                </div>
                <div className='properties__card'>
                    <h3 className='properties__head'>Устойчивость к внешним факторам</h3>
                    <p className='properties__text '>Переносит температурные перепады, влажность и другие негативные воздействия. Древесина огнестойка.</p>
                </div>
                <div className='properties__card'>
                    <h3 className='properties__head'>Надежная теплоизоляция</h3>
                    <p className='properties__text'>В холода лиственница сохраняет тепло, а в тёплую погоду в доме царит приятная прохлада.</p>
                </div>
            </div>
        </section>
    )
}

export default Properties;