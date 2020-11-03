import React from "react"

import Layout from "../components/layout"
import HeroImage from "../components/hero-image"
import SEO from "../components/seo"
import StoreCard from "../components/store-card"
import CovidImage from "../components/covid-image"
import IdeasAndTips from "../components/ideas-and-tips"
import ProductTypes from "../components/product-types"
import Products from "../components/products"

const IndexPage = () => {
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
