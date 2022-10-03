import './PageNotFound.css';
import {Link} from 'react-router-dom';

function PageNotFound () {
    return (
        <main className='page-notfound'>
            <div className='page-notfound__container'>
                <h2 className='page-notfound__title'>404</h2>
                <p className='page-notfound__subtitle'>Такой страницы нет</p>
                <Link to='/'>
                <button className='page-notfound__button'>Вернуться на главную</button>
                </Link>
            </div>
        </main>
    )
}

export default PageNotFound;