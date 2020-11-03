/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {

  return (
    <>
        <Header />
        <div
            style={{
            margin: `70px auto 0`,
            maxWidth: 960,
            padding: `0`,
            }}
        >
        <main>{children}</main>
        </div>
    </>
  )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout
