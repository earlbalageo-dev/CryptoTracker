import './App.css';
import { HashRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header';
import Main from './components/Main';
import Favourite from './components/Favourite';
import CoinScreen from './components/CoinScreen';
import { FaveCoinsProvider } from './context/FaveCoinsContext';
import { LoadingProvider } from './context/LoadingContext';
function App() {
  return (
    <Router>
      <LoadingProvider>
        <FaveCoinsProvider>
          <Header />
          <Route exact path='/' component={Main} />
          <Route path='/coin/:id' component={CoinScreen} />
          <Route path='/favourite' component={Favourite} />
        </FaveCoinsProvider>
      </LoadingProvider>
    </Router>
  );
}

export default App;
