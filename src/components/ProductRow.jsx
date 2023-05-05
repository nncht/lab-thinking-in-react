import React from 'react';

function ProductRow({ products }) {
  const productList = products.map((product) => {
    const stock = product.inStock ? 'black' : 'red';

    return (
      <tr>
        <td width={200} className={stock}>
          {product.name}
        </td>
        <td width={200}>$19.99</td>
      </tr>
    );
  });
  return <tbody>{productList}</tbody>;
}

export default ProductRow;
