import React from 'react';
import MenuComponent from './components/MenuComponent'
import NavBarComponent from './components/NavBarComponent'
import './style.css'
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
    <NavBarComponent />
    <MenuComponent />
    <Footer />
    </div>
  );
}

export default App;
