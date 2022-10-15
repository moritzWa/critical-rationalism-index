import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Table from '../components/table'

// TODO: add filter logic: 
// pressing pill button should filter for books articles podcasts etc.
// and pass this state down to the table component  

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />    
    {/* <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <StaticImage
        src="../images/gatsby-astronaut.png"
        alt="gatsby astronaut"
      />
    </div> */}
    {/* <p><Link to="/page-2/">Go to page 2</Link></p> */}
    <h1>Resources</h1>
    <Table/>
  </Layout>
)

export default IndexPage
