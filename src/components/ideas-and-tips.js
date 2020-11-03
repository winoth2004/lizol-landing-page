import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import "./ideas-and-tips.css"

const TIPS_INFO = {
    "tips-surface-safe.png": {
        title: "Making Surfaces Safe to Touch",
        description: "Be it doorknobs, tabletops, kitchen slabs or any other surface, make sure you clean and disinfect each of them with our best surface cleaner before touching them . #disinfecttoprotect",
        link: "https://www.amazon.in/stores/page/F277E97C-F54C-42DB-9B2D-C88E61931844?productGridPageIndex=1",
        key: "surface-safe"
    },
    "tips-disinfect.png": {
        title: "Disinfect To Protect",
        description: "Not just cleaning but disinfection is an important part of keeping your home healthy and your loved ones protected from illness causing germs.",
        link: "https://www.amazon.in/stores/page/3F4C592B-B3B6-408E-AC1D-58F5EDD00D4C",
        key: "disinfect"
    },
    "tips-home-clean.png": {
        title: "Home Cleaning Tips",
        description: "Cleaning and disinfecting every corner of the house can be tricky, especially when you have to choose from a number of cleaners for every item. But with a multi-surface cleaner and some other useful tips, it can be done in no time.",
        link: "https://www.amazon.in/stores/page/827D02EB-6F99-4CD7-AD65-92FD36A0131E",
        key: "home-clean"
    }
};

const renderTipsItem = (imageInfo) => {
    const tipsInfo = TIPS_INFO[imageInfo.originalName];
    if (tipsInfo) {
        return (
            <li key={tipsInfo.key}>
                <article className="tips-item">
                    <Img fluid={imageInfo} />
                    <span className="title">{tipsInfo.title}</span>
                    <div className="description">{tipsInfo.description}</div>
                    <a href={tipsInfo.link}>Learn More</a>
                </article>
            </li>
        );
    }
    return null;
};

const IdeasAndTips = () => {
    const data = useStaticQuery(graphql`
        query {
            tipsImage: allImageSharp(filter: {fluid: {originalName: {regex: "/tips-.*png/i"}}}) {
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
        <section className="tips-container">
            <div className="tips-list-container">
                <ul className="tips-list">
                    {data.tipsImage.edges.map((item) => {
                        const imageInfo = item.node.fluid;
                        return renderTipsItem(imageInfo);
                    })}
                </ul>
            </div>
        </section>
    );
};

export default IdeasAndTips
