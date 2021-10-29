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
        <Route to='/' component={HomeScreen} exact />
        {/* <Route to='/shop' component={ShopScreen} exact /> */}
      </main>
      <Footer />
    </Router>
  );
};

export default App;
