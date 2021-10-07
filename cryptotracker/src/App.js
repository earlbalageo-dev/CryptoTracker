import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header';
import Main from './components/Main';
import Favourite from './components/Favourite';
import CoinScreen from './components/CoinScreen';
import { FaveCoinsProvider } from './context/FaveCoinsContext';
import { LoadingProvider } from './context/LoadingContext';
import { FilterProvider } from './context/FilterContext';
function App() {
  return (
    <Router>
      <LoadingProvider>
        <FilterProvider>
          <FaveCoinsProvider>
            <Header />
            <Route exact path='/' component={Main} />
            <Route path='/coin/:id' component={CoinScreen} />
            <Route path='/favourite' component={Favourite} />
          </FaveCoinsProvider>
        </FilterProvider>
      </LoadingProvider>
    </Router>
  );
}

export default App;
