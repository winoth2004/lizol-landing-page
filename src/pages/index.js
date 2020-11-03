import React from "react"

import Layout from "../components/layout"
import HeroImage from "../components/hero-image"
import SEO from "../components/seo"
import StoreCard from "../components/store-card"
import CovidImage from "../components/covid-image"
import IdeasAndTips from "../components/ideas-and-tips"
import ProductTypes from "../components/product-types"
import Products from "../components/products"

function initScrollListener() {
    let logoElm;
    document.body.onscroll = function() {
        if(!logoElm) {
            logoElm = document.querySelector(".brand_logo");
        }
        const scrollTop = document.documentElement.scrollTop;
        if (scrollTop < 70) {
            logoElm.style.backgroundSize = "85%";
        } else {
            logoElm.style.backgroundSize = "65%";
        }
    };
}

const IndexPage = () => {
    initScrollListener();
    return (<Layout>
        <SEO title="Home" />
        <HeroImage />
        <StoreCard />
        <CovidImage />
        <IdeasAndTips />
        <ProductTypes />
        <Products />
    </Layout>);
}

export default IndexPage
