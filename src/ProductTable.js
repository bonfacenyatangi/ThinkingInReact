import React from 'react';
import ProductCategoryRow from "./ProductCategoryRow"
import ProductRow from "./ProductRow"


function ProductTable({ products }) {

  const rows = [];
  let lastCategory;
  for (const product of product.category(products)) {
    if (product.category !== lastCategory) {
      rows.push(<ProductCategoryRow key={product.category} category={product.category} />)
    }
    rows.push(<ProductRow key={product.name} name={product.name} stocked={product.stocked} price={product.price} />)
    lastCategory = product.category
  }

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {rows}
      </tbody>
    </table>
  )
}

export default ProductTable