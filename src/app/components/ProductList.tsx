// components/ProductList.js
'use client'

import React, { useState, useEffect } from 'react';
import { ItemCard, ProductItem } from './StyleGridProducts';
import ShoppingBagIcon from './ShoppingBagIcon';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?page=1&rows=8&sortBy=id&orderBy=DESC');
        const data = await response.json();
        setProducts(data.products);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <ItemCard>
      {products.map(product => (
        <ProductItem key={product.id}>
          <div>
            <img src={product.photo} alt={product.name} />
            <div>
              <div>
                <h2>{product.name}</h2>
                <p>R$ {parseFloat(product.price).toFixed(2).replace(/\.00$/, '')}</p>
              </div>
              <p>{product.description}</p>
            </div>
            <button type="button">
              <ShoppingBagIcon></ShoppingBagIcon>
              COMPRAR
            </button>
          </div>
        </ProductItem>
      ))}
    </ItemCard>
  );
};

export default ProductList;
