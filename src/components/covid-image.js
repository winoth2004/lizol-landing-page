import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const CovidImage = () => {
    const data = useStaticQuery(graphql`
        query {
            heroImage: file(relativePath: { eq: "banner-covid.jpeg" }) {
                childImageSharp {
                    fluid(maxWidth: 768) {
                    ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `)

    if (!data?.heroImage?.childImageSharp?.fluid) {
    return <div>Picture not found</div>
    }

    return (<a
                href="https://www.covid-19facts.com/">
                <Img fluid={data.heroImage.childImageSharp.fluid} />
            </a>);
}

export default CovidImage
