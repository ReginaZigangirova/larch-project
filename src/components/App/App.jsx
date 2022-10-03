import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Contacts from '../Contacts/Contacts';
import PageNotFound from '../PageNotFound/PageNotFound';
import AboutUs from '../AboutUs/AboutUs';
import Delivery from '../Delivery/Delivery';
import Cubature from '../Cubature/Cubature';
import Production from '../Production/Production';
import Action from '../Action/Action';
import {Switch, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/'>
        <Header />
        <Main />
        <Footer />
        </Route>
        <Route path='/contacts'>
          <Header />
          <Contacts />
          <Footer />
        </Route>
        <Route path='/about-us'>
        <Header />
          <AboutUs />
          <Footer />
        </Route>
        <Route path='/delivery'>
          <Header />
          <Delivery />
          <Footer />
        </Route>
        <Route path='/cubature'>
          <Header />
          <Cubature />
          <Footer />
        </Route>
        <Route path='/production'>
          <Header />
          <Production />
          <Footer />
        </Route>
        <Route path='/action'>
          <Header />
          <Action />
          <Footer />
        </Route>
        <Route path='*'>
          <Header />
          <PageNotFound />
          <Footer />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
