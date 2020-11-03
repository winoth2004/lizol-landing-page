import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import "./product-types.css"

const PRODUCT_TYPE_INFO = {
    "power_clean_1": {
        title: "Removes 99.9% germs"
    },
    "power_clean_2": {
        title: "Powers through dirt and grime and leaves no harsh residue"
    },
    "power_clean_3": {
        title: "Leaves pleasant fragrance"
    },
    "surface_clean_1": {
        title: "Kills 99.9% germs & viruses"
    },
    "surface_clean_2": {
        title: "10x better cleaning and germ kill vs phenyls and detergent"
    },
    "surface_clean_3": {
        title: "Recommended by Indian Medical Association"
    },
    "cement_surface_clean_1": {
        title: "Removes 99.9% germs"
    },
    "cement_surface_clean_2": {
        title: "Removes tough white stains"
    },
    "cement_surface_clean_3": {
        title: "Leaves pleasant fragrance"
    }
};

const renderAccordionInfo = (fileInfo) => {
    if (PRODUCT_TYPE_INFO[fileInfo.name]) {
        const title = PRODUCT_TYPE_INFO[fileInfo.name].title;
        return (
            <div className="pd-type" key={fileInfo.name}>
                <div className="pd-desc">
                    <img src={fileInfo.publicURL} alt={title}/>
                </div>
                <div className="pd-title">
                    {title}
                </div>
            </div>
        );
    }
    return null;
};

const ProductTypes = () => {
    const data = useStaticQuery(graphql`
        query {
            powerCleanImages: allFile(filter: {name: {regex: "/power_clean_*/i"}}) {
                edges {
                    node {
                        publicURL
                        name
                    }
                }
            }
            surfaceCleanImages: allFile(filter: {name: {regex: "/surface_clean_*/i"}}) {
                edges {
                    node {
                        publicURL
                        name
                    }
                }
            }
            cementCleanImages: allFile(filter: {name: {regex: "/cement_surface_clean_*/i"}}) {
                edges {
                    node {
                        publicURL
                        name
                    }
                }
            }
        }
    `);

    return (
        <section className="pd-type-container">
            <div className="pd-header">
                <h2>What is needed to protect?</h2>
            </div>
            <div className="accordion-container">
                <input id="power_clean" type="checkbox" />
                <label htmlFor="power_clean">Lizol All Purpose Power Cleaner</label>
                <article id="power_clean_info">
                    {data.powerCleanImages.edges.map((fileInfo) => {
                        return renderAccordionInfo(fileInfo.node);
                    })}
                </article>
                <input id="surface_clean" type="checkbox" />
                <label htmlFor="surface_clean">Lizol Disinfectant Surface Cleaner</label>
                <article id="surface_clean_info">
                    {data.surfaceCleanImages.edges.map((fileInfo) => {
                        return renderAccordionInfo(fileInfo.node);
                    })}
                </article>
                <input id="cement_surface_clean" type="checkbox" />
                <label htmlFor="cement_surface_clean">Lizol Cement Surface Cleaner</label>
                <article id="cement_surface_clean_info">
                    {data.cementCleanImages.edges.map((fileInfo) => {
                        return renderAccordionInfo(fileInfo.node);
                    })}
                </article>
            </div>
        </section>
    );
};

export default ProductTypes
