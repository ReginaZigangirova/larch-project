import './Delivery.css';
import mesto from '../../images/mesto.svg';
import deliv from '../../images/deliv.png';
import check from '../../images/check.svg';
import Catalog from '../Catalog/Catalog';

function Delivery () {
    return (
        <main className='delivery'>
            <div className='delivery__container'>
                <div className='delivery__content'>
                    <p className='delivery__paragraph'>Главная - Контакты</p>
                    <Catalog />
                </div>
                <div className='delivery__content'>
                    <div className='delivery__columns'>
                        <div className='delivery__column'>
                        <h2 className='delivery__title'>Информация о доставке</h2>
                        <p className='delivery__subtitle'>Дорогой покупатель! Мы доставляем погонажные изделия по Москве и Московской области.</p>
                        <p className='delivery__text'>Компания «Лиственница опт» предлагает купить пиломатериалы со склада производителя, оптом и в розницу, доску обрезную, брус, вагонку, блок-хаус, фанеру, дешево, с доставкой своим спецавтопарком по Москве и Московской области.</p>
                        </div>
                        <div className='delivery__column'>
                        <img className='delivery__img' src={mesto}/>
                        </div>
                        
                    </div>
                    <ul className='delivery__list'>
                        <li className='delivery__list-item'>
                            <img className='delivery__check' src={check}/>
                            Осуществляем доставку пиломатериалов своим парком при объеме заказа не менее 2 кубов!
                        </li>
                        <li className='delivery__list-item'>
                            <img className='delivery__check' src={check}/>
                            Компановка и погрузка товара в открытый кузов на нашей базе производится бесплатно!
                        </li>
                        <li className='delivery__list-item'>
                            <img className='delivery__check' src={check}/>
                            Разгрузка лесоматериалов на площадке заказчика 300 рублей за куб, не далее 3м от машины!
                        </li>
                        <li className='delivery__list-item'>
                            <img className='delivery__check' src={check}/>
                            Оперативная транспортировка лесопродукции в любую точку Москвы и Московской области!
                        </li>
                        <li className='delivery__list-item'>
                            <img className='delivery__check' src={check}/>
                            Оказываем услуги по транспортному распилу длинномерного погонажа по доступным ценам!
                        </li>
                    </ul>
                    <img className='delivery__image' src={deliv} />
                    <h3 className='delivery__head'>Условия возврата и замены</h3>
                    <ul className='delivery__list'>
                        <div className='delivery__row'>
                        <img className='delivery__check' src={check}/>
                        <li className='delivery__list-item delivery__list-item_replace'>
                            В случае, если продукция не соответствует заявленному качеству, замена либо возврат происходит в течении 3-х дней с момента поставки, при условии, что товар не был поврежден: распилен, покрашен, а так же иные повреждения.
                        </li>
                        </div>
                    <div className='delivery__row'>
                    <img className='delivery__check' src={check}/>
                    <li className='delivery__list-item delivery__list-item_replace'>
                            Замена происходит в любое удобное время для заказчика и полностью выполняется за счет компании, включая погрузочно-разгрузочные работы.
                        </li>
                    </div>
                    <div className='delivery__row'>
                    <img className='delivery__check' src={check}/>
                    <li className='delivery__list-item delivery__list-item_replace'>
                            В случае возврата продукции, возврат денежных средств происходит тем же образом, которым была сделана оплата.
                        </li>
                    </div>
                    </ul>
                    <h3 className='delivery__head'>Стоимость доставки</h3>
                    <div className='delivery__case'>
                    <table className='delivery__table'>
                        <tbody>
                        <tr className='delivery__table-tr'>
                            <th className='delivery__table-th'>Расстояние</th>
                            <th className='delivery__table-th'>Газель до 3м3</th>
                            <th className='delivery__table-th'>Валдай до 5м3</th>
                            <th className='delivery__table-th'>Камаз до 12м3</th>
                        </tr>
                        <tr className='delivery__table-tr'>
                            <td className='delivery__table-td'>30км</td>
                            <td className='delivery__table-td'>2400 руб</td>
                            <td className='delivery__table-td'>4100 руб</td>
                            <td className='delivery__table-td'>5300 руб</td>
                        </tr>
                        <tr className='delivery__table-tr'>
                            <td className='delivery__table-td'>30км</td>
                            <td className='delivery__table-td'>2400 руб</td>
                            <td className='delivery__table-td'>4100 руб</td>
                            <td className='delivery__table-td'>5300 руб</td>
                        </tr>
                        <tr className='delivery__table-tr'>
                            <td className='delivery__table-td'>30км</td>
                            <td className='delivery__table-td'>2400 руб</td>
                            <td className='delivery__table-td'>4100 руб</td>
                            <td className='delivery__table-td'>5300 руб</td>
                        </tr>
                        <tr className='delivery__table-tr'>
                            <td className='delivery__table-td'>30км</td>
                            <td className='delivery__table-td'>2400 руб</td>
                            <td className='delivery__table-td'>4100 руб</td>
                            <td className='delivery__table-td'>5300 руб</td>
                        </tr>
                        <tr className='delivery__table-tr'>
                            <td className='delivery__table-td'>30км</td>
                            <td className='delivery__table-td'>2400 руб</td>
                            <td className='delivery__table-td'>4100 руб</td>
                            <td className='delivery__table-td'>5300 руб</td>
                        </tr>
                        </tbody>
                    </table>
                    <button className='delivery__button'>Уточнить стоимость доставки</button>
                    </div>
                    
                </div>
            </div>
        </main>
    )
}

export default Delivery;