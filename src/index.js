import React from 'react';
import ReactDOM from 'react-dom';
import { products } from "./data.js";

/*
Thinking in React: https://reactjs.org/docs/thinking-in-react.html

Step 1: Break The UI Into A Component Hierarchy

FilterableProductTable (orange)
  SearchBar (blue)
  ProductTable (green)
    ProductCategoryRow (turquoise)
    ProductRow (red)

Step 2: Build A Static Version in React


Step 3: Identify The Minimal (but complete) Representation Of UI State


Step 4: Identify Where Your State Should Live
Step 5: Add Inverse Data Flow
*/

function ProductCategoryRow({ category }) {
  return (
    <tr style={{ fontWeight: "bold" }}>
      <td colSpan="2">{category}</td>
    </tr>
  )
}

function ProductRow({ price, stocked, name }) {
  const style = stocked ? null : { color: "red", fontWeight: "bold" }
  return (
    <tr>
      <td style={style}>{name}</td>
      <td>{price}</td>
    </tr>
  )
}

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

function SearchBar() {
  return (
    <form style={{ padding: "10px", display: "flex", flexDirection: "column" }}>
      <input type="text" placeholder="Search..." />
      <label>
        <input type="checkbox" />
        Only show products in stock
      </label>
    </form>
  )
}

function FilterableProductTable({ products }) {
  return (
    <div>
      <SearchBar />
      <ProductTable products={products} />
    </div>
  )
}

function App() {
  return (
    <div>
      <FilterableProductTable />
      <img src="https://react.dev/images/docs/s_thinking-in-react_ui_outline.png" alt="Thinking in React" />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));