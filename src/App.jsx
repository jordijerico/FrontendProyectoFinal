import React from 'react'
import { Header } from './common/Header/Header'
import { Body } from './pages/Body/Body'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Footer } from './common/Footer/Footer';


export const App = () => {
  return (
    <div className="App">
      <Header />
      <Body />
      <Footer />
    </div>
  )
}
