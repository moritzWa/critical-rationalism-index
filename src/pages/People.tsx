import React from "react"
import { PageProps } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PeopleTable from "../components/PeopleTable"

const People = (props: PageProps) => (
  <Layout>
    <SEO title="People" />
    <div className="p-8">
      <h1>People to follow</h1>
      <p className="pt-2">
        This is a non-comprehensive list of people that have expressed views and
        created artifacts aligned with Critical Rationalism.
      </p>
      <PeopleTable />
      <div className="flex justify-center">
        <div className="p-10 text-gray-500">
          If you are CR aligned and wish to be listed here, please add your
          information via this form (I'll triage the form submissions every few
          weeks) You are CR aligned/interested and are open to be listed here?
          Please add your information via a{" "}
          <a href="https://github.com/moritzWa/critical-rationalism-index">
            GitHub PR
          </a>{" "}
          or via <a href="https://forms.gle/7agxdsL4qdoeGBGL8">this form</a>{" "}
          (I'll triage the form submissions every few weeks).
        </div>
      </div>
    </div>
  </Layout>
)

export default People
