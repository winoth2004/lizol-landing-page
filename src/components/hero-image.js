import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.com/docs/use-static-query/
 */

const HeroImage = () => {
    const data = useStaticQuery(graphql`
        query {
            heroImage: file(relativePath: { eq: "lysol-hero-image.jpeg" }) {
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

    return <Img fluid={data.heroImage.childImageSharp.fluid} />
}

export default HeroImage
