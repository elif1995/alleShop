import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen'
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router , Routes, Route} from 'react-router-dom';
import './App.css';

const App = () => {
  return (
    <Router>
    
        <Header/>
        <main className='py-3'>
          <Container>
          <Routes>
            <Route path='/' element={<HomeScreen/>} />
            <Route path='/product/:id' element={<ProductScreen/>} />
            <Route path='/cart/' element={<CartScreen/>} />
            <Route path='/cart/:id' element={<CartScreen/>} />
          </Routes>
          </Container>
        </main>
        <Footer/>
    
    </Router>
    
  );
}

export default App;
