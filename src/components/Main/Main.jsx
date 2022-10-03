import './Main.css';
import Promo from '../Promo/Promo';
import Properties from '../Properties/Properties';
import AboutCompany from '../AboutCompany/AboutCompany';
import Products from '../Products/Products';
import Services from '../Services/Services';
import Stock from '../Stock/Stock';
import Connect from '../Connect/Connect';

function Main () {
    return (
        <main className='main'>
            <Promo />
            <AboutCompany />
            <Products />
            <Properties />
            <Services />
            <Stock />
            <Connect />
        </main>
    )
}

export default Main;