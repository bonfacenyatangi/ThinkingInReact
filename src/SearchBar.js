import React from 'react';

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
export default SearchBar