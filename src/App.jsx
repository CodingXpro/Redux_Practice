import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home'
import Cart from './pages/Cart'
import Navbar from './components/Navbar'
import { Provider } from 'react-redux';
import { BrowserRouter, Route ,Routes} from 'react-router-dom'
import store from './store/store'

function App() {

  return (
   <div className='App'>
    <Provider store={store}>

    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/cart' element={<Cart/>}/>

    </Routes>
    </BrowserRouter>
    </Provider>

   </div>
  )
}

export default App
