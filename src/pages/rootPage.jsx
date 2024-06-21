import React from 'react';
import Header from '../Components/Header';
import { Outlet } from 'react-router-dom';
import "../App.css";
import "../index.css";

const RootPage = () => {
  return (
    <div>
      <Header />

      <main>
        <Outlet/>
      </main>
    
    </div>
  );
}

export default RootPage;