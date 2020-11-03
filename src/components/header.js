import { Link, useStaticQuery, graphql } from "gatsby"
import React from "react"

import "./header.css"

const Header = ({ siteTitle }) => {
    const data = useStaticQuery(graphql`
        query {
            brandIconImage: file(relativePath: { eq: "lyzol-homepage.png" }) {
                childImageSharp {
                    fluid(maxWidth: 300) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `)
    const logo_style_rule = {
        color: 'white',
        backgroundImage: `url(${data.brandIconImage.childImageSharp.fluid.src})`
    };
    return (<header>
        <Link
            to="/"
        >
            <div className="brand_logo"
                style={logo_style_rule}></div>
        </Link>
    </header>);
}

export default Header
