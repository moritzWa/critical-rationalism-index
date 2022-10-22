import React from "react"
import { PageProps, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PeopleTable from "../components/PeopleTable"
import ResourceTable from "../components/ResourceTable"

// TODO: add filter logic:
// pressing pill button should filter for books articles podcasts etc.
// and pass this state down to the table component

const People = (props: PageProps) => (
  <Layout>
    <SEO title="Resources" />
    <h1>Resources</h1>
    <p className="pt-2">
      This is a non-comprehensive list of Critical Rationalism related
      resources.
    </p>
    <ResourceTable />
  </Layout>
)

export default People
