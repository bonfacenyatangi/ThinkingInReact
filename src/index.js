import React from 'react';
import ReactDOM from 'react-dom';
import { items } from './data';
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
    <tr>
      <td>{category}</td>
    </tr>
  )
}

function ProductRow({ price, stocked, name }) {
  return (
    <tr>
      <td style={{ color: stocked ? "black" : "red" }}>{name}</td>
      <td>{price}</td>
    </tr>
  )
}

function ProductTable() {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        <ProductCategoryRow category="Sporting Goods" />
        <ProductRow name="Football" stocked={true} price={49.99} />
        <ProductRow name="Baseball" stocked={true} price={9.99} />
        <ProductRow name="Basketball" stocked={false} price={29.99} />
        <ProductCategoryRow category="Electronics" />
        <ProductRow name="iPod Touch" stocked={true} price={49.99} />
        <ProductRow name="iPhone 5" stocked={false} price={9.99} />
        <ProductRow name="Nexus 7" stocked={true} price={29.99} />
      </tbody>
    </table>
  )
}

function SearchBar() {
  return (
    <form style={{ padding: "5px", border: "1px solid blue", display: "flex", flexDirection: "column" }}>
      <input type="text" placeholder="Search..." />
      <label>
        <input type="checkbox" />
        Only show products in stock
      </label>
    </form>
  )
}

function FilterableProductTable() {
  return (
    <div style={{ padding: "5px", border: "1px solid orange" }}>
      <SearchBar />
      <ProductTable />
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