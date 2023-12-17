import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./Components/Home"
import Product from "./Pages/Products/Product"
import ShoppingCart from "./Pages/ShoppingCart/ShoppingCart"


function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/products/:id" element={<Product />} />
          <Route path="/shopping-cart" element={<ShoppingCart />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
