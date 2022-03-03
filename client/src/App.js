import React from 'react';
import Nav from './components/Nav/Nav';
import About from './pages/About'
import Shop from './pages/Shop'
import Home from './pages/Home'
import Item from './pages/Item'
import Cart from './pages/Cart'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
function App() {
  return (
    <Router>
    <div className="App">
      <Nav/>
    </div>

    {/*----ROUTES----*/}
    <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<About />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/shop/:id" element={<Shop/>}/>
            <Route path="/shop/:id/:id2" element={<Item/>}/>
            <Route path="/shopping-cart" element={<Cart/>}/>

    </Routes>
    </Router>
  );
}

export default App;
