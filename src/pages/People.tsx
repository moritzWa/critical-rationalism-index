import React from "react"
import { PageProps, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PeopleTable from "../components/PeopleTable"

const People = (props: PageProps) => (
  <Layout>
    <SEO title="People" />
    <h1>People</h1>
    <p className="pt-2">
      This is a non-comprehensive list of people that have expressed viewes and
      cretaed artefacts aligned with Critical Rationalism.
    </p>
    <PeopleTable />
  </Layout>
)

export default People
