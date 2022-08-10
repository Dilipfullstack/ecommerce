import './App.css';
import Product from './component/products';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import ProductDisplayNext10 from './component/productNext10';
import ProductNext from './component/productsNext';
function App() {
  return (
    <>

<Router>
           <div className="App">
           <h1>Available Products</h1>

           <Routes>
                 <Route exact path='/' element={< Product />}></Route>
                 <Route exact path='/next' element={< ProductNext />}></Route>
          </Routes>
          </div>
       </Router>
    </>
  );
}

export default App;
