// pages/index.js
import React from 'react';
import ProductList from '@/app/components/ProductList.tsx';
import { ItemCard, GridProducts } from './components/StyleGridProducts'

const Home = () => {
  return (
    <GridProducts>
      <ProductList />
    </GridProducts>
  );
};

export default Home;
