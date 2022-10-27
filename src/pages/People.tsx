import React from "react"
import { PageProps, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PeopleTable from "../components/PeopleTable"

const People = (props: PageProps) => (
  <Layout>
    <SEO title="People" />
    <div className="p-8">
      <h1>People to follow</h1>
      <p className="pt-2">
        This is a non-comprehensive list of people that have expressed viewes
        and cretaed artefacts aligned with Critical Rationalism.
      </p>
      <PeopleTable />
    </div>
  </Layout>
)

export default People
