import Sidebar from "./sidebar/sidebar.js"
import React from 'react';
import Products from "./ProductListing"

function home() {
    return (
        <div class="home">
            <Sidebar />
            <Products />
        </div>
    )
}

export default home
