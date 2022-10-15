import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Table from '../components/table'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>This is still under construction</h1>
    
    {/* <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <StaticImage
        src="../images/gatsby-astronaut.png"
        alt="gatsby astronaut"
      />
    </div> */}
    {/* <p><Link to="/page-2/">Go to page 2</Link></p> */}
    <Table/>
  </Layout>
)

export default IndexPage
