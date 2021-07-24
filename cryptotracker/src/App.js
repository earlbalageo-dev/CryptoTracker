import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header';
import Main from './components/Main';
import Favourite from './components/Favourite';
import CoinScreen from './components/CoinScreen';
import { FaveCoinsProvider } from './context/FaveCoinsContext';

function App() {
  return (
    <Router>
      <FaveCoinsProvider>
        <Header />

        <Route path='/' component={Main} exact />
        <Route path='/coin/:id' component={CoinScreen} />
        <Route path='/favourite' component={Favourite} />
      </FaveCoinsProvider>
    </Router>
  );
}

export default App;
