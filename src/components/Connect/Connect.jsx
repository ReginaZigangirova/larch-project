import './Connect.css';
import vector from '../../images/vector.svg';

function Connect () {
    return (
        <section className='connect'>
            <div className='connect__container'>
                <h2 className='connect__title'>Есть вопросы?</h2>
            </div>
            <div className='connect__content'>
            <h3 className='connect__head'>Наши специалисты свяжутся с вами в самое ближайшее время</h3>
                <form className='connect__form'>
                    <div className='connect__input-container'>
                    <input className='connect__input' placeholder='Имя'></input>
                    
                    <input className='connect__input' placeholder='Номер'></input>
                    <input className='connect__input' placeholder='E-mail'></input>
                    <div className='connect__input-content'>
                    <input className='connect__answer' placeholder='Как вам ответить?'></input>
                    <img className='connect__img' src={vector} />
                    </div>
                    </div>
                    <input className=' connect__input-comment' placeholder='Ваш комментарий'></input>
                    <div className='connect__row'>
                    <button className='connect__button'>Отправить</button>
                    <p className='connect__text'>Все ваши данные останутся конфидициальными</p>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Connect;