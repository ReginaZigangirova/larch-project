import './Action.css';
import action from '../../utils/action';
import actions from '../../images/actions.svg';

function Action() {
    return (
        <main className='action'>
            <div className='action__container'>
                <p className='action__paragraph'>Главная - Акции</p>
                <h2 className='action__title'>Акции</h2>
                <img className='action__img' src={actions} alt='' />
                <ul className='action-cards'>
                    {action.map((action) => (
                        <li className='action-card' key={action.id}>
                        <img className='action-card__img'src={action.img} alt={action.title} />
                        <h3 className='action-card__title'>{action.title}</h3>
                        <p className='action-card__description'>{action.description}</p>
                        <p className='action-card__price'>{action.price}</p>
                        <div className='action-card__row'>
                            <button className='action-card__button'>Перейти</button>
                            <p className='action-card__stock'>-20%</p>
                        </div>
                    </li>
                    ))}
                </ul>
            </div>
        </main>
    )
}

export default Action;