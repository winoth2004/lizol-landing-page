/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React, {useEffect} from "react"
import PropTypes from "prop-types"
import {Helmet} from "react-helmet";

import Header from "./header"
import "./layout.css"

import {initPageEvent, initPOEvents} from "../util/page-latency-event"

const Layout = ({ children }) => {
    initPOEvents();
    useEffect(() => {
        initPageEvent();
    });

    return (
        <>
            <Helmet>
                <script type="text/javascript">{`
                    if (window) {
                        window.t0 = (new Date());
                    }
                `}</script>
            </Helmet>
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
