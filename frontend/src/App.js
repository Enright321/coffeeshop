import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreen from './screens/HomeScreen';
// import ShopScreen from './screens/ShopScreen';
import { BrowserRouter as Router, Route } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Header />
      <main>
        {/* <Route to='/shop' exact component={ShopScreen} /> */}
        <Route to='/' exact component={HomeScreen} />
      </main>
      <Footer />
    </Router>
  );
};

export default App;
