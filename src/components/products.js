import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import "./products.css"

const PRODUCTS_INFO = {
    "product-lizol-surface-cleaner.jpg": {
        title: "Lizol Surface Cleaner",
        link: "https://www.amazon.in/Lizol-Disinfectant-Floor-Cleaner-Citrus/dp/B00NWFXTJY/",
        key: "surface-cleaner"
    },
    "product-lizol-kitchen-power-cleaner.jpg": {
        title: "Lizol Power Cleaner",
        link: "https://www.amazon.in/Lizol-Trigger-Power-Kitchen-Cleaner/dp/B07DD11Z1D/",
        key: "kitchen-power-cleaner"
    },
    "product-lizol-cement-floor-cleaner.jpg": {
        title: "Lizol Concentrate Cleaner",
        link: "https://www.amazon.in/Lizol-Double-Concentrate-Disinfectant-Cleaner/dp/B089H7YF66/",
        key: "cement-floor-cleaner"
    }
};

const renderProductItem = (imageInfo) => {
    const productInfo = PRODUCTS_INFO[imageInfo.originalName];
    if (productInfo) {
        return (
            <article className="product-item" key={productInfo.key}>
                <Img fluid={imageInfo} />
                <a href={productInfo.link}>{productInfo.title}</a>
            </article>
        );
    }
    return null;
};

const Products = () => {
    const data = useStaticQuery(graphql`
        query {
            productsImage: allImageSharp(filter: {fluid: {originalName: {regex: "/product-.*/i"}}}) {
                edges {
                    node {
                        fluid {
                            ...GatsbyImageSharpFluid
                            originalName
                        }
                    }
                }
            }
        }
    `);

    return (
        <div className="products-container">
            <h2>Our Products</h2>
            {data.productsImage.edges.map((productInfo) => {
                const imageInfo = productInfo.node.fluid;
                return renderProductItem(imageInfo);
            })}
        </div>
    );
};

export default Products
