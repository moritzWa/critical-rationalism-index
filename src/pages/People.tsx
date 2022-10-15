import React from "react"
import { PageProps, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PeopleTable from '../components/PeopleTable'

const People = (props: PageProps) => (
  <Layout>
    <SEO title="People" />
    <h1>People</h1>
    {/* <p>Welcome to page 2 ({props.path})</p> */}
    <PeopleTable/>
  </Layout>
)

export default People
