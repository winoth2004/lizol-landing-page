import React from "react"

import "./store-card.css"

const StoreCard = () => {
    return (<section className="store-card">
            <div className="title">
                <h2>Make your home surfaces Safe To Touch</h2>
            </div>
            <div className="link-to-container">
                <a
                    href="https://www.lizol.co.in/products"
                    className="red-round-btn">
                Learn More</a>
            </div>
        </section>);
}

export default StoreCard
