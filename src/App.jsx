import React from 'react';
import Navber from './Components/Navber';
import Category from './Components/pages/Category';
import TopRest from './Components/pages/TopRest';
import ProductList from './Components/pages/ProductList';
import Footer from './Components/pages/Footer';
import AppDownload from './Components/pages/AppDownload';


function App() {
  return (
    <>
      <Navber />
      <Category />
      <TopRest />
      <ProductList/>
      <AppDownload/>
      <Footer/>

    </>
  );
}

export default App;
