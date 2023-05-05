import React from 'react';
import ProductRow from './ProductRow';

function ProductTable({ products }) {
  return (
    <table width={600}>
      <tr>
        <th>Name</th>
        <th>Price</th>
      </tr>
      <ProductRow products={products} />
    </table>
  );
}

export default ProductTable;
