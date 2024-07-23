
import './App.css'

import { Routes, Route } from 'react-router-dom'
import { Header } from './components/Header'
import { Footer } from './components/Footer'

import { Home } from './pages/Home'
import { Catalog } from './pages/Catalog'
import { About } from './pages/About'
import { Contacts } from './pages/Contacts'
import { Product } from './pages/Product'
import { NotFound } from './pages/NotFound'
import { Basket } from './pages/Basket'
import { Banner } from './components/Banner'

function App() {

  return (
    <>
      <Header />
      <main>
        <Banner />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/catalog' element={<Catalog />} />
          <Route path='/catalog/:id' element={<Product />} />
          <Route path='/about' element={<About />} />
          <Route path='/contacts' element={<Contacts />} />
          <Route path='/basket' element={<Basket />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App
