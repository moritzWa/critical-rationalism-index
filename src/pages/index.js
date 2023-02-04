import React from "react"
// import { Link } from "gatsby"
// import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import HeroSection from "../components/HeroSection"
import Testimonial from "../components/Testimonial"
import Concepts from "../components/Concepts"
import Newsletter from "../components/Newsletter"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Critical Rationalism" />
    {/* <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <StaticImage
        src="../images/gatsby-astronaut.png"
        alt="gatsby astronaut"
      />
    </div> */}
    {/* <p><Link to="/page-2/">Go to page 2</Link></p> */}
    <HeroSection />
    <Testimonial />
    <Concepts />
    <Newsletter />
  </Layout>
)

export default IndexPage
