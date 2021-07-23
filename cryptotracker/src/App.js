import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header';
import Main from './components/Main';
import CinScreen from './components/CoinScreen';
import { CoinProvider } from './CoinContext';
import CoinScreen from './components/CoinScreen';
function App() {
  return (
    <CoinProvider>
      <Header />
      <Router>
        <Route path='/' component={Main} exact />
        <Route path='/coin/:id' component={CoinScreen} />
      </Router>
    </CoinProvider>
  );
}

export default App;
