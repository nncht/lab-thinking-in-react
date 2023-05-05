import React from 'react';

function ProductRow({ products }) {
  const productList = products.map((product) => {
    return (
      <tr>
        <td style={{ color: product.inStock ? 'black' : 'red' }}>
          {product.name}
        </td>
        <td style={{ color: product.inStock ? 'black' : 'red' }}>
          {product.price}
        </td>
      </tr>
    );
  });
  return <tbody>{productList}</tbody>;
}

export default ProductRow;
